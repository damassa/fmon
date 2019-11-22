import React from 'react';
import { formatRelative } from 'date-fns';
import { pt } from 'date-fns/locale';

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
    NewsInfosSeparator
} from '../News/style'
import api from '../../../services/api'

export default class HomeNews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            news: []
        }
    }

    componentDidMount() {
        this.getNews().then(res => {
            this.setState({
                news: res.data
            })
        });
    }

    async getNews() {
        return await api.get("/news", {limit: 3});
    }

    render() {
        return (
            <Wrapper>
                <HomeNewsTop>
                    <HomeNewsTopCard to="/news">
                        <span>Notícias</span>
                    </HomeNewsTopCard>
                </HomeNewsTop>
                <NewsBody>
                    {this.state.news.map((element, index) => (
                        <NewsCard key={index} to={"/news/" + element.id}>
                            <NewsBackground 
                                className="newsBackground" 
                                image={"data:image/png;base64," + element.image} 
                            />
                            <NewsTitle>{element.title}</NewsTitle>
                            <NewsInfos>
                                <NewsInfosSeparator>
                                    <NewsAuthor>{element.authorName}</NewsAuthor>
                                    <NewsDate>
                                        {formatRelative(
                                            new Date(), 
                                            new Date(),
                                            {locale: pt} 
                                        )}
                                        {console.log(element.createdAt)}
                                    </NewsDate>
                                </NewsInfosSeparator>
                                <NewsInfosSeparator>
                                    <NewsLike>{element.likes}</NewsLike>
                                    <NewsViews>{element.views}</NewsViews>
                                </NewsInfosSeparator>
                            </NewsInfos>
                        </NewsCard>
                    ))}
                </NewsBody>
            </Wrapper>
        )
    }
}