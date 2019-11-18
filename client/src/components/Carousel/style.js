import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  width: 100vw;
  height: 90vh;
`

export const CarouselItem = styled.div`
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

export const CarouselTitle = styled.span`
  width: 90%;
  font-size: 32px;
  color: #fff;
  margin: 1vh 0;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0,0,0,.6);
`

export const CarouselSubTitle = styled.span`
  width: 90%;
  font-size: 18px;
  color: #fff;
  margin: 1vh 0;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0,0,0,.6);
`

export const CarouselButton = styled.button`
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