import React from 'react';
import { TimelineLite } from "gsap/all";

//import api from '../../services/api';

import {
    MenuUser as Wrapper, 
    Notification, 
    User, 
    UserIcon,
    UserTextWrapper,
    UserText,
    UserSubText,
    UserInfos,
    UserLogin,
    LoginText
  } from './style';
import { ButtonSecondary } from '../FormFields/button';

export default class MenuUser extends React.Component {
    constructor(props){
        super(props);
        
        this.menuUser = null;
    
        this.menuUserAnimation = new TimelineLite({ paused: true });
    }

    componentDidMount() {          
        this.menuUserAnimation
        .from(this.menuUser, 0.5, { autoAlpha: 0 })
    }

    render() {
        return (
            <Wrapper>
                <Notification/>
                <User 
                    onMouseOver={() => this.menuUserAnimation.play()}
                    onMouseLeave={() => this.menuUserAnimation.reverse()}
                >
                    <UserInfos>
                        <UserIcon />
                        <UserTextWrapper>
                            <UserText>Bem vindo,</UserText>
                            <UserSubText>Faça login ou Registre-se</UserSubText>
                        </UserTextWrapper>
                    </UserInfos>
                    <UserLogin ref={div => this.menuUser = div}>
                        <ButtonSecondary height="30px" width="80%">Entrar</ButtonSecondary>
                        <LoginText>Usuário novo? Cadastre-se</LoginText>
                        <LoginText to="/login/recoverPass">Perdeu sua senha? Recupere</LoginText>
                    </UserLogin>
                </User>
            </Wrapper>
        )
    }
}
