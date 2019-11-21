import React from 'react';

import HomeCarousel   from './HomeCarousel';
import HomeLastGames  from './HomeLastGames';
import HomeNews       from './HomeNews';

import { Wrapper, HomeBody } from './style';

export default class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <HomeCarousel />
        <HomeLastGames />
        <HomeBody>
          <HomeNews />
          <div style={{flexGrow: "2", backgroundColor: "lightblue", margin: "0 5vw"}}>A ser feito</div>
        </HomeBody>
        <div style={{height: "100vh"}} />
      </Wrapper>
    )
  };
}

