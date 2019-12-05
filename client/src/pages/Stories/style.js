import styled from 'styled-components';
import { Link } from 'react-router-dom';

import purpleBg         from '../../assets/news/purple-bg.png';
import leftEffect       from '../../assets/news/left-effect.svg';
import rightEffect      from '../../assets/news/right-effect.svg';
import userIcon         from '../../assets/icons/user-color.svg';
import dateIcon         from '../../assets/icons/date.svg';
import eyeIcon          from '../../assets/icons/eye.svg';
import starIcon         from '../../assets/icons/star.svg';

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
    justify-content: space-between;
    
    width: 100%;
    margin: 5vh 0;
`

export const ListStories = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;

    width: 65%;
`

export const RightMenu = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    margin-bottom: 5vh;
    width: 25%;
    
    color: #fff;
`

export const BestStories = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    
    width: 100%;
    margin-bottom: 4vh;
`

export const LastStories = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    
    width: 100%;
    margin-bottom: 4vh;
`

export const StorieCard = styled(Link)`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    
    width: 45%;
    margin-bottom: 3vh;

    &.small {
        width: 30%;
        align-items: center;
    }

    &.small section {
        height: 125px;
    }

    &.small div {
        text-align: center;
    }
`

export const StorieCardImage = styled.section`
    width: 100%;
    height: 200px;

    background-image: url(${props => props.Image});
    background-color: ${props => props.Image ? 'transparent' : '#787878'};
    background-size: cover;
    background-position: top center;
`

export const StorieCardTitle = styled.div`
    font-size: 18px;
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

export const ListTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: var(--color-1);

    border-bottom: 1px solid var(--color-1);

    margin-bottom: 2vh;
    padding-bottom: 1vh;
`

export const StorieCardInfos = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;

    width: 100%;

    & div {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }

    & div span:first-child {
        margin-right: 10px;

        &:after {
            content: "|";
            margin-left: 10px;
        }
    }
`

export const StorieInfosSpan = styled.span`
    display: flex;
    align-items: center;

    height: 18px;
    padding-left: 20px;
    
    font-size: 14px;
    color: var(--color-1);

    background-size: contain;
    background-position: center left;
    background-repeat: no-repeat;
`

export const StorieInfosAuthor = styled(StorieInfosSpan)`
    background-image: url(${userIcon});
`

export const StorieInfosDate = styled(StorieInfosSpan)`
    background-image: url(${dateIcon});
`

export const StorieInfosViews = styled(StorieInfosSpan)`
    background-image: url(${eyeIcon});
`

export const StorieInfosRating = styled(StorieInfosSpan)`
    background-image: url(${starIcon});
`

export const StorieEndAlert = styled.div`
    color: var(--color-1);
    font-size: 18px;
    
    margin: 2vh 0;
`

export const StorieButtonWrapper = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
`

export const MenuCardLink = styled(Link)`
    font-size: 14px;
    color: var(--color-1);

    margin-bottom: 2vh;
`

export const MenuCardWrapper = styled(Link)`
    display: flex;
    flex-flow: column nowrap;

    margin: 1vh 0;

    & span:hover {
        color: var(--color-1);
    }
`

export const MenuCardText = styled.span`
    font-size: 16px;
    color: #222;
    transition: 0.4s;
`

export const MenuCardUnder = styled.div`
    display: flex;
    flex-flow: row nowrap;

    padding: 1vh 0;
`

export const MenuCardSubText = styled.span`
    font-size: 14px;
    color: #666;

    &:first-child {
        margin-right: 20px;
    } 

    &:first-child:after {
        content: "|";
        padding-left: 20px;
    }
`