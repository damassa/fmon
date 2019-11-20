import React from 'react';
import { TimelineLite } from "gsap/all";

import UserImage from '../../assets/icons/user.svg';
import KeyImage from '../../assets/icons/key.svg';

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
    LoginText,
    SignIn
  } from './style';
import { ButtonSecondary, ButtonPrimary } from '../FormFields/button';
import { InputIcon } from '../FormFields/input';
import Modal from '../Modal';

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
            <>
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
                            <ButtonSecondary height="30px" width="80%" fontSize="12px" margin="1vh 1vw">
                                Entrar
                            </ButtonSecondary>
                            <LoginText to="/user/signup">Usuário novo? Cadastre-se</LoginText>
                            <LoginText to="/user/recoverPassword">Perdeu sua senha? Recupere</LoginText>
                        </UserLogin>
                    </User>
                </Wrapper>
                <Modal 
                    title="Login" 
                    content={
                        <SignIn>
                            <InputIcon 
                                type="text"
                                placeholder="Nome..."
                                icon={UserImage}
                            />
                            <InputIcon 
                                type="password"
                                placeholder="Senha..."
                                icon={KeyImage}
                            />
                            <ButtonPrimary width="50%">Entrar</ButtonPrimary>
                        </SignIn>
                    }
                />
            </>
        )
    }
}
