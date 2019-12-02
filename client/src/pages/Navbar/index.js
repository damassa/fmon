import React, { useEffect, useState } from 'react';

import NavLinks     from './navLinks';
import NavUser      from './navUser';
import MenuMobile   from './navMobile';

import { 
    NavWrapper, 
    LogoWrapper, 
    Logo,
    LogoSpace
} from './style';

const Navbar = () => {
    const [shadow, setShadow] = useState();

    useEffect(() => {
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > 50) {
                setShadow('0px 5px 5px 0px rgba(0,0,0,0.25)')
            } else {
                setShadow('none')
            }
        })
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
          };
        }, 
    []);

    return (
        <NavWrapper boxShadow={shadow}>
            <LogoWrapper to="/">
                <Logo/>
            </LogoWrapper>
            <LogoSpace />
            <NavLinks />
            <NavUser />
            <MenuMobile />
        </NavWrapper>
    )
}

export default Navbar;

