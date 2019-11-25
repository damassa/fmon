import React, { useEffect, useRef, useState } from 'react';
import { TimelineLite } from 'gsap/all'

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
    LinkForm
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
                        <LoginName>Faça Login ou Registre-se</LoginName>
                    </LoginInfos>
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
                                <LoginForm>
                                    <InputIcon 
                                        type="text" 
                                        icon={UserIcon}
                                        placeholder="Nome..." 
                                    />
                                    <InputIcon 
                                        type="text"
                                        icon={KeyIcon}
                                        placeholder="Senha..." 
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
                </LoginWrapper>
            </UserWrapper>
        </>
    )
}

export default NavUser;