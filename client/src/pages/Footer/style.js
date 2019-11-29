import styled from 'styled-components';

import purpleBg from '../../assets/news/purple-bg.png';

export const FooterWrapper = styled.div`
    width: 100vw;
    height: 50vh;
    margin-left: -5vw;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    background-color: var(--color-1);
    background-image: url(${purpleBg});
    background-size: contain;
    background-position: center;
`

export const FooterTitle = styled.div`
    position: relative;

    font-size: 32px;
    font-weight: bold;
    color: #fff;

    margin: 4vh 0;
`

export const FooterSocials = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`

export const Social = styled.a`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    margin: 0 2vw 0 2.5vw;

    &:hover div {
        background-size: 100%;
    }

    &:after {
        content: "";
        position: absolute;
        height: 100px;
        margin-left: 80px;
        
        transform: skew(-18deg);
        border-right: 1px solid #fffd5e;
    }

    &:last-child:after {
        border: none;
    }
`

export const Icon = styled.div`
    height: 40px;
    width: 40px;
    margin: 2vh 0;

    background-image: url(${props => props.Image});
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;

    transition: 0.4s;
`

export const SocialText = styled.div`
    font-size: 18px;
    color: #fff;
`