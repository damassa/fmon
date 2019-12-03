import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import LogoImg                  from '../../assets/logo.png';
import UserIcon                 from '../../assets/icons/user.svg';
import NotificationIcon         from '../../assets/icons/notifications.svg';
import NotificationAtiveIcon    from '../../assets/icons/notifications-active.svg';
import MenuIcon                 from '../../assets/icons/menu.svg';
import ArrowDownIcon            from '../../assets/icons/arrow-down-color.svg';

export const NavWrapper = styled.div`
    width: 100vw;
    height: 75px;

    position: fixed;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    background-color: rgba(0,0,0,0.5);
    box-shadow: ${props => props.boxShadow};
    z-index: 2147483648;

    @media only screen and (max-width: 850px) {
        justify-content: space-between;
    }
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

    @media only screen and (max-width: 330px) {
        max-width: 80%;
        
        &::after {
            display: none;
        }
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

    @media only screen and (max-width: 850px) {
        display: none;
    }
`

export const MenuLinks = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-evenly;
    
    color: #fff;

    @media only screen and (max-width: 1200px) {
        width: 95%;
    }
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

    @media only screen and (max-width: 850px) {
        display: none;
    }
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

    @media only screen and (max-width: 1000px) {
        display: none;
    }
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

    box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.5);

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

export const MenuMobileIcon = styled.div`
    display: none;

    @media only screen and (max-width: 850px) {
        display: flex;
        position: absolute;

        right: 25px;
        width: 30px;
        height: 30px;
        max-width: 15%;

        background-image: url(${MenuIcon});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        filter: invert(100%);

        cursor: pointer;
    }

    @media only screen and (max-width: 330px) {
        right: 0;
    }
`

export const MenuMobile = styled.div`
    display: none;

    @media only screen and (max-width: 850px) {
        display: flex;
        position: absolute;
        align-items: center;
        flex-flow: column;

        top: 75px;
        right: 0;
        width: 100vw;
        height: calc(100vh - 75px);

        background-color: #fff;
        box-shadow: -3px 7px 5px 0px rgba(0,0,0,0.25);
    }
`

export const MobileLink = styled(NavLink)`
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 10px 0;

    font-size: 18px;
    color: var(--color-1);
    transition: 0.4s;

    & span {
        border-bottom: 1px solid transparent;
    }

    &.active span {
        border-color: var(--color-1);
    }

    &:hover span {
        border-color: var(--color-1);
    }
`

export const MobileDrop = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 10px 0;

    font-size: 18px;
    color: var(--color-1);

    cursor: pointer;

    & div:after {
        content: "";
        position: absolute;

        margin-left: 5px;
        margin-top: 3px;
        width: 15px;
        height: 15px;

        transform: ${props => props.Active ? "rotate(-90deg)" : "rotate(0)"}; 

        background-image: url(${ArrowDownIcon});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center; 
        transition: 0.4s;
    }
`

export const MenuDrop = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    flex-flow: column;

    background-color: var(--color-1);
`

export const MenuDropLink = styled(Link)`
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 10px 0;

    font-size: 18px;
    color: #fff;
    transition: 0.4s;
`