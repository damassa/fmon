import React, { useEffect, useState } from 'react';
import { formatRelative } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import api from '../../services/api';
import { getToken, isAuthenticated } from '../../services/auth';

import { fastLoad1 }    from './fastLoad';
import Footer           from '../Footer';
import { 
    NewsHeaderAlt,
    NewsHeaderText,
    NewsHeaderTitle,
    NoticePage, 
    NoticeHeader, 
    NoticeTitle,
    NoticeAuthor,
    NoticeDate,
    NoticeImage,
    NoticeBody,
    NoticeFooter,
    LikeWrapper,
    LikeButton,
    SocialShare,
    Social,
    SocialLinks,
    SocialText
} from './style';

import FacebookIcon from '../../assets/icons/facebook-color.svg';
import TwitterIcon  from '../../assets/icons/twitter-color.svg';
import WhatsappIcon from '../../assets/icons/whatsapp-color.svg';


const NewsPage = (props) => {
    let [news, setNews] = useState(fastLoad1);
    let [liked, setLiked] = useState(false);

    useEffect(() => {
        fetch(api +"/news/" + props.match.params.id, {
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

        fetch(api +"/news/checkLike/" + localStorage.id, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken(),
            },
            body: JSON.stringify({news: props.match.params.id}),
        }).then(response => {
            response.json().then(values => {
                setLiked(values.like);
            })
        })
    // eslint-disable-next-line
    }, []);

    function likeNews() {
        if(isAuthenticated()) {
            let changeNews = news;
            if(liked) {
                setLiked(false);
                changeNews.likes--;
            } else {
                setLiked(true);
                changeNews.likes++;
            }

            fetch(api +"/news/like/" + localStorage.id, {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + getToken(),
                },
                body: JSON.stringify({news: props.match.params.id}),
            }).then(response => {
                response.json().then(values => {
                    setNews(changeNews);
                })
            }) 
        } else {

        }
    }

    function likeButton() {
        if(isAuthenticated()) {
            return (
                <LikeButton 
                    Liked={liked} 
                    onClick={() => likeNews()}
                >
                    {news.likes}
                </LikeButton>
            )
        }
    }
    
    return (
        <>  
            <NewsHeaderAlt>
                <NewsHeaderText>
                    <NewsHeaderTitle>Notícias FMON</NewsHeaderTitle>
                </NewsHeaderText>
            </NewsHeaderAlt>
            <NoticePage>
                <NoticeHeader>
                    <NoticeTitle>{news.title}</NoticeTitle>
                    <NoticeAuthor>Por: {news.authorName}</NoticeAuthor>
                    <NoticeDate>
                        Criado {formatRelative(new Date(news.createdAt), new Date(),{ locale: ptBR })}
                    </NoticeDate>
                    <NoticeImage Image={"data:image/png;base64," + news.image} />
                </NoticeHeader>
                <NoticeBody dangerouslySetInnerHTML={{ __html: news.text }}>
                </NoticeBody>   
                <NoticeFooter>
                    <LikeWrapper>
                        {likeButton()}
                    </LikeWrapper>
                    <SocialShare>
                        <SocialText>
                            Compartilhe:
                        </SocialText>
                        <SocialLinks>
                            <Social 
                                Image={FacebookIcon} 
                                target="_blank" 
                                href={"https://www.facebook.com/sharer/sharer.php?u=" + window.location.href} 
                            />
                            <Social 
                                Image={TwitterIcon} 
                                target="_blank" 
                                href={"https://twitter.com/share?text="+news.title+"&url="+window.location.href+"&hashtags=#FMON"} 
                            />
                            <Social 
                                Image={WhatsappIcon}
                                target="_blank"
                                href={"https://api.whatsapp.com/send?text=" + window.location.href} 
                            />
                        </SocialLinks>
                    </SocialShare>
                </NoticeFooter>
            </NoticePage>
            <Footer />
        </>
    )
} 

export default NewsPage;
