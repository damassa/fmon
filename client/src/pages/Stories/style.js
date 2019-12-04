import styled from 'styled-components';

import purpleBg         from '../../assets/news/purple-bg.png';
import leftEffect       from '../../assets/news/left-effect.svg';
import rightEffect      from '../../assets/news/right-effect.svg';

export const StoriesWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-flow: column nowrap;
`

export const StoriesHeader = styled.div`
    width: 80vw;
    height: 25vh;
    padding: 100px 10vw 0 10vw;
    margin-left: -5vw;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    background-image: url(${purpleBg});
    background-size: contain;
    background-position: center;

    &:before {
        content: "";
        position: absolute;

        width: 10vw;
        height: calc(100px + 25vh);
        top: 0;
        left: 0;

        background-image: url(${leftEffect});
        background-size: 450%;
        background-position-x: right;
        background-repeat: no-repeat;
    }

    &:after {
        content: "";
        position: absolute;

        width: 10vw;
        height: calc(40vh + 100px);
        top: 0;
        right: 0;
        
        background-image: url(${rightEffect});
        background-size: 225%;
        background-position: left bottom;
        background-repeat: no-repeat;
    }
`

export const StoriesHeaderText = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`

export const StoriesHeaderTitle = styled.div`
    font-size: 32px;
    font-weight: bold;
    color: #fff;
`

export const StoriesHeaderSubTitle = styled.div`
    font-size: 16px;
    color: #fff;
`

export const StoriesBody = styled.div`
    display: flex;
    flex-flow: row;
    
    width: 100%;
    margin: 5vh 0;
`

export const ListStories = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    flex-grow: 3;

    margin-right: 5vw;
`

export const RightMenu = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    flex-grow: 2;

    margin-bottom: 5vh;
    
    color: #fff;
`

export const BestStories = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    
    width: 100%;
`

export const StorieCard = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    
    width: 40%;

    &.small {
        width: 30%;
    }

    &.small section {
        height: 125px;
    }
`

export const StorieCardImage = styled.section`
    width: 100%;
    height: 200px;

    background-image: url(${props => props.Image});
    background-size: cover;
    background-position: center;
`

export const StorieCardTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: var(--color-1);

    margin: 1vh 0;
`

export const MenuCard = styled.div`
    width: 100%;

    display: flex;
    flex-flow: column nowrap;
`

export const MenuCardTitle = styled.div`
    padding-bottom: 2vh; 
    margin-bottom: 2vh; 

    font-size: 22px;
    font-weight: bold;
    color: var(--color-1);

    border-bottom: 1px solid var(--color-1);
`

export const SearchResult = styled.div`
    display: flex;
    flex-flow: column nowrap;

    margin: 2vh 0;
    color: #000;
`