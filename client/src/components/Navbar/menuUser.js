import React from 'react';
import { TimelineLite } from "gsap/all";
import { withRouter } from "react-router-dom";

import UserImage from '../../assets/icons/user-color.svg';
import KeyImage from '../../assets/icons/key.svg';

import api from '../../services/api';
import { login, isAuthenticated } from "../../services/auth";

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
    SignIn,
    MenuLinkHover
  } from './style';
import { ButtonSecondary, ButtonPrimary } from '../FormFields/button';
import { InputIcon } from '../FormFields/input';
import { Alert } from '../FormFields/alert';
import { 
    ModalWrapper, 
    Modal as ModalPage, 
    CloseModal, 
    CloseModalIcon, 
    ModalTitle, 
    ModalContent,
    ModalSuccess
} from '../Modal/style';
import Logout from '../User/logout';

class MenuUser extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            password: "",
            error: "",
            username: localStorage.name,
        };
        
        this.menuUser = null;
        this.menuUserAnimation = new TimelineLite({ paused: true });

        this.modalWrapper = null;
        this.modal = null;
    
        this.modalAnimation = new TimelineLite({ paused: true });
    }

    async componentDidMount() {
        document.addEventListener("keydown", this.keyDownHandler.bind(this));

        if(isAuthenticated()) {
            let response = await api.get('/user/' + localStorage.id)
                    
            response = await response.data.name
            
            this.setState({username: response})
        }
        this.menuUserAnimation
            .to(this.menuUser, 0, {css: {display: 'flex'}})
            .from(this.menuUser, 0.5, { autoAlpha: 0 })

        this.modalAnimation
            .to(this.modalWrapper, 0, {css: {display: 'flex'}})
            .from(this.modalWrapper, 0.5, { autoAlpha: 0 })
            .from(this.modal, 0.5, { bottom: 500, autoAlpha: 0})
    }

    keyDownHandler = e => {
		if ( e.keyCode === 27 ) this.modalAnimation.reverse();
    }

    handleSignIn = async e => {
        e.preventDefault();
        const { name, password } = this.state;
        if (!name || !password) {
          this.setState({ error: "Preencha o nome e senha para continuar!" });
        } else {
          try {
            const response = await api.post("/user/signin", { name, password }); 
            
            login(response.data.token, response.data.user.id, response.data.user.name);     
        
            this.setState({
                username: response.data.user.name
            })
          } catch (err) {
            this.setState({
              error:
                "Houve um problema com o login, verifique suas credenciais."
            });
          }
        }
    };

    UserMenuDown() {
        if(isAuthenticated()) {
            return(
                <UserLogin ref={div => this.menuUser = div}>
                    <MenuLinkHover to={"/user/" + localStorage.id}>Meu Perfil</MenuLinkHover>
                    <MenuLinkHover to={"/user/config/" + localStorage.id}>Configurações</MenuLinkHover>
                    <Logout />
                    
                </UserLogin>
            )
        } else {
            return (
                <UserLogin ref={div => this.menuUser = div}>
                    <ButtonSecondary 
                        onClick={() => this.modalAnimation.play()}
                        height="30px" 
                        width="80%" 
                        fontSize="12px" 
                        margin="1vh 1vw"
                    >
                        Entrar
                    </ButtonSecondary>
                    <LoginText to="/user/signup">Usuário novo? Cadastre-se</LoginText>
                    <LoginText to="/user/recoverPassword">Perdeu sua senha? Recupere</LoginText>
                </UserLogin>
            )
        }
    }

    showError() {
        return (
            <Alert infos={this.state.error}>
                {this.state.error}
            </Alert>
        )
    }

    modalInside() {
        if(isAuthenticated()) {
            setTimeout(() => {
                this.modalAnimation.reverse();
            }, 2000);
            return (
                <ModalContent>
                    <ModalSuccess>
                        Bem vindo, {this.state.username}
                    </ModalSuccess>
                </ModalContent>
            )
        } else {
            return (
                <ModalContent>
                    {this.showError()}
                    <SignIn onSubmit={this.handleSignIn}>
                        <InputIcon 
                            type="text"
                            placeholder="Nome..."
                            icon={UserImage}
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                        <InputIcon 
                            type="password"
                            placeholder="Senha..."
                            icon={KeyImage}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <ButtonPrimary width="50%" >Entrar</ButtonPrimary>
                        <LoginText to="/user/signup">Usuário novo? Cadastre-se</LoginText>
                        <LoginText to="/user/recoverPassword">Perdeu sua senha? Recupere</LoginText>
                    </SignIn>
                </ModalContent>
            )
        }
    }

    welcomeName() {
        if(isAuthenticated()) {
            return (
                <span>
                    {this.state.username}
                </span>
            );
        } else {
            return (
                <span>
                    Faça login ou Registre-se
                </span>
            )
        }
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
                                <UserSubText>{this.welcomeName()}</UserSubText>
                            </UserTextWrapper>
                        </UserInfos>
                        {this.UserMenuDown()}
                    </User>
                </Wrapper>
                <ModalWrapper 
                    ref={div => this.modalWrapper = div}
                    onClick={() => this.modalAnimation.reverse()}    
                >
                    <ModalPage 
                        ref={div => this.modal = div}
                        onClick={event => event.stopPropagation()}
                    >
                        <CloseModal>
                            <CloseModalIcon onClick={() => this.modalAnimation.reverse()} />
                        </CloseModal>
                        <ModalTitle>Login</ModalTitle>
                        {this.modalInside()}
                    </ModalPage>
                </ModalWrapper> 
            </>
        )
    }
}

export default withRouter(MenuUser);
