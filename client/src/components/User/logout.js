import React from 'react';
import { Redirect } from 'react-router-dom';

import { ButtonSecondary } from '../FormFields/button'; 

import { logout as action } from '../../services/auth'
import api from '../../services/api'

export default class Logout extends React.Component {
    state = {
        navigate: false
    };

    logout = () => {
        api.get('/user/signout');

        action();

        this.setState({ navigate: true });
    }

    render() {
        const { navigate } = this.state;

        if(navigate) {
            return <Redirect to="/" push={true} />
        }

        return (
            <ButtonSecondary 
                onClick={() => this.logout()}
                height="30px" 
                width="100px" 
                fontSize="12px" 
                margin="2vh 0"
            >
                Sair
            </ButtonSecondary>
        )
    }
}