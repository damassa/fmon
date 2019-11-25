import styled from 'styled-components';

export const ButtonPrimary = styled.button`
    width: ${props => props.Width ? props.Width : '100%'};
    height: ${props => props.Height ? props.Height : '50px'};
    margin: ${props => props.Margin ? props.Margin : '1vh 0'};

    font-size: ${props => props.FontSize ? props.FontSize : '16px'};
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