import React from 'react';
import { Redirect } from 'react-router-dom';

import { ButtonSecondary } from '../../components/Buttons'; 

import { logout as action, getToken } from '../../services/auth'

const Logout = () => {
    const [navigate, setNavigate] = React.useState();

    const logout = () => {
        action();

        fetch("http://localhost:4000/api/user/signout", {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorizathion': 'Bearer ' + getToken()
            },
        })

        setNavigate(true);
    }

    if(navigate) {
        return <Redirect to="/" push={true} />
    }

    return (
        <ButtonSecondary 
            onClick={() => logout()}
            Width="150px"
            Height="40px"
            Margin="2vh 1vw"
            FontSize="12px"
        >
            Sair
        </ButtonSecondary>
    )
}

export default Logout;