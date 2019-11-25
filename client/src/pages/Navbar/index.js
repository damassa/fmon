import React, { useEffect, useState } from 'react';

import NavLinks from './navLinks';
import NavUser  from './navUser';

import { 
    NavWrapper, 
    LogoWrapper, 
    Logo,
    LogoSpace,
} from './style';

const Navbar = () => {
    const [shadow, setShadow] = useState(0);
    const [bgColor, setBgColor] = useState(0);

    useEffect(() => {
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > 50) {
                setShadow('0px 5px 5px 0px rgba(0,0,0,0.25)')
                setBgColor('rgba(0,0,0,0.5)')
            } else {
                setShadow('none')
                setBgColor('transparent')
            }
        })
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
          };
        }, 
    []);
    return (
        <NavWrapper boxShadow={shadow} background={bgColor}>
            <LogoWrapper to="/">
                <Logo/>
            </LogoWrapper>
            <LogoSpace />
            <NavLinks />
            <NavUser />
        </NavWrapper>
    )
}

export default Navbar;
