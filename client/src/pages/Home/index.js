import React from 'react';

import HomeCarousel from './HomeCarousel';
import HomeNews     from './HomeNews';
import HomeInfos    from './HomeInfos';
import Footer from '../Footer';

import { HomeBody } from './style';

const Home = () => {
    return (
        <>
            <HomeCarousel />
            <HomeBody>
                <HomeNews />
                <HomeInfos />
            </HomeBody>
            <Footer />
        </>
    )
}

export default Home;