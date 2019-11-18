import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { TimelineLite } from "gsap/all";

import LogoImg from '../../assets/logo.png';
import UserImg from '../../assets/icons/user.svg';
import NotificationImg from '../../assets/icons/notifications.svg';
import NotificationActiveImg from '../../assets/icons/notifications-active.svg';
import MenuImg from '../../assets/icons/menu.svg';

const Nav = styled.div`
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

const FakeSpace = styled.div`
  position: relative;
  width: 100%;
  height: 75px;
  z-index: -1;
`

const Logo = styled(NavLink)`
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
    border-left: 25px solid #321450;
  }

  @media only screen and (max-width: 300px) {
    &::after {
      border: none;
    }
  }
`

const LogoFake = styled.div`
  width: 250px;
  height: 75px;
  max-width: 90%;
`

const LinksWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  
  @media only screen and (max-width: 850px) {
    display: none;
  }
`

const MenuLink = styled(NavLink)`
  position:relative;
  margin: 0 10px;
  font-size: 18px;
  font-weight: bold;
  border: 0;
  transition: color 0.25s;
  transition: all 0.5s;
`

const MenuUser = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  @media only screen and (max-width: 850px) {
    display: none;
  }
`

const Notification = styled.div`
  width: 25px;
  height: 75px;
  margin: 0 2vw;
  background-image: url(${props => props.active ? NotificationActiveImg : NotificationImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  filter: invert(100%);
`

const User = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const UserIcon = styled.div`
  width: 25px;
  height: 75px;
  margin: 0 1vw;
  background-image: url(${UserImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  filter: invert(100%);
`

const UserTextWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

const UserText = styled.span`
  font-size: 14px;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

const UserSubText = styled.span`
  font-size: 12px;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

const MenuMobileIcon = styled.div`
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

const MenuMobile = styled.div`
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
  z-index: 1;

  @media only screen and (max-width: 850px) {
    display: flex;
  }
`

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    
    this.menu = null; 

    this.menuAnimation = new TimelineLite({ paused: true });
  }

  state = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    open: false
  }

  listenScrollEvent = e => {
    if (window.scrollY > 10) {
      this.setState({backgroundColor: '#fff'})
      this.setState({boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.25)'})
    } else {
      this.setState({backgroundColor: 'transparent'})
      this.setState({boxShadow: 'none'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)

    this.menuAnimation
      .from(this.menu, 1, { left: 800 }, 0);
  }

  handlerClick() {
    if(!this.state.open){
      this.menuAnimation.play();
      this.setState({open: true});
    } else {
      this.menuAnimation.reverse();
      this.setState({open: false});
    }
  }

  render() {
    return (
      <>
        <Nav 
          style={{
            backgroundColor: this.state.backgroundColor,
            boxShadow: this.state.boxShadow
        }}>
          <Logo to="/" />
          <LogoFake />
          <LinksWrapper>
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/championships">Championships</MenuLink>
            <MenuLink to="/ultimate">Ultimate</MenuLink>
            <MenuLink to="/ladder">Ladder</MenuLink>
            <MenuLink to="/store">Store</MenuLink>
          </LinksWrapper>
          <MenuUser>
            <Notification/>
            <User>
              <UserIcon />
              <UserTextWrapper>
                <UserText>Bem vindo,</UserText>
                <UserSubText>Faça login ou Registre-se</UserSubText>
              </UserTextWrapper>
            </User>
          </MenuUser>
          <MenuMobileIcon onClick={() => this.handlerClick()}/>
        </Nav>
        <MenuMobile ref={div => this.menu = div}>
          <span>teste</span>
          <span>teste</span>
          <span>teste</span>
          <span>teste</span>
        </MenuMobile>
        <FakeSpace />
      </>
    )
  };
}
