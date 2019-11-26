import React, { useEffect, useRef, useState } from 'react';
import { TimelineLite } from 'gsap/all'

import { login, isAuthenticated } from '../../services/auth';
import Logout from '../User/logout';

import { 
    UserWrapper,
    NotificationsWrapper,
    LoginWrapper,
    Notification,
    LoginIcon,
    LoginInfos,
    LoginWelcome,
    LoginName,
    NavDrop,
    DropLink,
    LoginForm,
    LinkForm,
    ShowError
} from './style';

import { ButtonSecondary, ButtonPrimary }   from '../../components/Buttons';
import Modal                                from '../../components/Modal';
import { InputIcon }                        from '../../components/Input';
import UserIcon                             from '../../assets/icons/user-color.svg'
import KeyIcon                              from '../../assets/icons/key.svg'

const NavUser = () => {
    let droppedUserMenu = useRef();

    const [dropMenuAnimation, setDropMenuAnimation] = useState();
    const [tl] = useState(new TimelineLite({ paused: true }));

    useEffect(() => {
        setDropMenuAnimation(
            tl
            .from(droppedUserMenu, 0.5, { autoAlpha: 0 })
            .pause()
        )
    // eslint-disable-next-line
    }, []);

    const [Username, setUsername] = useState("");
    const [UserPassword, setUserPassword] = useState("");
    const [error, setError] = useState(null);
    const data = JSON.stringify({name: Username, password: UserPassword});

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
                login(values.token, values.user.id, values.user.name);
                
                dropMenuAnimation.reverse();
                setError(false);
            });
        }).catch(err => {
            setError("Houve um problema com o login, verifique suas credenciais.");
        })
    }

    let user;
    let userDrop;

    if(isAuthenticated()) {
        user = localStorage;

        userDrop = (
            <NavDrop ref={div => droppedUserMenu = div}>
                <DropLink to={"/user/" + user.id}>Perfil</DropLink>
                <DropLink to={"/user/config/" + user.id}>Configurações</DropLink>
                <Logout />
            </NavDrop>
        )
    } else {
        user = {
            name: "Faça Login ou Registre-se"
        }

        userDrop = (
            <NavDrop ref={div => droppedUserMenu = div}>
                <Modal 
                    Title={<>Login</>}
                    Button={
                        <ButtonSecondary
                            Width="150px"
                            Height="40px"
                            Margin="2vh 1vw"
                            FontSize="12px"
                        >
                            Entrar
                        </ButtonSecondary>
                    }
                    Content={
                        <LoginForm onSubmit={
                            e => {e.preventDefault();
                            if(validateForm(Username, UserPassword, setError)) {
                                handleSignIn();
                            }}
                        }>
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
                        </LoginForm>
                    }
                />
                <DropLink to="/user/register">Registrar</DropLink>
                <DropLink to="/user/passRecover">Recuperar Senha</DropLink>
            </NavDrop>
        )
    }

    return (
        <>
            <UserWrapper>
                <NotificationsWrapper>
                    <Notification />
                </NotificationsWrapper>
                <LoginWrapper
                    onMouseEnter={() => dropMenuAnimation.play()}
                    onMouseLeave={() => dropMenuAnimation.reverse()}
                >
                    <LoginIcon />
                    <LoginInfos>
                        <LoginWelcome>Bem vindo,</LoginWelcome>
                        <LoginName>{user.name}</LoginName>
                    </LoginInfos>
                    {userDrop}
                </LoginWrapper>
            </UserWrapper>
        </>
    )
}

export default NavUser;