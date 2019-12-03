import React, { useRef, useState, useEffect } from 'react';
import { TimelineLite } from 'gsap/all';
import { isAuthenticated }  from '../../services/auth';

import { 
    MenuMobileIcon,
    MenuMobile,
    MobileLink,
    MobileDrop,
    MenuDrop,
    MenuDropLink
} from './style';

const NavLinks = () => {
    let [logged, setLogged] = useState(isAuthenticated());

    let menu = useRef()
    let [menuAnimation, setMenuAnimation] = useState();
    let [menuState, setMenuState] = useState(false);
    let [tl1] = useState(new TimelineLite({ paused: true }));
    
    let menuDropUser = useRef();
    let [menuDropUserAnimation, setMenuDropUserAnimation] = useState();
    let [dropActive, setDropActive] = useState(false);
    let [tl2] = useState(new TimelineLite({ paused: true }));

    if(!logged && isAuthenticated()) {
        setLogged(true);
    }

    useEffect(() => {
        setMenuAnimation(
            tl1
            .from(menu, 0, { autoAlpha: 0 })
            .from(menu, 1, { left: 850 })
            .pause()
        )

        setMenuDropUserAnimation(
            tl2
            .from(menuDropUser, 0.5, { height: 0, autoAlpha: 0 })
            .pause()
        )
    // eslint-disable-next-line
    }, []);
    
    const handleClick = () => {
        if(menuState) {
            setMenuState(false);
            menuAnimation.reverse();
        } else {
            setMenuState(true);
            menuAnimation.play();
        }
    }   

    const handleClickDrop = () => {
        if(dropActive) {
            setDropActive(false);
            menuDropUserAnimation.reverse();
        } else {
            setDropActive(true);
            menuDropUserAnimation.play();
        }
    }

    const userMenu = () => {
        if(logged) {
            return (
                <>
                    <MobileDrop 
                        Active={dropActive}
                        onClick={() => handleClickDrop()}
                    >
                        <div>{localStorage.name}</div>
                    </MobileDrop>
                    <MenuDrop
                        ref={div => menuDropUser = div}
                    >
                        <MenuDropLink 
                            to={"/user/" + localStorage.id} 
                            onClick={() => menuAnimation.reverse()}
                        >
                            Perfil
                        </MenuDropLink>
                        <MenuDropLink 
                            to="/user/config"
                            onClick={() => menuAnimation.reverse()}
                        >
                            Configurações
                        </MenuDropLink>
                        <MenuDropLink 
                            to="/user/logout"
                            onClick={() => menuAnimation.reverse()}
                        >
                            Sair
                        </MenuDropLink>
                    </MenuDrop>
                </>
            )
        } else {
            return (
                <>
                    <MobileDrop 
                        Active={dropActive}
                        onClick={() => handleClickDrop()}
                    >
                        <div>Entrar / Registrar</div>
                    </MobileDrop>
                    <MenuDrop
                        ref={div => menuDropUser = div}
                    >
                        <MenuDropLink 
                            to="/user/signin"
                            onClick={() => menuAnimation.reverse()}
                        >
                            Entrar
                        </MenuDropLink>
                        <MenuDropLink 
                            to="/user/register"
                            onClick={() => menuAnimation.reverse()}
                        >
                            Registrar-se
                        </MenuDropLink>
                        <MenuDropLink 
                            to="/user/PassRecover"
                        >
                            Recuperar Senha
                        </MenuDropLink>
                    </MenuDrop>
                </>
            )
        }
    }

    return (
        <>
            <MenuMobileIcon onClick={() => handleClick()} />
            <MenuMobile ref={div => menu = div}>
                <MobileLink exact to="/" activeClassName="active" onClick={() => menuAnimation.reverse()}>
                    <span>Ínicio</span>
                </MobileLink>
                {userMenu()}
                <MobileLink exact to="/news" activeClassName="active" onClick={() => menuAnimation.reverse()}>
                    <span>Nóticias</span>
                </MobileLink>
                <MobileLink exact to="/stories" activeClassName="active" onClick={() => menuAnimation.reverse()}>
                    <span>Carreiras</span>
                </MobileLink>
                <MobileLink exact to="/championships" activeClassName="active" onClick={() => menuAnimation.reverse()}>
                    <span>Campeoanatos</span>
                </MobileLink>
            </MenuMobile>
        </>
    )
}

export default NavLinks;
