import React, { useState, useEffect } from 'react';
import { formatRelative } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { fastLoad2 }        from './fastLoad';
import { ButtonPrimary }    from '../../components/Buttons';
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
import Footer       from '../Footer';
import SearchCard   from './searchCard';

const News = () => {
    let [news, setNews] = useState(fastLoad2);
    let [mostViewed, setMostViewed] = useState([]);
    let [mostLiked, setMostLiked] = useState([]);
    let [limitNews, setLimitNews] = useState(2);
    let [loadingNews, setLoadingNews] = useState(false);

    let dataNews = JSON.stringify({limit: limitNews});
    let dataMostViewed = JSON.stringify({limit: 4, order: "desc", sortBy: "views"});
    let dataLiked = JSON.stringify({limit: 4, order: "desc", sortBy: "likes"});

    function loadMoreNews() {
        if(!loadingNews) {
            setLimitNews(limitNews += 2);
            setLoadingNews(true);
        }
    }

    useEffect(() => {
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
                setLoadingNews(false);
            })
        })
    });

    return (
        <>
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
                        <ButtonPrimary 
                            Width="50%"
                            onClick={() => loadMoreNews()}
                        >
                            {loadingNews ? "Carregando..." : "Carregar Mais"}
                        </ButtonPrimary>
                    </NewsCards>
                    <NewsRightMenu>
                        <MenuCard>
                            <MenuCardTitle>PESQUISA</MenuCardTitle>
                            <SearchCard />
                        </MenuCard>
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
            <Footer />
        </>
    )
}

export default News;
