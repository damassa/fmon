import React, { useState } from 'react';

import { 
    HomeNews as NewsWrapper ,
    NewsHeader,
    NewsHeaderTitle,
    NewsBody
} from './style';

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
    let [news, setNews] = useState([]);
    let [newsPhotos, setNewsPhotos] = useState([]);

    fetch("http://localhost:4000/api/news", {
        method: "GET"
    }).then(response => {
        response.json().then(values => {
            setNews(values);

            values.map((element, key) => (
                fetch("http://localhost:4000/api/news/image/" + element.id, {
                method: "GET"
                }).then(response => {
                    response.json().then(val => {
                        setNewsPhotos(val.image);
                    })
                })
            ));
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
                        <NewsImage Image={newsPhotos[element.id]}/>
                        <NewsTitle>{element.title}</NewsTitle>
                        <NewsInfos>
                            <div>
                                <NewsAuthor>{element.author}</NewsAuthor>
                                <NewsDate>{element.createdAt}</NewsDate>
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
