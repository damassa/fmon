import React, { useRef, useState, useEffect } from 'react';
import { TimelineLite } from 'gsap/all';
import { isAuthenticated }  from '../../services/auth';

import { 
    MenuMobileIcon,
    MenuMobile,
    MobileLink,
    MobileDrop,
    MenuDrop
} from './style';


const NavLinks = () => {
    let menu = useRef()
    let [menuAnimation, setMenuAnimation] = useState();
    let [menuState, setMenuState] = useState(false);
    let [tl] = useState(new TimelineLite({ paused: true }));
    let [logged, setLogged] = useState(isAuthenticated());
    let [dropActive, setDropActive] = useState(false);

    if(!logged && isAuthenticated()) {
        setLogged(true);
    }

    useEffect(() => {
        setMenuAnimation(
            tl
            .from(menu, 0, { autoAlpha: 0 })
            .from(menu, 1, { left: 850 })
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
        } else {
            setDropActive(true);
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
                    <MenuDrop>

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
                        Entrar / Registrar
                    </MobileDrop>
                    <MenuDrop>

                    </MenuDrop>
                </>
            )
        }
    }

    return (
        <>
            <MenuMobileIcon onClick={() => handleClick()} />
            <MenuMobile ref={div => menu = div}>
                <MobileLink exact to="/" activeClassName="active">
                    <span>Ínicio</span>
                </MobileLink>
                {userMenu()}
                <MobileLink exact to="/news" activeClassName="active">
                    <span>news</span>
                </MobileLink>
                <MobileLink exact to="/codes" activeClassName="active">
                    <span>codes</span>
                </MobileLink>
                <MobileLink exact to="/teste" activeClassName="active">
                    <span>Tetesteste</span>
                </MobileLink>
            </MenuMobile>
        </>
    )
}

export default NavLinks;
