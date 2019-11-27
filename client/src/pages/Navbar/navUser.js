import React, { useEffect, useRef, useState }   from 'react';
import { TimelineLite }                         from 'gsap/all'
import {  withRouter }                          from 'react-router-dom';

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
    DropLink
} from './style';
import { isAuthenticated }  from '../../services/auth';
import Logout               from '../User/logout';
import ModalLogin           from '../User/modalLogin';

const NavUser = (props) => {
    let droppedUserMenu = useRef();

    const [dropMenuAnimation, setDropMenuAnimation] = useState();
    const [tl] = useState(new TimelineLite({ paused: true }));
    const [logged, setLogged] = useState(isAuthenticated());

    if(!logged && isAuthenticated()) {
        setLogged(true);
    }

    useEffect(() => {
        setDropMenuAnimation(
            tl
            .from(droppedUserMenu, 0.5, { autoAlpha: 0 })
            .pause()
        )
    // eslint-disable-next-line
    }, []);

    function userDrop() {
        if(logged) {
            return (
                <NavDrop ref={div => droppedUserMenu = div}>
                    <DropLink to={"/user/" + user.id}>Perfil</DropLink>
                    <DropLink to={"/user/config/" + user.id}>Configurações</DropLink>
                    <span onClick={() => setLogged(false)}><Logout /></span>
                </NavDrop>
            )
        } else {
            return (
                <NavDrop ref={div => droppedUserMenu = div}>
                    <ModalLogin logged={logged} setLogged={setLogged} />
                    <DropLink to="/user/register">Registrar</DropLink>
                    <DropLink to="/user/passRecover">Recuperar Senha</DropLink>
                </NavDrop>
            )
        }
    }

    let user;
    if(logged) {
        user = localStorage;
    } else {
        user = {
            name: "Faça Login ou Registre-se"
        }
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
                    {userDrop()}
                </LoginWrapper>
            </UserWrapper>
        </>
    )
}

export default withRouter(NavUser);