import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

import LogoImg from '../../assets/logo.png';
import UserImg from '../../assets/icons/user.svg';
import NotificationImg from '../../assets/icons/notifications.svg';
import NotificationActiveImg from '../../assets/icons/notifications-active.svg';
import MenuImg from '../../assets/icons/menu.svg';

export const Nav = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 75px;
  top: 0;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  z-index: 2;
  transition: 0.75s;
  color: #fff;
`

export const FakeSpace = styled.div`
  position: relative;
  width: 100%;
  height: 75px;
  z-index: -1;
`

export const Logo = styled(NavLink)`
  position: fixed;
  top: 0;
  left: 0;
  height: 75px;
  width: 225px;
  max-width: 80%;
  background-image: url(${LogoImg});
  background-color: #321450;
  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;  

  &::after {
    content: "";
    position: fixed;
    left: 225px;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-bottom-width: 75px;
    border-top-width: 0px;
    border-left: 25px solid var(--color-1);
  }

  @media only screen and (max-width: 300px) {
    &::after {
      border: none;
    }
  }
`

export const LogoFake = styled.div`
  width: 250px;
  height: 75px;
  max-width: 90%;
`

export const LinksWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  
  @media only screen and (max-width: 850px) {
    display: none;
  }
`

export const MenuLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 10px;
  font-size: 18px;
  font-weight: bold;
  border: 0;
  transition: color 0.25s;
  transition: all 0.5s;
`

export const MenuLinkIcon = styled.div`
  width: 10px;
  height: 10px;
  margin-left: 5px;
  background-image: url(${props => props.icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

export const MenuUser = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  @media only screen and (max-width: 850px) {
    display: none;
  }
`

export const Notification = styled.div`
  width: 25px;
  height: 75px;
  margin: 0 2vw;
  background-image: url(${props => props.active ? NotificationActiveImg : NotificationImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  filter: invert(100%);
`

export const User = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  cursor: pointer;
`

export const UserIcon = styled.div`
  width: 25px;
  height: 75px;
  margin: 0 1vw;
  background-image: url(${UserImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  filter: invert(100%);
`

export const UserTextWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

export const UserText = styled.span`
  font-size: 14px;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

export const UserSubText = styled.span`
  font-size: 12px;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

export const MenuMobileIcon = styled.div`
  position: fixed;
  display: none;
  height: 75px;
  width: 25px;
  max-width: 10%;
  right: 15px;
  background-image: url(${MenuImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  filter: invert(100%);

  @media only screen and (max-width: 850px) {
    display: flex;
  }

  @media only screen and (max-width: 300px) {
    right: 5%;
  }
`

export const MenuMobile = styled.div`
  position: fixed;
  display: none;
  flex-flow: column nowrap;
  align-items: center;
  top: 75px;
  right: 0;
  width: 100vw;
  height: calc(100vh - 75px);
  background-color: #fff;
  box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.25);
  z-index: 10;

  @media only screen and (max-width: 850px) {
    display: flex;
  }
`

export const MenuLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  height: 75px;
`

export const MenuLinkExpansive = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 150px;
  margin-top: 162px;
  background-color: var(--color-1);
  box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.25);

  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    top: -15px;
    border-style: solid;
    border-width: 0 15px 15px 15px;
    border-color: transparent transparent var(--color-1) transparent;
  }
`

export const MenuLinkHover = styled(MenuLink)`
  display: flex;
  justify-content: center;
  font-size: 16px;
  padding: 1vh 0;
  width: 100%;
  cursor: pointer;
  
  &:hover {
    background-color: #00000055;
  }
`

export const UserInfos = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

export const UserLogin = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 200px;
  margin-top: 75px;
  padding: 1vh 0;
  background-color: var(--color-1);
  box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.25);
  cursor: default;

  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    top: -15px;
    border-style: solid;
    border-width: 0 15px 15px 15px;
    border-color: transparent transparent var(--color-1) transparent;
  }
`

export const LoginText = styled(Link)`
  font-size: 12px;
  margin: 1vh 0;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`