import React from 'react';
import { TimelineLite } from "gsap/all";
import { withRouter } from "react-router-dom";

import UserImage from '../../assets/icons/user-color.svg';
import KeyImage from '../../assets/icons/key.svg';

import api from '../../services/api';
import { login } from "../../services/auth";

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
import { Alert } from '../FormFields/alert';
import { 
    ModalWrapper, 
    Modal as ModalPage, 
    CloseModal, 
    CloseModalIcon, 
    ModalTitle, 
    ModalContent 
} from '../Modal/style';

class MenuUser extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            password: "",
            error: ""
        };
        
        this.menuUser = null;
        this.menuUserAnimation = new TimelineLite({ paused: true });

        this.modalWrapper = null;
        this.modal = null;
    
        this.modalAnimation = new TimelineLite({ paused: true });
    }

    componentDidMount() {
        document.addEventListener("keydown", this.keyDownHandler.bind(this));

        this.menuUserAnimation
            .from(this.menuUser, 0.5, { autoAlpha: 0 })

        this.modalAnimation
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
            
            login(response.data.token, response.data.user.id);     
            
            window.location.reload();
          } catch (err) {
            this.setState({
              error:
                "Houve um problema com o login, verifique suas credenciais."
            });
          }
        }
    };

    render() {        
        const showError = (
            <Alert infos={this.state.error}>
                {this.state.error}
            </Alert>
        )
        
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
                                <UserSubText>{this.props.username}</UserSubText>
                            </UserTextWrapper>
                        </UserInfos>
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
                        <ModalContent>
                            {showError}
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
                    </ModalPage>
                </ModalWrapper> 
            </>
        )
    }
}

export default withRouter(MenuUser);
