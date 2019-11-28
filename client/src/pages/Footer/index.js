import React from 'react';

import {
    FooterWrapper,
    FooterTitle,
    FooterSocials,
    Social,
    Icon,
    SocialText
} from './style';
import FacebookIcon from '../../assets/icons/facebook.svg'
import TwitterIcon  from '../../assets/icons/twitter.svg'
import YoutubeIcon  from '../../assets/icons/youtube.svg'
import WhatsappIcon from '../../assets/icons/whatsapp.svg'

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterTitle>SIGA O FMON</FooterTitle>
            <FooterSocials>
                <Social href="https://www.facebook.com/footballmanageron/">
                    <Icon Image={FacebookIcon} />
                    <SocialText>FACEBOOK</SocialText>
                </Social>
                <Social href="https://twitter.com/_fmon">
                    <Icon Image={TwitterIcon} />
                    <SocialText>YOUTUBE</SocialText>
                </Social>
                <Social href="https://www.youtube.com/channel/UCcsT5Dw6znI6ELytWoBHRNQ">
                    <Icon Image={YoutubeIcon} />
                    <SocialText>TWITTER</SocialText>
                </Social>
                <Social href="https://chat.whatsapp.com/BgGYfBqKWTz6tlpIFdw8RC">
                    <Icon Image={WhatsappIcon} />
                    <SocialText>WHATSAPP</SocialText>
                </Social>
            </FooterSocials>
        </FooterWrapper>
    )
}

export default Footer;
