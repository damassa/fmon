import React, { useState } from 'react';
import { formatRelative } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import FastLoad from './fastLoad';
import {
    NewsWrapper,
    NewsHeader,
    NewsHeaderText,
    NewsHeaderTitle,
    NewsHeaderSubTitle,
    NewsBody,
    NewsCards, 
    NewsRightMenu,
    NewsCard,
    NewsImage,
    NewsTitle,
    NewsInfos,
    NewsAuthor,
    NewsDate,
    NewsLikes,
    NewsViews,
    MenuCard,
    MenuCardTitle,
    MenuCardText,
    MenuCardUnder,
    MenuCardSubText,
    MenuCardWrapper
} from './style';

const News = () => {
    let [news, setNews] = useState(FastLoad);
    let [mostViewed, setMostViewed] = useState([]);
    let [mostLiked, setMostLiked] = useState([]);
    let dataNews = JSON.stringify({limit: 6});
    let dataMostViewed = JSON.stringify({limit: 4, order: "desc", sortBy: "views"});
    let dataLiked = JSON.stringify({limit: 4, order: "desc", sortBy: "likes"});

    fetch("http://localhost:4000/api/news/lowInfos", {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: dataMostViewed
    }).then(response => {
        response.json().then(values => {
            setMostViewed(values);
        })
    })

    fetch("http://localhost:4000/api/news/lowInfos", {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: dataLiked
    }).then(response => {
        response.json().then(values => {
            setMostLiked(values);
        })
    })

    fetch("http://localhost:4000/api/news", {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: dataNews
    }).then(response => {
        response.json().then(values => {
            setNews(values);
        })
    })

    return (
        <NewsWrapper>
            <NewsHeader>
                <NewsHeaderText>
                    <NewsHeaderTitle>Nóticias FMON</NewsHeaderTitle>
                    <NewsHeaderSubTitle>As últimas nóticias sobre os nossos Campeonatos e o universo FM</NewsHeaderSubTitle>
                </NewsHeaderText>
            </NewsHeader>
            <NewsBody>
                <NewsCards>
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
                </NewsCards>
                <NewsRightMenu>
                    <MenuCard>
                        <MenuCardTitle>MAIS VISTAS</MenuCardTitle>
                        {mostViewed.map((element, index) => (
                            <MenuCardWrapper to={"/news/" + element.id} key={index}>
                                <MenuCardText>
                                    {element.title}
                                </MenuCardText>
                                <MenuCardUnder>
                                    <MenuCardSubText>{element.authorName}</MenuCardSubText>
                                    <MenuCardSubText>
                                        {formatRelative(new Date(element.createdAt), new Date(),{ locale: ptBR }) }
                                    </MenuCardSubText>
                                </MenuCardUnder>
                            </MenuCardWrapper>
                        ))}
                    </MenuCard>
                    <MenuCard>
                        <MenuCardTitle>MAIS CURTIDAS</MenuCardTitle>
                        {mostLiked.map((element, index) => (
                            <MenuCardWrapper to={"/news/" + element.id} key={index}>
                                <MenuCardText>
                                    {element.title}
                                </MenuCardText>
                                <MenuCardUnder>
                                    <MenuCardSubText>{element.authorName}</MenuCardSubText>
                                    <MenuCardSubText>
                                        {formatRelative(new Date(element.createdAt), new Date(),{ locale: ptBR }) }
                                    </MenuCardSubText>
                                </MenuCardUnder>
                            </MenuCardWrapper>
                        ))}
                    </MenuCard>
                </NewsRightMenu>
            </NewsBody>
        </NewsWrapper>
    )
}

export default News;
