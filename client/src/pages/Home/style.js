import styled from 'styled-components';

export const HomeBody = styled.div`
    width: 100%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    margin: 5vh 0;

    @media only screen and (max-width: 800px) {
        flex-flow: column nowrap;
    }
`

export const HomeNews = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    flex-grow: 3;

    margin-right: 10vw;

    @media only screen and (max-width: 800px) {
        margin-right: 0;
    }
`

export const HomeInfos = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    flex-grow: 2;
    
    background-color: var(--color-1);
    color: #fff;
`

export const NewsHeader = styled.div`
    height: 50px;
    margin-bottom: 4vh;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
`

export const NewsHeaderTitle = styled.div`
    display: flex;
    width: 200px;
    max-width: 100vw;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    background-color: var(--color-1);

    &::after {
        content: "";
        position: absolute;
        margin-left: 200px;
        width: 0;
        height: 0;
        border: 0 solid transparent;
        border-bottom-width: 50px;
        border-top-width: 0px;
        border-left: 25px solid var(--color-1);
    }

    & span {
        margin-left: 10px;
    }

    @media only screen and (max-width: 250px) {
        &::after {
            display: none;
        }
    }
`

export const NewsBody = styled.div`
    display: flex;
    flex-flow: column nowrap;
`