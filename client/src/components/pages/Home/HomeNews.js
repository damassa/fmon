import React from 'react';

import { 
    HomeNews as Wrapper,
    HomeNewsTop,
    HomeNewsTopCard,
} from './style';

import {
    NewsBody,
    NewsCard,
    NewsBackground,
    NewsTitle,
    NewsInfos,
    NewsAuthor,
    NewsDate,
    NewsLike,
    NewsViews,
    NewsInfosSeparator,
    NewsLine
} from '../News/style'

import NewsImage from '../../../assets/news/lfm.jpg'

export default class HomeNews extends React.Component {
    render() {
        return (
            <Wrapper>
                <HomeNewsTop>
                    <HomeNewsTopCard to="/news">
                        <span>Notícias</span>
                    </HomeNewsTopCard>
                </HomeNewsTop>
                <NewsBody>
                    <NewsCard to="/news/1">
                        <NewsBackground className="newsBackground" image={NewsImage} />
                        <NewsTitle>Teste</NewsTitle>
                        <NewsInfos>
                            <NewsInfosSeparator>
                                <NewsAuthor>Admin</NewsAuthor>
                                <NewsDate>21/11/19</NewsDate>
                            </NewsInfosSeparator>
                            <NewsInfosSeparator>
                                <NewsLike>15</NewsLike>
                                <NewsViews>15</NewsViews>
                            </NewsInfosSeparator>
                        </NewsInfos>
                    </NewsCard>
                    <NewsLine>
                        <NewsCard to="/news/1">
                            <NewsBackground className="newsBackground" image={NewsImage} />
                            <NewsTitle>Teste</NewsTitle>
                            <NewsInfos>
                                <NewsInfosSeparator>
                                    <NewsAuthor>Admin</NewsAuthor>
                                    <NewsDate>21/11/19</NewsDate>
                                </NewsInfosSeparator>
                                <NewsInfosSeparator>
                                    <NewsLike>15</NewsLike>
                                    <NewsViews>15</NewsViews>
                                </NewsInfosSeparator>
                            </NewsInfos>
                        </NewsCard>
                        <NewsCard to="/news/1">
                            <NewsBackground className="newsBackground" image={NewsImage} />
                            <NewsTitle>Teste</NewsTitle>
                            <NewsInfos>
                                <NewsInfosSeparator>
                                    <NewsAuthor>Admin</NewsAuthor>
                                    <NewsDate>21/11/19</NewsDate>
                                </NewsInfosSeparator>
                                <NewsInfosSeparator>
                                    <NewsLike>15</NewsLike>
                                    <NewsViews>15</NewsViews>
                                </NewsInfosSeparator>
                            </NewsInfos>
                        </NewsCard>
                    </NewsLine>
                </NewsBody>
            </Wrapper>
        )
    }
}