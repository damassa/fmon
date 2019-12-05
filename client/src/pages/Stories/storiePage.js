import React, { useEffect, useState } from 'react';
import { formatRelative } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import api from '../../services/api';
import { getToken, isAuthenticated } from '../../services/auth';

import { FastLoad1 }    from './fastLoad';
import Footer           from '../Footer';

import {
    StoriesHeaderAlt,
    StoriesHeaderText,
    StoriesHeaderTitle,
    StoriesPageBody,
    StorieHeader,
    StorieHeaderTitle,
    StorieAuthor,
    StorieDate,
    StorieImage
} from './style';

const StoriePage = (props) => {
    let [storie, setStorie] = useState(FastLoad1);

    return (
        <>  
            <StoriesHeaderAlt>
                <StoriesHeaderText>
                    <StoriesHeaderTitle>
                        Carreiras FMON
                    </StoriesHeaderTitle>
                </StoriesHeaderText>
            </StoriesHeaderAlt>
            <StoriesPageBody>
                <StorieHeader>
                    <StorieHeaderTitle>
                        {storie.title}
                    </StorieHeaderTitle>
                    <StorieAuthor>
                        Por: {storie.authorName}
                    </StorieAuthor>
                    <StorieDate>
                        Atualizado {formatRelative(new Date(storie.updatedAt), new Date(),{ locale: ptBR })}
                    </StorieDate>
                    <StorieImage Image={storie.image} />
                </StorieHeader>
            </StoriesPageBody>
            <Footer />
        </>
    )
}

export default StoriePage;
