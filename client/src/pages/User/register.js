import React, { useState } from 'react';

import { ButtonPrimary }    from '../../components/Buttons';
import { InputIcon }        from '../../components/Input';
import UserIcon             from '../../assets/icons/user-color.svg'
import KeyIcon              from '../../assets/icons/key.svg'
import EmailIcon            from '../../assets/icons/email.svg'

import {
    LoginWrapper,
    LoginForm,
    LinkForm,
    ShowError,
    FormTitle
} from './style';

const Register = (props) => {
    const [Username, setUsername] = useState("");
    const [UserPassword, setUserPassword] = useState("");
    const [UserRepeatPassword, setUserRepeatPassword] = useState("");
    const [UserEmail, setUserEmail] = useState("");
    const [error, setError] = useState(null);
    const data = JSON.stringify({
        name: Username, 
        email: UserEmail,
        password: UserPassword,
        repeatPassword: UserRepeatPassword
    });

    const validateForm = (
        username: String,
        email: String,
        password: String,
        repeatPassword: String,
        setError: (error: String | null) => void
    ): Boolean => {
        if(!username || !email || !password || !repeatPassword) {
            setError("Preencha o nome e senha para continuar!")
            return false
        }
        
        if(password !== repeatPassword) {
            setError("As senhas não conferem!")
            return false
        }

        if(!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setError("Email inválido!")
            return false
        }

        if(username.length < 3) {
            setError("Nome muito curto, tem que no mínimo 3 dígitos!")
            return false
        }

        if(password.length < 6) {
            setError("Senha muito curta, tem que no mínimo 6 dígitos!")
            return false
        }

        setError(null)
        return true;
    }

    const handleSignIn = async e => {
        fetch("http://localhost:4000/api/user/signup", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: data,
        }).then(response => {
            response.json().then(values => {
                if(!values.error && !values.errors) {
                    setError("Conta criada com sucesso, para entrar faça login.");
                    setTimeout(() => {
                        props.history.push("/user/signin");
                    }, 3000);
                } else {
                    if(values.error.sqlMessage === "Duplicate entry '" + Username +"' for key 'name'") {
                        setError("Nome já existente, por favor escolha outro.");
                    } else {
                        if(values.error.sqlMessage === "Duplicate entry '" + UserEmail +"' for key 'email'") {
                            setError("Email já usado, por favor escolha outro.");
                        } else {
                            setError("Houve um problema com o seu registro, tente novamente.");
                        }
                    }
                    console.log(values);
                }
            });
        }).catch(err => {
            setError("Houve um problema com o login, verifique suas credenciais.");
        })
    }

    return (
        <LoginWrapper>
            <LoginForm onSubmit={
                e => {e.preventDefault();
                if(validateForm(Username, UserEmail, UserPassword, UserRepeatPassword, setError)) {
                    handleSignIn();
                }}
            }>
                <FormTitle>Registrar-se</FormTitle>
                <ShowError Situation={error}>
                    {error}
                </ShowError>
                <InputIcon 
                    type="text" 
                    icon={UserIcon}
                    placeholder="Nome..." 
                    onChange={e => setUsername(e.target.value)}
                />
                <InputIcon 
                    type="email" 
                    icon={EmailIcon}
                    placeholder="Email..." 
                    onChange={e => setUserEmail(e.target.value)}
                />
                <InputIcon 
                    type="password"
                    icon={KeyIcon}
                    placeholder="Senha..." 
                    onChange={e => setUserPassword(e.target.value)}
                />
                <InputIcon 
                    type="password"
                    icon={KeyIcon}
                    placeholder="Repetir Senha..." 
                    onChange={e => setUserRepeatPassword(e.target.value)}
                />
                <ButtonPrimary>Enviar</ButtonPrimary>
                <LinkForm to="/user/signin">Logar-se</LinkForm>
                <LinkForm to="/user/passRecover">Recuperar Senha</LinkForm>
            </LoginForm>
        </LoginWrapper>
    )
}

export default Register;
