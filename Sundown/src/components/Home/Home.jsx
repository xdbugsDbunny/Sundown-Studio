import React from 'react'
import Navbar from '../Navbar/Navbar';
import styles from './Home.module.css'
import TopSection from './TopSection/TopSection';
import Video from './VideoSection/Video';
import Carousel from '../Carousel/Carousel';
import MidSection from './MidSection/MidSection';
import ProjectSection from './ProjectSection/ProjectSection';
import ServiceSection from './ServiceSection/ServiceSection';
import SwiperSection from './Swiper/SwiperSection';
import Footer from '../Footer/Footer';
import PageFive from './PageFive/PageFive';

const Home = () => {
    return (
        <>
            <div className={styles.homeWrapper}>
                <Navbar></Navbar>
                <TopSection></TopSection>
                <Video></Video>
                <Carousel></Carousel>
                <MidSection></MidSection>
                <ProjectSection></ProjectSection>
                <ServiceSection></ServiceSection>
                <SwiperSection></SwiperSection>
                <PageFive></PageFive>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Home;