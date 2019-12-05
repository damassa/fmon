import React, { useState, useEffect } from 'react';
import { formatRelative } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import api from '../../services/api';

import { fastLoad2 }        from './fastLoad';
import { ButtonPrimary }    from '../../components/Buttons';
import { InputIconWeak }    from '../../components/Input';
import searchIcon           from '../../assets/icons/search.svg';
import {
    SearchResult,
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
    MenuCardWrapper,
    NewsEndAlert
} from './style';
import Footer from '../Footer';

const News = () => {
    let [news, setNews] = useState(fastLoad2);
    let [mostViewed, setMostViewed] = useState([]);
    let [mostLiked, setMostLiked] = useState([]);
    let [limitNews, setLimitNews] = useState(2);
    let [loadingNews, setLoadingNews] = useState(false);
    let [search, setSearch] = useState([]);
    let [loadindSearch, setLoadindSearch] = useState(false);
    let [endNews, setEndNews] = useState(false);

    function loadMoreNews() {
        if(!loadingNews) {
            setLimitNews(limitNews += 2);
            setLoadingNews(true);

            fetch(api +"/news", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({limit: limitNews}),
            }).then(response => {
                response.json().then(values => {
                    setNews(values);
                    setLoadingNews(false);

                    if(limitNews > values.length) {
                        setEndNews(true);
                    }
                })
            });
        }
    }

    function searchFetch(value) {
        setLoadindSearch(true);

        if(value) {
            fetch(api +"/news/searchNews", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({text: value})
            }).then(response => {
                response.json().then(values => {
                    setSearch(values);
                    setLoadindSearch(false);
                })
            })
        } else {
            setSearch([]);
            setLoadindSearch(false);
        }
    }

    useEffect(() => {
        fetch(api +"/news/lowInfos", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({limit: 4, order: "desc", sortBy: "A.views"}),
        }).then(response => {
            response.json().then(values => {
                setMostViewed(values);
            })
        })

        fetch(api +"/news/lowInfos", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({limit: 4, order: "desc", sortBy: "COUNT(C.id)"}),
        }).then(response => {
            response.json().then(values => {
                setMostLiked(values);
            })
        })

        fetch(api +"/news", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({limit: limitNews}),
        }).then(response => {
            response.json().then(values => {
                setNews(values);
                setLoadingNews(false);
            })
        })
    // eslint-disable-next-line
    }, []);

    return (
        <>
            <NewsWrapper>
                <NewsHeader>
                    <NewsHeaderText>
                        <NewsHeaderTitle>Notícias FMON</NewsHeaderTitle>
                        <NewsHeaderSubTitle>As últimas notícias sobre os nossos Campeonatos e o universo FM</NewsHeaderSubTitle>
                    </NewsHeaderText>
                </NewsHeader>
                <NewsBody>
                    <NewsCards>
                        {news.map((element, index) => (
                            <NewsCard to={"/news/read/" + element.id} key={index}>
                                <NewsImage Image={element.image}/>
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
                        {endNews ?
                            (<NewsEndAlert>Acabou</NewsEndAlert>) :
                            (<ButtonPrimary 
                                Width="50%"
                                onClick={() => loadMoreNews()}
                            >
                                {loadingNews ? "Carregando..." : "Carregar Mais"}
                            </ButtonPrimary>)
                        }
                    </NewsCards>
                    <NewsRightMenu>
                        <MenuCard>
                            <MenuCardTitle>PESQUISA</MenuCardTitle>
                            <InputIconWeak 
                                placeholder="Pesquisar..." 
                                icon={searchIcon} 
                                onChange={(val) => searchFetch(val.target.value)}
                            />
                            <SearchResult>
                                {
                                    loadindSearch ?
                                    (<span>Pesquisando...</span>) :
                                    search.map((element, index) => (
                                        <MenuCardWrapper to={"/news/read/" + element.id} key={index}>
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
                                    ))
                                }
                            </SearchResult>
                        </MenuCard>
                        <MenuCard>
                            <MenuCardTitle>MAIS VISTAS</MenuCardTitle>
                            {mostViewed.map((element, index) => (
                                <MenuCardWrapper to={"/news/read/" + element.id} key={index}>
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
                                <MenuCardWrapper to={"/news/read/" + element.id} key={index}>
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
