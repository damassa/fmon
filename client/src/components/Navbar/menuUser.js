import React from 'react';

import {
    MenuUser as Wrapper, 
    Notification, 
    User, 
    UserIcon,
    UserTextWrapper,
    UserText,
    UserSubText
  } from './style';

export default class MenuUser extends React.Component {
    render() {
        return (
            <Wrapper>
                <Notification/>
                <User>
                <UserIcon />
                <UserTextWrapper>
                    <UserText>Bem vindo,</UserText>
                    <UserSubText>Faça login ou Registre-se</UserSubText>
                </UserTextWrapper>
                </User>
            </Wrapper>
        )
    }
}