import React from 'react';
import styled from 'styled-components';
import HomeCarousel from './HomeCarousel';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  min-height: 100vh;
  top: -1px;
  flex-flow: column nowrap;
  align-items: center;
  z-index: 1;
`

export default class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <HomeCarousel />
      </Wrapper>
    )
  };
}

