import styled from 'styled-components';

import userIcon         from '../../assets/icons/user-color.svg';
import dateIcon         from '../../assets/icons/date.svg';
import eyeIcon          from '../../assets/icons/eye.svg';
import likeIcon         from '../../assets/icons/heart.svg';
import likeFilledIcon   from '../../assets/icons/heart-filled.svg';

export const NewsCard = styled.div`
    width: 100%;
    
    display: flex;
    flex-flow: column nowrap;

    margin: 4vh 0;
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

    background-image: url(${likeFilledIcon});
    background-size: 18px;
    background-position: left center;
    background-repeat: no-repeat;

    &:hover {
        background-image: url(${likeIcon});
    }
`

export const NewsViews = styled.div`
    display: flex;

    padding-left: 25px;

    background-image: url(${eyeIcon});
    background-size: 18px;
    background-position: left center;
    background-repeat: no-repeat;
`