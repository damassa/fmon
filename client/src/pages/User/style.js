import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginForm = styled.form`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    
    width: 40%;
    min-width: 300px;
    max-width: 96%;
    padding: 0 2vw;

    border: 1px solid var(--color-1);
    border-radius: 10px;
`

export const FormTitle = styled.div`
    width: 100%;
    padding: 3vh 2vw;
    margin-bottom: 2vh;

    display: flex;
    justify-content: center;

    font-size: 24px;
    font-weight: bold;
    background-color: var(--color-1);
    color: #fff;

    border-top-right-radius: 9px;
    border-top-left-radius: 9px;
`

export const LinkForm = styled(Link)`
    font-size: 14px;
    color: var(--color-1);
    text-align: center;
    
    transition: 0.5s;
    margin: 1vh 0;

    &:hover {
        text-decoration: underline;
    }
`

export const ShowError = styled.div`
    width: calc(100% - 20px);
    margin: 1vh 0;
    padding: 10px;
    display: ${props => props.Situation ? "flex" : "none"};

    background-color: var(--color-1);
    color: #fff;
    border-radius: 10px;
`