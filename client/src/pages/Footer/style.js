import styled from 'styled-components';

import purpleBg from '../../assets/news/purple-bg.png';

export const FooterWrapper = styled.div`
    width: 100vw;
    height: 40vh;
    margin-left: -5vw;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    background-color: var(--color-1);
    background-image: url(${purpleBg});
    background-size: contain;
    background-position: center;
`