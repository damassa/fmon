import React from 'react';
import { TimelineLite } from "gsap/all";

import ArrowDown from '../../assets/icons/arrow-down.svg';

import {
    LinksWrapper, 
    MenuLink,
    MenuLinkExpansive,
    MenuLinkHover,
    MenuLinkWrapper,
    MenuLinkIcon
} from './style';

export default class MenuLinks extends React.Component {
    constructor(props){
        super(props);
        
        this.menuExpansive = null;
    
        this.menuExpansiveAnimation = new TimelineLite({ paused: true });
    }

    componentDidMount() {          
        this.menuExpansiveAnimation
        .from(this.menuExpansive, 0.5, { autoAlpha: 0 })
    }

    render() {
        return (
            <LinksWrapper>
                <MenuLink to="/">Ínicio</MenuLink>
                <MenuLinkWrapper
                    onMouseOver={() => this.menuExpansiveAnimation.play()}
                    onMouseLeave={() => this.menuExpansiveAnimation.reverse()}
                >
                    <MenuLink to="/championships">
                        Campeonatos
                        <MenuLinkIcon icon={ArrowDown} />
                    </MenuLink>
                    <MenuLinkExpansive ref={div => this.menuExpansive = div}> 
                        <MenuLinkHover to="/championships/bhm">BHM</MenuLinkHover>
                        <MenuLinkHover to="/championships/cbfm">CBFM</MenuLinkHover>
                        <MenuLinkHover to="/championships/fmb">FMB</MenuLinkHover>
                        <MenuLinkHover to="/championships/ldn">LDN</MenuLinkHover>
                        <MenuLinkHover to="/championships/lfm">LFM</MenuLinkHover>
                        <MenuLinkHover to="/championships/lpfm">LPFM</MenuLinkHover>
                        <MenuLinkHover to="/championships/psl">PSL</MenuLinkHover>
                        <MenuLinkHover to="/championships/slm">SLM</MenuLinkHover>
                    </MenuLinkExpansive>
                </MenuLinkWrapper>
                <MenuLink to="/ultimate">Ultimate</MenuLink>
                <MenuLink to="/ladder">Notícias</MenuLink>
                <MenuLink to="/store">Loja</MenuLink>
            </LinksWrapper>
        )
    }
}