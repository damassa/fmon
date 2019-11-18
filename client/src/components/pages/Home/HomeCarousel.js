import React from 'react';
import Carousel from 're-carousel';
import styled from 'styled-components';

import carouselImg1 from '../../../assets/banner/1.jpg';
import carouselImg2 from '../../../assets/banner/2.jpg';
import Dots from './../../Carousel/indicator-dots'
import Buttons from './../../Carousel/buttons'

const CarouselWrapper = styled.div`
  width: 100vw;
  height: 90vh;
`

const CarouselItem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const CarouselTitle = styled.span`
  width: 90%;
  font-size: 32px;
  color: #fff;
  margin: 1vh 0;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0,0,0,.6);
`

const CarouselSubTitle = styled.span`
  width: 90%;
  font-size: 18px;
  color: #fff;
  margin: 1vh 0;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0,0,0,.6);
`

const CarouselButton = styled.button`
  width: 200px;
  height: 50px;
  margin: 1vh 0 10vh 0;
  font-weight: bold;
  color: #fff;
  background-color: var(--color-1);
  border: none;
  border-radius: 10px;
  outline: none;
`


export default class HomeCarousel extends React.Component {
    render() {
        return (
            <CarouselWrapper>
                <Carousel loop auto interval={5000} transitionTime widgets={[Dots, Buttons]}>
                    <CarouselItem image={carouselImg1}>
                    <CarouselTitle>Football Manager Online</CarouselTitle>
                    <CarouselSubTitle>Aqui você encontra tudo o que precisa saber para entrar no mundo do FM online</CarouselSubTitle>
                    <CarouselButton>Confira</CarouselButton>
                    </CarouselItem>
                    <CarouselItem image={carouselImg2}>
                    <CarouselTitle>Football Manager 2019</CarouselTitle>
                    <CarouselSubTitle>Saiba como adquirir sua cópia da versão 2019 do maior simulador de futebol do planeta.</CarouselSubTitle>
                    <CarouselButton>Comprar</CarouselButton>
                    </CarouselItem>
                </Carousel>
            </CarouselWrapper>
        )
    }
}
