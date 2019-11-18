import React from 'react';
import HomeCarousel from './HomeCarousel';

import { Wrapper } from './style';

export default class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <HomeCarousel />
        <div style={{height: "100vh"}} />
      </Wrapper>
    )
  };
}

