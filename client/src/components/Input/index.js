import styled from 'styled-components';

export const Input = styled.input`
    height: ${props => props.height ? props.height : '32px'};
    width: ${props => props.width ? props.width : '100%'};
    max-width: 96%;
    margin: ${props => props.margin ? props.margin : '1vh 0'};
    padding: 0 2%;
    border-radius: 10px;
    border: 1px solid transparent;
    border-color: ${props => props.color ? props.color : 'var(--color-1)'};
    color: ${props => props.color ? props.color : '#000'};
    font-size: 14px;
    line-height: 14px;
    outline: none;
`

export const InputIcon = styled(Input)`
    width: calc(94% - 16px);
    background-image: url(${props => props.icon});
    background-size: 16px;
    background-position: 2% center;
    background-repeat: no-repeat;
    padding-left: calc(4% + 16px);
`

export const InputIconWeak = styled(InputIcon)`
    border-color: #aaa;
`