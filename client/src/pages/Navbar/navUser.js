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
    DropLink
} from './style';

const NavUser = () => {
    let droppedMenu = useRef();

    const [dropMenuAnimation, setDropMenuAnimation] = useState();
    const [tl] = useState(new TimelineLite({ paused: true }));

    useEffect(() => {
        setDropMenuAnimation(
            tl
            .from(droppedMenu, 0.5, { autoAlpha: 0 })
            .pause()
        )
    // eslint-disable-next-line
    }, []);

    return (
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
                <NavDrop ref={div => droppedMenu = div}>
                    <DropLink to="/">Perfil</DropLink>
                    <DropLink to="/">Configurações</DropLink>
                </NavDrop>
            </LoginWrapper>
        </UserWrapper>
    )
}

export default NavUser;