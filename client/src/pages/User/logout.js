import React from 'react';
import { Redirect } from 'react-router-dom';

import { ButtonSecondary } from '../../components/Buttons'; 

import { logout as action } from '../../services/auth'

const Logout = () => {
    const [navigate, setNavigate] = React.useState();

    const logout = () => {
        action();

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