import React, { useState, useRef, useEffect } from 'react';
import { TimelineLite } from 'gsap/all'

import { login }            from '../../services/auth';
import { ButtonSecondary }  from '../../components/Buttons';
import { ButtonPrimary }    from '../../components/Buttons';
import { InputIcon }        from '../../components/Input';
import UserIcon             from '../../assets/icons/user-color.svg'
import KeyIcon              from '../../assets/icons/key.svg'
import {
    LoginFormModal,
    LinkForm,
    ShowError,
    FormTitleModal
} from './style';
import {
    ModalWrapper,
    Modal as ModalPage,
    CloseModal,
    CloseModalIcon,
    ModalTitle,
    ModalContent
} from '../../components/Modal/style';

const ModalLogin = (props) => {
    const [logged, setLogged] = useState(false);
    const [Username, setUsername] = useState("");
    const [UserPassword, setUserPassword] = useState("");
    const [error, setError] = useState(null);
    const data = JSON.stringify({name: Username, password: UserPassword});
    let modal = useRef();
    let modalWrapper = useRef();

    const [modalAnimation, setModalAnimation] = useState();
    const [tl] = useState(new TimelineLite({ paused: true }));

    useEffect(() => {
        setModalAnimation(
            tl
            .to(modalWrapper, 0, {css: {display: 'flex'}})
            .from(modalWrapper, 0.5, { autoAlpha: 0 })
            .from(modal, 0.5, { bottom: 500, autoAlpha: 0})
            .pause()
        )
    // eslint-disable-next-line
    }, []);

    const validateForm = (
        username: String,
        password: String,
        setError: (error: String | null) => void
    ): Boolean => {
        if(!username || !password) {
            setError("Preencha o nome e senha para continuar!")
            return false
        }

        setError(null)
        return true;
    }

    const handleSignIn = async e => {
        fetch("http://localhost:4000/api/user/signin", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: data,
        }).then(response => {
            response.json().then(values => {
                if(values.token) {
                    login(values.token, values.user.id, values.user.name);
                    setError(null);

                    setLogged(true)
                } else {
                    setError("Houve um problema com o login, verifique suas credenciais.");
                }
            });
        }).catch(err => {
            setError("Houve um problema com o login, verifique suas credenciais.");
        })
    }

    const modalInside = () => {
        if(logged) {
            setTimeout(() => {
                modalAnimation.reverse();
            }, 2000);

            return (
                <span>Bem vindo, {Username}!</span>
            )
        } else {
            return (
                <LoginFormModal onSubmit={
                    e => {e.preventDefault();
                    if(validateForm(Username, UserPassword, setError)) {
                        handleSignIn();
                    }}
                }>
                    <FormTitleModal>Login</FormTitleModal>
                    <ShowError Situation={error}>
                        {error}
                    </ShowError>
                    <InputIcon 
                        type="text" 
                        icon={UserIcon}
                        placeholder="Nome..." 
                        onChange={e => setUsername(e.target.value)}
                    />
                    <InputIcon 
                        type="password"
                        icon={KeyIcon}
                        placeholder="Senha..." 
                        onChange={e => setUserPassword(e.target.value)}
                    />
                    <ButtonPrimary>Enviar</ButtonPrimary>
                    <LinkForm to="/user/register">Registre-se</LinkForm>
                    <LinkForm to="/user/passRecover">Recuperar Senha</LinkForm>
                </LoginFormModal>
            )
        }
    }

    return (
        <>
            <ButtonSecondary
                onClick={() => modalAnimation.play()}
                Width="150px"
                Height="40px"
                Margin="2vh 1vw"
                FontSize="12px"
            >
                Entrar
            </ButtonSecondary>
            <ModalWrapper 
                ref={div => modalWrapper = div}
                onClick={() => modalAnimation.reverse()}
            >
                <ModalPage 
                    ref={div => modal = div}
                    onClick={event => event.stopPropagation()}
                >
                    <CloseModal>
                        <CloseModalIcon
                            onClick={() => modalAnimation.reverse()}
                        />
                    </CloseModal>
                    <ModalTitle>{props.Title}</ModalTitle>
                    <ModalContent>
                        {modalInside()}
                    </ModalContent>
                </ModalPage>
            </ModalWrapper>
        </>
    )
}

export default ModalLogin;