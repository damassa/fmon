import React, { useState } from 'react';

import 'suneditor/dist/css/suneditor.min.css';
import SunEditor, { buttonList } from 'suneditor-react';

import { getToken, isAuthenticated } from '../../services/auth';
import api from '../../services/api';

import { Input }            from '../../components/Input';
import { ButtonPrimary }    from '../../components/Buttons';
import Footer               from '../Footer';
import { 
    NewsHeaderAlt,
    NewsHeaderText,
    NewsHeaderTitle,
    FormNews,
    FormLabel,
    FormText,
    ButtonDiv, 
    ShowError
} from './style';

const CreateNews = (props) => {
    if(!isAuthenticated()) {
        props.history.push("/user/login");
    }

    let [title, setTitle] = useState("");
    let [image, setImage] = useState("");
    let [text, setText]   = useState("");
    let [error, setError] = useState(null);
    let [sendText, setSendText] = useState("Enviar");
    
    const validateForm = (
        title: String,
        image: String,
        text: String,
        setError: (error: String | null) => void
    ): Boolean => {
        if(!title || !image || !text) {
            setError("Preencha todos os campos para enviar!")
            return false
        }

        setError(false)
        return true;
    }

    const handleSubmit = async e => {
        setSendText("Enviando...");
        let formData = new FormData();
        let imageUpload = document.querySelector('input[type="file"]').files[0];
        formData.append('title', title);
        formData.append('image', imageUpload);
        formData.append('text', text);

        
        fetch(api + "/news/create/" + localStorage.id, {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + getToken(),
            },
            body: formData,
        }).then(response => {
            response.json().then(values => {
                props.history.push("/news/read/" + values.insertId);
            })
        }).catch(err => {
            setError(err);
        }) 
    }

    return (
        <>
            <NewsHeaderAlt>
                <NewsHeaderText>
                    <NewsHeaderTitle>Notícias FMON</NewsHeaderTitle>
                </NewsHeaderText>
            </NewsHeaderAlt>
            <FormNews
                onSubmit={ e => {
                    e.preventDefault();
                    if(validateForm(title, image, text, setError)) {
                        handleSubmit();
                    }
                }
            }>
                <FormLabel>
                    <FormText>Título:</FormText>
                    <Input onChange={e => setTitle(e.target.value)} />
                </FormLabel>
                <FormLabel>
                    <FormText>Imagem de Capa:</FormText>
                    <input onChange={e => setImage(e.target.value)} type="file" />
                </FormLabel>
                <SunEditor 
                    style={{zIndex: "1"}}
                    setOptions={{
                        height: 250,
                        buttonList: buttonList.complex 
                    }}
                    onChange={e => setText(e)}
                />
                <ShowError Situation={error}>
                    {error}
                </ShowError>
                <ButtonDiv> 
                    <ButtonPrimary Width="50%">{sendText}</ButtonPrimary>
                </ButtonDiv>
            </FormNews>
            <Footer />
        </>
    )
}

export default CreateNews;
