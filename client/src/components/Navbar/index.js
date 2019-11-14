import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
`

const FakeSpace = styled.div`
  position: relative;
  width: 100%;
  height: 75px;
  z-index: -1;
`

const Logo = styled(NavLink)`
  height: 75px;
  width: 100px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  text-decoration: none;
`

const LinksWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  
  @media only screen and (max-width: 600px) {
      display: none;
  }
`

const MenuLink = styled(NavLink)`
  position:relative;
  margin: 0 10px;
  font-size: 18px;
  border: 0;
  transition: color 0.25s;
  transition: all 0.5s;
  text-decoration: none;
`

export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <Nav>
          <Logo to="/">FMON</Logo>
          <LinksWrapper>
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/championships">Championships</MenuLink>
            <MenuLink to="/ultimate">Ultimate</MenuLink>
            <MenuLink to="/ladder">Ladder</MenuLink>
            <MenuLink to="/store">Store</MenuLink>
          </LinksWrapper>
        </Nav>
        <FakeSpace />
      </>
    )
  };
}
