import React, { useState } from 'react';
import { formatRelative } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { 
    HomeNews as NewsWrapper ,
    NewsHeader,
    NewsHeaderTitle,
    NewsBody
} from './style';
import FastLoad from '../News/fastLoad';
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
    let [news, setNews] = useState(FastLoad);
    let data = JSON.stringify({limit: 4});

    fetch("http://localhost:4000/api/news", {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: data
    }).then(response => {
        response.json().then(values => {
            setNews(values);
        })
    })

    return (
        <NewsWrapper>
            <NewsHeader>
                <NewsHeaderTitle>
                    <span>Notícias</span>
                </NewsHeaderTitle>
            </NewsHeader>
            <NewsBody>
                {news.map((element, index) => (
                    <NewsCard key={index}>
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
