import React, { useState } from 'react';
import { formatRelative } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { InputIconWeak }    from '../../components/Input';
import searchIcon           from '../../assets/icons/search.svg';
import { 
    SearchWrapper,
    SearchResult,
    MenuCardText,
    MenuCardUnder,
    MenuCardSubText,
    MenuCardWrapper
} from './style';

const SearchCard = () => {
    let [search, setSearch] = useState([]);
    let [loadindSearch, setLoadindSearch] = useState(false);

    function searchAction(val) {
        setLoadindSearch(true);
        fetch("http://localhost:4000/api/news/searchNews", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: val})
        }).then(response => {
            response.json().then(values => {
                setSearch(values);
                setLoadindSearch(false);
            })
        })
    }

    return (
        <SearchWrapper>
            <InputIconWeak 
                placeholder="Pesquisar..." 
                icon={searchIcon} 
                onChange={val => searchAction(val.target.value)}
            />
            <SearchResult>
                {
                    loadindSearch ?
                    (<span>Pesquisando...</span>) :
                    search.map((element, index) => (
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
                    ))
                }
            </SearchResult>
        </SearchWrapper>   
    )
}

export default SearchCard;
