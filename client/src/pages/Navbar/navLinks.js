import React, { useEffect, useRef, useState } from 'react';
import { TimelineLite } from 'gsap/all'

import { 
    LinksWrapper, 
    NavLinkStyled, 
    MenuLinks,
    NavLinkWrapper,
    NavDrop,
    DropLink,
    NavLinkIcon
} from './style';

import ArrowDownIcon from '../../assets/icons/arrow-down.svg';

const NavLinks = () => {
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
        <LinksWrapper>
            <MenuLinks>
                <NavLinkStyled to="/">Início</NavLinkStyled>
                <NavLinkWrapper
                    onMouseEnter={() => dropMenuAnimation.play()}
                    onMouseLeave={() => dropMenuAnimation.reverse()}
                >
                    <NavLinkStyled to="/championships">
                        Campeonatos 
                        <NavLinkIcon icon={ArrowDownIcon} />
                    </NavLinkStyled>
                    <NavDrop ref={div => droppedMenu = div}>
                        <DropLink to="/championships/slm">SLM</DropLink>
                        <DropLink to="/championships/lfm">LFM</DropLink>
                    </NavDrop>
                </NavLinkWrapper>
                <NavLinkStyled to="/ultimate">Carreiras</NavLinkStyled>
                <NavLinkStyled to="/news">Notícias</NavLinkStyled>
                <NavLinkStyled to="/store">Loja</NavLinkStyled>
            </MenuLinks>
        </LinksWrapper>
    )
}

export default NavLinks;