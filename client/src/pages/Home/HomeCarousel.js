import React from 'react';
import Carousel from 're-carousel';

import { 
    CarouselWrapper, 
    CarouselItem, 
    CarouselTitle, 
    CarouselSubTitle, 
    CarouselButton
} from '../../components/Carousel/style';

import carouselImg1 from '../../assets/banner/1.jpg';
import carouselImg2 from '../../assets/banner/2.jpg';
import Dots         from '../../components/Carousel/indicator-dots';
import Buttons      from '../../components/Carousel/buttons';

const HomeCarousel = () => {
    return (
        <CarouselWrapper>
            <Carousel loop auto interval={8000} transitionTime widgets={[Dots, Buttons]}>
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

export default HomeCarousel;
