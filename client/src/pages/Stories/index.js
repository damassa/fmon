import React, { useState, useEffect } from 'react'
import { formatRelative } from 'date-fns'
import { ptBR } from 'date-fns/locale' 

import api from '../../services/api';
import { FastLoad } from './fastLoad'
import Footer from '../Footer';
import { InputIconWeak }    from '../../components/Input';
import { ButtonPrimary }    from '../../components/Buttons';
import searchIcon           from '../../assets/icons/search.svg'

import { 
    StoriesWrapper,
    StoriesHeader,
    StoriesHeaderText,
    StoriesHeaderTitle,
    StoriesHeaderSubTitle,
    StoriesBody,
    ListStories,
    RightMenu,
    MenuCard,
    MenuCardTitle,
    SearchResult,
    BestStories,
    StorieCard,
    StorieCardImage,
    StorieCardTitle,
    ListTitle,
    LastStories,
    StorieCardInfos,
    StorieInfosAuthor,
    StorieInfosDate,
    StorieInfosViews,
    StorieInfosRating,
    StorieEndAlert,
    StorieButtonWrapper,
    MenuCardLink,
    MenuCardWrapper,
    MenuCardText,
    MenuCardUnder,
    MenuCardSubText
} from './style';

const Stories = () => {
    let [lastStories, setLastStories] = useState(FastLoad);
    let [limitStories, setLimitStories] = useState(4);
    let [loadingStories, setLoadingStories] = useState(false);
    let [endStories, setEndStories] = useState(false);

    function loadMoreStories() {
        if(!loadingStories) {
            setLoadingStories(true);
            setLimitStories(limitStories += 4);

            fetch(api +"/stories", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({limit: limitStories}),
            }).then(response => {
                response.json().then(values => {
                    if(!values.error) {
                        setLastStories(values);
                        setLoadingStories(false);

                        if(limitStories > values.length) {
                            setEndStories(true);
                        }
                    }
                })
            })
        }
    }

    useEffect(() => {
        fetch(api +"/stories", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({limit: limitStories}),
        }).then(response => {
            response.json().then(values => {
                if(!values.error) {
                    setLastStories(values);
                    setLoadingStories(false);
                }
            })
        })
    // eslint-disable-next-line
    }, [])

    return (
        <>
            <StoriesWrapper>
                <StoriesHeader>
                    <StoriesHeaderText>
                        <StoriesHeaderTitle>
                            Carreiras FMON
                        </StoriesHeaderTitle>
                        <StoriesHeaderSubTitle>
                            Acompanhe ou conte as melhores carreiras aqui!
                        </StoriesHeaderSubTitle>
                    </StoriesHeaderText>
                </StoriesHeader>
                <StoriesBody>
                    <ListStories>
                        <ListTitle>Melhores do mês</ListTitle>
                        <BestStories>
                            {lastStories.slice(0, 3).map((element, index) => (
                                <StorieCard className="small" key={index} to={"/stories/read/" + element.id}>
                                    <StorieCardImage Image={element.image}/>
                                    <StorieCardTitle>{element.title}</StorieCardTitle>
                                    <StorieCardInfos>
                                        <StorieInfosAuthor>{element.authorName}</StorieInfosAuthor>
                                        <StorieInfosRating>4.5</StorieInfosRating>
                                    </StorieCardInfos>
                                </StorieCard>
                            ))}
                        </BestStories>
                        <ListTitle>Últimas Atualizações</ListTitle>
                        <LastStories>
                            {lastStories.map((element, index) => (
                                <StorieCard key={index} to={"/stories/read/" + element.id}>
                                    <StorieCardImage Image={element.image}/>
                                    <StorieCardTitle>{element.title}</StorieCardTitle>
                                    <StorieCardInfos>
                                        <div>
                                            <StorieInfosAuthor>{element.authorName}</StorieInfosAuthor>
                                            <StorieInfosDate>
                                                {formatRelative(new Date(element.updatedAt), new Date(),{ locale: ptBR }) }
                                            </StorieInfosDate>
                                        </div>
                                        <div>
                                            <StorieInfosViews>{element.views}</StorieInfosViews>
                                            <StorieInfosRating>4.5</StorieInfosRating>
                                        </div>
                                    </StorieCardInfos>
                                </StorieCard>
                            ))}
                            <StorieButtonWrapper>
                                {endStories ?
                                    (<StorieEndAlert>Acabou</StorieEndAlert>) :
                                    (<ButtonPrimary 
                                        Width="50%"
                                        onClick={() => loadMoreStories()}
                                    >
                                        {loadingStories ? "Carregando..." : "Carregar Mais"}
                                    </ButtonPrimary>)
                                }
                            </StorieButtonWrapper>
                        </LastStories>
                    </ListStories>
                    <RightMenu>
                        <MenuCard>
                            <MenuCardTitle>MENU</MenuCardTitle>
                            <MenuCardLink to="/stories/create">
                                Criar Carreira
                            </MenuCardLink>
                            <MenuCardLink to="/stories/myStories">
                                Minhas Carreiras
                            </MenuCardLink>
                            <MenuCardLink to="/stories/follow">
                                Carreiras que Sigo
                            </MenuCardLink>
                            <MenuCardLink to="/stories/rules">
                                Regras
                            </MenuCardLink>
                            <MenuCardLink to="/stories/finished">
                                Carreiras encerradas
                            </MenuCardLink>
                            <MenuCardLink to="/stories/rakings">
                                Rankings mensais
                            </MenuCardLink>
                        </MenuCard>
                        <MenuCard>
                            <MenuCardTitle>PESQUISA</MenuCardTitle>
                            <InputIconWeak 
                                placeholder="Pesquisar..." 
                                icon={searchIcon} 
                            />
                            <SearchResult>
                            </SearchResult>
                        </MenuCard>
                        <MenuCard>
                            <MenuCardTitle>MAIS VISTAS</MenuCardTitle>
                            {lastStories.slice(0, 3).map((element, index) => (
                                <MenuCardWrapper to={"/stories/read/" + element.id} key={index}>
                                    <MenuCardText>
                                        {element.title}
                                    </MenuCardText>
                                    <MenuCardUnder>
                                        <MenuCardSubText>{element.authorName}</MenuCardSubText>
                                        <MenuCardSubText>
                                            {formatRelative(new Date(element.updatedAt), new Date(),{ locale: ptBR }) }
                                        </MenuCardSubText>
                                    </MenuCardUnder>
                                </MenuCardWrapper>
                            ))}
                        </MenuCard>
                        <MenuCard>
                            <MenuCardTitle>MAIS BEM RANQUEADAS</MenuCardTitle>
                            {lastStories.slice(0, 3).map((element, index) => (
                                <MenuCardWrapper to={"/stories/read/" + element.id} key={index}>
                                    <MenuCardText>
                                        {element.title}
                                    </MenuCardText>
                                    <MenuCardUnder>
                                        <MenuCardSubText>{element.authorName}</MenuCardSubText>
                                        <MenuCardSubText>
                                            {formatRelative(new Date(element.updatedAt), new Date(),{ locale: ptBR }) }
                                        </MenuCardSubText>
                                    </MenuCardUnder>
                                </MenuCardWrapper>
                            ))}
                        </MenuCard>
                        <MenuCard>
                            <MenuCardTitle>TOP MANAGERS</MenuCardTitle>
                            <MenuCardWrapper to="/user/profile/1">
                                <MenuCardText>Kixa</MenuCardText>
                                <MenuCardUnder>
                                    <MenuCardSubText>4 histórias</MenuCardSubText>
                                    <MenuCardSubText>4.74</MenuCardSubText>
                                </MenuCardUnder>
                            </MenuCardWrapper>
                            <MenuCardWrapper to="/user/profile/2">
                                <MenuCardText>Big</MenuCardText>
                                <MenuCardUnder>
                                    <MenuCardSubText>6 histórias</MenuCardSubText>
                                    <MenuCardSubText>4.24</MenuCardSubText>
                                </MenuCardUnder>
                            </MenuCardWrapper>
                            <MenuCardWrapper to="/user/profile/4">
                                <MenuCardText>Admin</MenuCardText>
                                <MenuCardUnder>
                                    <MenuCardSubText>2 histórias</MenuCardSubText>
                                    <MenuCardSubText>4.24</MenuCardSubText>
                                </MenuCardUnder>
                            </MenuCardWrapper>
                        </MenuCard>
                    </RightMenu>
                </StoriesBody>
            </StoriesWrapper>
            <Footer />
        </>
    )
}

export default Stories;
