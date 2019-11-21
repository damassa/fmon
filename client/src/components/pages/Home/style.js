import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  min-height: 100vh;
  top: 0px;
  flex-flow: column nowrap;
  align-items: center;
  z-index: 1;
`

export const LastGames = styled.div`
  display: flex;
  width: 100vw;
  height: 10vh;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: var(--color-1);
  color: #fff;
`

export const HomeBody = styled.div`
  display: flex;
  width: 100vw;
  margin: 10vh 0;
  flex-flow: row wrap;
  justify-content: space-around;
`

export const HomeNews = styled.div`
  display: flex;
  margin: 0 5vw;
  flex-grow: 2;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export const HomeNewsTop = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
`

export const HomeNewsTopCard = styled(Link)`
  display: flex;
  width: 200px;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  background-color: var(--color-1);

  &::after {
    content: "";
    position: absolute;
    margin-left: 200px;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-bottom-width: 50px;
    border-top-width: 0px;
    border-left: 25px solid var(--color-1);
  }

  & span {
    margin-left: 10px;
  }
`
