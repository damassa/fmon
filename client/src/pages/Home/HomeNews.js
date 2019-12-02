import React, { useState, useEffect } from 'react';
import { formatRelative } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import api from '../../services/api';

import { 
    HomeNews as NewsWrapper ,
    NewsHeader,
    NewsHeaderTitle,
    NewsBody
} from './style';
import { fastLoad4 } from '../News/fastLoad';
import {
    NewsCard,
    NewsImage,
    NewsTitle,
    NewsInfos,
    NewsAuthor,
    NewsDate,
    NewsLikes,
    NewsViews
} from '../News/style';

const HomeNews = () => {
    let [news, setNews] = useState(fastLoad4);
    let data = JSON.stringify({limit: 4});

    useEffect(() => {
        fetch(api+"/news", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        }).then(response => {
            response.json().then(values => {
                if(!values.error) {
                    setNews(values);
                }
            })
        })
    // eslint-disable-next-line
    }, []);

    return (
        <NewsWrapper>
            <NewsHeader>
                <NewsHeaderTitle>
                    <span>Notícias</span>
                </NewsHeaderTitle>
            </NewsHeader>
            <NewsBody>
                {news.map((element, index) => (
                    <NewsCard to={"/news/" + element.id} key={index}>
                        <NewsImage Image={"data:image/png;base64," + element.image}/>
                        <NewsTitle>{element.title}</NewsTitle>
                        <NewsInfos>
                            <div>
                                <NewsAuthor>{element.authorName}</NewsAuthor>
                                <NewsDate>
                                    {formatRelative(new Date(element.createdAt), new Date(),{ locale: ptBR }) }
                                </NewsDate>
                            </div>
                            <div>
                                <NewsLikes>{element.likes}</NewsLikes>
                                <NewsViews>{element.views}</NewsViews>
                            </div>
                        </NewsInfos>
                    </NewsCard>
                ))}
            </NewsBody>
        </NewsWrapper>
    )
}

export default HomeNews;
