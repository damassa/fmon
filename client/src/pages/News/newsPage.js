import React, { useEffect, useState } from 'react';
import { formatRelative } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import Footer from '../Footer';
import { NoticePage, NoticeHeader, NoticeTitle,NoticeAuthor, NoticeDate } from './style';

const NewsPage = (props) => {
    let [news, setNews] = useState('');
    let url = "http://localhost:4000/api/news/" + props.match.params.id;

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => {
            response.json().then(values => {
                setNews(values);
            })
        })
    // eslint-disable-next-line
    }, []);
    
    return (
        <>  
            <NoticePage>
                <NoticeHeader>
                    <NoticeTitle>{news.title}</NoticeTitle>
                    <NoticeAuthor>Por: {news.authorName}</NoticeAuthor>
                    <NoticeDate>Criado {formatRelative(new Date(), new Date(),{ locale: ptBR })}</NoticeDate>
                </NoticeHeader>
                <p>{news.likes}</p>
                <p>{news.views}</p>
                <img src={"data:image/png;base64," + news.image} />
                <p>{news.text}</p>
            </NoticePage>
            <Footer />
        </>
    )
} 

export default NewsPage;
