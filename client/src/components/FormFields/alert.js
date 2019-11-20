import styled from 'styled-components';

export const Alert = styled.div`
    display: ${props => props.infos ? "block" : "none"};
    width: 85%;
    margin: 10px;
    background-color: var(--color-1);
    color: #fff;
    padding: 15px;
    border-radius: 10px;
`