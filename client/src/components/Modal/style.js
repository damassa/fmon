import styled from 'styled-components';

import CloseIcon from '../../assets/icons/close.svg';

export const ModalWrapper = styled.div`
    position: fixed;
    display: none;
    top: 0%;
    left: 0;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, 0.5);
`

export const Modal = styled.div`
    position: relative;
    display: flex;
    height: ${props => props.height ? props.height : 'auto'};
    width: ${props => props.width ? props.width : '450px'};
    max-width: 95%;
    flex-flow: column nowrap;
    align-items: center;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.25);
`

export const CloseModal = styled.div`
    display: flex;
    width: 94%;
    justify-content: flex-end;
    padding: 3%;
`

export const CloseModalIcon = styled.div`
    height: 20px;
    width: 20px;
    right: 0;
    background-image: url(${CloseIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
`

export const ModalTitle = styled.div`
    margin-top: -20px;
    margin-bottom: 2vh;
    font-size: 24px;
    font-weight: bold;
    color: var(--color-1);
`

export const ModalContent = styled.div`
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
    margin-bottom: 25px;
    color: #000;
`