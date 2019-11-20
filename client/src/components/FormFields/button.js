import styled from 'styled-components';

export const ButtonPrimary = styled.button`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '50px'};
    font-size: ${props => props.fontSize ? props.fontSize : '16px'};
    margin: ${props => props.margin ? props.margin : '1vh 0'};
    font-weight: bold;
    color: #fff;
    background-color: var(--color-1);
    border: 1px solid #fff;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: #fff;
        color: var(--color-1);
        border-color: var(--color-1);
    }
`

export const ButtonSecondary = styled(ButtonPrimary)`
    color: var(--color-1);
    background-color: #fff;
    border-color: var(--color-1);

    &:hover {
        background-color: var(--color-1);
        color: #fff;
        border-color: #fff;
    }
`