import React, { useState } from 'react';

import api from '../../services/api';

import { login }            from '../../services/auth';
import { ButtonPrimary }    from '../../components/Buttons';
import { InputIcon }        from '../../components/Input';
import UserIcon             from '../../assets/icons/user-color.svg'
import KeyIcon              from '../../assets/icons/key.svg'
import {
    LoginWrapper,
    LoginForm,
    LinkForm,
    ShowError,
    FormTitle
} from './style';

const Login = (props) => {
    const [Username, setUsername] = useState("");
    const [UserPassword, setUserPassword] = useState("");
    const [error, setError] = useState(null);
    const data = JSON.stringify({name: Username, password: UserPassword});

    const validateForm = (
        username: String,
        password: String,
        setError: (error: String | null) => void
    ): Boolean => {
        if(!username || !password) {
            setError("Preencha o nome e senha para continuar!")
            return false
        }

        setError(null)
        return true;
    }

    const handleSignIn = async e => {
        fetch(api + "/user/signin", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: data,
        }).then(response => {
            response.json().then(values => {
                if(values.token) {
                    login(values.token, values.user.id, values.user.name);
                    setError(null);

                    props.history.push("/");
                } else {
                    setError("Houve um problema com o login, verifique suas credenciais.");
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
                if(validateForm(Username, UserPassword, setError)) {
                    handleSignIn();
                }}
            }>
                <FormTitle>Login</FormTitle>
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
                    type="password"
                    icon={KeyIcon}
                    placeholder="Senha..." 
                    onChange={e => setUserPassword(e.target.value)}
                />
                <ButtonPrimary>Enviar</ButtonPrimary>
                <LinkForm to="/user/register">Registre-se</LinkForm>
                <LinkForm to="/user/passRecover">Recuperar Senha</LinkForm>
            </LoginForm>
        </LoginWrapper>
    )
}

export default Login;