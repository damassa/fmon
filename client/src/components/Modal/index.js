import React, { useState, useEffect, useRef} from 'react';
import { TimelineLite } from 'gsap/all'

import {
    ModalWrapper,
    Modal as ModalPage,
    CloseModal,
    CloseModalIcon,
    ModalTitle,
    ModalContent
} from './style';

const Modal = (props) => {
    let modal = useRef();
    let modalWrapper = useRef();

    const [modalAnimation, setModalAnimation] = useState();
    const [tl] = useState(new TimelineLite({ paused: true }));

    useEffect(() => {
        setModalAnimation(
            tl
            .to(modalWrapper, 0, {css: {display: 'flex'}})
            .from(modalWrapper, 0.5, { autoAlpha: 0 })
            .from(modal, 0.5, { bottom: 500, autoAlpha: 0})
            .pause()
        )
    // eslint-disable-next-line
    }, []);

    return (
        <>
            <div onClick={() => modalAnimation.play()}>
                {props.Button}
            </div>
            <ModalWrapper 
                ref={div => modalWrapper = div}
                onClick={() => modalAnimation.reverse()}
            >
                <ModalPage 
                    ref={div => modal = div}
                    onClick={event => event.stopPropagation()}
                >
                    <CloseModal>
                        <CloseModalIcon
                            onClick={() => modalAnimation.reverse()}
                        />
                    </CloseModal>
                    <ModalTitle>{props.Title}</ModalTitle>
                    <ModalContent>
                        {props.Content}
                    </ModalContent>
                </ModalPage>
            </ModalWrapper>
        </>
    )
}

export default Modal;