import styled from 'styled-components';
import { Link } from 'react-router-dom';

import userIcon         from '../../assets/icons/user-color.svg';
import dateIcon         from '../../assets/icons/date.svg';
import eyeIcon          from '../../assets/icons/eye.svg';
import likeIcon         from '../../assets/icons/heart.svg';
//import likeFilledIcon   from '../../assets/icons/heart-filled.svg';
import purpleBg         from '../../assets/news/purple-bg.png';
import leftEffect       from '../../assets/news/left-effect.svg';
import rightEffect      from '../../assets/news/right-effect.svg';

export const NewsCard = styled.div`
    width: 100%;
    padding: 4vh 0;
    
    display: flex;
    flex-flow: column nowrap;

    border-bottom: 1px solid var(--color-1);

    &:last-child {
        border: none;
    }

    &:first-child {
        padding-top: 0;
    }
`

export const NewsImage = styled.div`
    width: 100%;
    height: 300px;

    background-image: url(${props => props.Image});
    background-size: cover;
    background-position: center top;
`

export const NewsTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: var(--color-1);

    margin: 2vh 0;
`

export const NewsInfos = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    & div {
        display: flex;
        flex-flow: row wrap;
    }
    
    & div div:first-child {
        margin-right: 10px;
    }
    
    & div div:first-child:after {
        content: "|";
        margin-left: 10px;
    }
`

export const NewsAuthor = styled.div`
    display: flex;

    padding-left: 25px;

    background-image: url(${userIcon});
    background-size: 18px;
    background-position: left center;
    background-repeat: no-repeat;
`

export const NewsDate = styled.div`
    display: flex;

    padding-left: 25px;

    background-image: url(${dateIcon});
    background-size: 18px;
    background-position: left center;
    background-repeat: no-repeat;
`

export const NewsLikes = styled.div`
    display: flex;

    padding-left: 25px;

    background-image: url(${likeIcon});
    background-size: 18px;
    background-position: left center;
    background-repeat: no-repeat;
`

export const NewsViews = styled.div`
    display: flex;

    padding-left: 25px;

    background-image: url(${eyeIcon});
    background-size: 18px;
    background-position: left center;
    background-repeat: no-repeat;
`

export const NewsWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-flow: column nowrap;
`

export const NewsHeader = styled.div`
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

export const NewsHeaderText = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`

export const NewsHeaderTitle = styled.div`
    font-size: 32px;
    font-weight: bold;
    color: #fff;
`

export const NewsHeaderSubTitle = styled.div`
    font-size: 16px;
    color: #fff;
`

export const NewsBody = styled.div`
    width: 100%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    margin: 5vh 0;
`

export const NewsCards = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    flex-grow: 3;

    margin-right: 10vw;
`

export const NewsRightMenu = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    flex-grow: 2;
    
    color: #fff;
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

export const MenuCardWrapper = styled(Link)`
    display: flex;
    flex-flow: column nowrap;

    margin: 1vh 0;

    & span:hover {
        color: var(--color-1);
    }
`
