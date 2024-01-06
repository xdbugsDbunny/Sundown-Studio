import React from 'react'
import Navbar from '../Navbar/Navbar';
import styles from './Home.module.css'
import TopSection from './TopSection/TopSection';
import Video from './VideoSection/Video';
import Carousel from '../Carousel/Carousel';

const Home = () => {
    return (

        <div className={styles.homeWrapper}>
            <Navbar></Navbar>
            <TopSection></TopSection>
            <Video></Video>
            <Carousel></Carousel>
        </div>
    )
}

export default Home;