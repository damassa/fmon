import React from 'react';

import { 
    ModalWrapper, 
    Modal as ModalPage, 
    CloseModal, 
    CloseModalIcon, 
    ModalTitle, 
    ModalContent 
} from '../Modal/style';

export default class Modal extends React.Component {
    render() {
        return (
            <ModalWrapper>
                <ModalPage width={this.props.width} height={this.props.height}>
                    <CloseModal><CloseModalIcon/></CloseModal>
                    <ModalTitle>{this.props.title}</ModalTitle>
                    <ModalContent>
                        {this.props.content}
                    </ModalContent>
                </ModalPage>
            </ModalWrapper>
        )
    }
}