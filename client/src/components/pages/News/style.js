import styled from 'styled-components';
import { Link } from 'react-router-dom';

import UserIcon         from '../../../assets/icons/user-color.svg'
import DateIcon         from '../../../assets/icons/date.svg'
import HeartIcon        from '../../../assets/icons/heart.svg'
import HeartFilledIcon  from '../../../assets/icons/heart-filled.svg'
import EyeIcon          from '../../../assets/icons/eye.svg'

export const NewsBody = styled.div`
    display: flex;
    width: 100%;
    margin: 3vh 0;
    flex-flow: column nowrap;
`

export const NewsCard = styled(Link)`
    display: flex;
    width: 100%;
    margin: 2vh 0;
    flex-flow: column nowrap;

    &:hover .newsBackground {
        background-size: 105%;
    }
`

export const NewsBackground = styled.div`
    width: 100%;
    height: 400px;
    background-image: url(${props => props.image});
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 100%;
    transition: 0.5s;
`

export const NewsTitle = styled.span`
    margin: 1vh 0;
    font-size: 24px;
    font-weight: bold;
    color: var(--color-1);
`

export const NewsInfos = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`

export const NewsInfosSeparator = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;


    & div:first-child:after {
        content: "|";
        margin: 20px;
    }
`

export const NewsAuthor = styled.div`
    height: 16px;
    padding-left: 20px;
    background-image: url(${UserIcon});
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
`

export const NewsDate = styled.div`
    height: 16px;
    padding-left: 20px;
    background-image: url(${DateIcon});
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
`

export const NewsLike = styled.div`
    height: 16px;
    padding-left: 20px;
    background-image: url(${HeartFilledIcon});
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: 0.5;

    &:hover {
        background-image: url(${HeartIcon});
    }
`

export const NewsViews = styled.div`
    height: 16px;
    padding-left: 20px;
    background-image: url(${EyeIcon});
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: 0.5;
`

export const NewsLine = styled.div`
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    justify-content: space-between;

    & a {
        width: 47%;
        height: 300px;
    }
`