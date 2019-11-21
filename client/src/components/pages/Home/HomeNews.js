import React from 'react';

import { 
    HomeNews as Wrapper,
    NewsTop,
    NewsTopCard
} from './style';

export default class HomeNews extends React.Component {
    render() {
        return (
            <Wrapper>
                <NewsTop>
                    <NewsTopCard>
                        <span>Notícias</span>
                    </NewsTopCard>
                </NewsTop>
            </Wrapper>
        )
    }
}