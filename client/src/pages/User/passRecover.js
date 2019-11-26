import React, { useState } from 'react';

import { ButtonPrimary }    from '../../components/Buttons';
import { InputIcon }        from '../../components/Input';
import UserIcon             from '../../assets/icons/user-color.svg'
import EmailIcon            from '../../assets/icons/email.svg'
import {
    LoginWrapper,
    LoginForm,
    ShowError,
    FormTitle
} from './style';

const Login = (props) => {
    const [Username, setUsername] = useState("");
    const [UserEmail, setUserEmail] = useState("");
    const [error, setError] = useState(null);
    return (
        <LoginWrapper>
            <LoginForm onSubmit={
                e => {e.preventDefault();
                    setError("Modulo não pronto, espere!")
                }} >
                <FormTitle>Recuperar Senha</FormTitle>
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
                {Username} {UserEmail}
                <ButtonPrimary>Enviar</ButtonPrimary>
            </LoginForm>
        </LoginWrapper>
    )
}

export default Login;