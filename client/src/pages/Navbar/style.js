import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import LogoImg                  from '../../assets/logo.png';
import UserIcon                 from '../../assets/icons/user.svg';
import NotificationIcon         from '../../assets/icons/notifications.svg';
import NotificationAtiveIcon    from '../../assets/icons/notifications-active.svg';

export const NavWrapper = styled.div`
    width: 100vw;
    height: 75px;

    position: fixed;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    background-color: ${props => props.background};
    box-shadow: ${props => props.boxShadow};
    z-index: 2;
`

export const LogoWrapper = styled(Link)`
    width: 250px;
    height: 100%;
    top: 0;
    left: 0;
    
    position: absolute;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;

    background-color: var(--color-1);
    font-size: 24px;
    font-weight: bold;

    &::after {
        content: "";
        position: absolute;
        left: 250px;
        width: 0;
        height: 0;
        border: 0 solid transparent;
        border-bottom-width: 75px;
        border-top-width: 0px;
        border-left: 25px solid var(--color-1);
    }
`

export const Logo = styled.div`
    width: 100%;
    height: 100%;

    background-image: url(${LogoImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
`

export const LogoSpace = styled.div`
    width: 275px;
    height: 100%;
`

export const LinksWrapper = styled.div`
    display: flex;
    flex-grow: 2;
    justify-content: center;
`

export const MenuLinks = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-evenly;
    
    color: #fff;
`

export const NavLinkWrapper = styled.div`
    height: 75px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
`

export const NavLinkStyled = styled(NavLink)`
    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserWrapper = styled.div`
    height: 100%;
    
    display: flex;
    flex-grow: 1;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row nowrap;
`

export const NotificationsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Notification = styled.div`
    width: 25px;
    height: 25px;

    background-image: url(${props => props.active ? NotificationAtiveIcon : NotificationIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    filter: invert(100%);

    cursor: pointer;
`

export const LoginWrapper = styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;

    color: #fff;
`

export const LoginIcon = styled.div`
    width: 25px;
    height: 75px;
    margin-right: 5px;

    background-image: url(${UserIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    filter: invert(100%);

    cursor: pointer;
`

export const LoginInfos = styled.div`
    height: 75px;
    
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    cursor: pointer;
`

export const LoginWelcome = styled.div`
    font-size: 14px;
`

export const LoginName = styled.div`
    font-size: 12px;
`

export const NavDrop = styled.div`
    position: absolute;
    top: 75px;
    min-width: 150px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;

    background-color: var(--color-1);

    &::after {
        content: "";
        position: absolute;
        top: -15px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 15px 15px 15px;
        border-color: transparent transparent var(--color-1) transparent;
    }
`

export const DropLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 2vh 0;
    margin: 0 1vw;

    font-size: 14px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }
`

export const NavLinkIcon = styled.div`
    width: 15px;
    height: 15px;
    margin-left: 5px;

    background-image: url(${props => props.icon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`

export const LoginForm = styled.form`
    display: flex;
    flex-flow: column nowrap;
    
    width: 80%;
`

export const LinkForm = styled(Link)`
    font-size: 14px;
    color: var(--color-1);
    text-align: center;
    
    transition: 0.5s;
    margin: 1vh 0;

    &:hover {
        text-decoration: underline;
    }
`

export const ShowError = styled.div`
    width: calc(100% - 20px);
    margin: 1vh 0;
    padding: 10px;
    display: ${props => props.Situation ? "flex" : "none"};

    background-color: var(--color-1);
    color: #fff;
    border-radius: 10px;
`