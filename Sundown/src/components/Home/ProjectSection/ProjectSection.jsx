import React, { useState } from 'react';
import styles from './ProjectSection.module.css'
import airForc12021 from '../../../assets/airForce12021.webp'
import anniversary from '../../../assets/anniversary.webp'
import sohoNYC from '../../../assets/sohoNYC.webp'
import makersStudio from '../../../assets/makersStudio.webp'
import { HiOutlineArrowLongRight } from "react-icons/hi2";


const ProjectSection = () => {
    const data = [
        {
            "title": "SOHO 2023",
            "image": sohoNYC,
            "type": "video"
        },
        {
            "title": "NYFW Popup",
            "image": makersStudio,
            "type": "video"
        },
        {
            "title": "Air Force 12021",
            "image": airForc12021,
            "type": "image"
        },
        {
            "title": "Play New Kidivision",
            "image": sohoNYC,
            "type": "video"
        },
        {
            "title": "Makers Studio HOI",
            "image": makersStudio,
            "type": "image"
        },
        {
            "title": "SOHO NYC",
            "image": sohoNYC,
            "type": "image"
        },
        {
            "title": "50th Anniversary",
            "image": anniversary,
            "type": "image"
        },
    ]

    const [isFixedVisible, setFixedVisible] = useState(false);
    const [fixedImage, setFixedImage] = useState('');

    const handleHoverEnter = (image) => {
        setFixedVisible(true);
        setFixedImage(image);
    };

    const handleHoverLeave = () => {
        setFixedVisible(false);
    };

    return (
        <>
            <div className={styles.fixedImage}
                style={{
                    display: isFixedVisible ? 'block' : 'none',
                    // backgroundImage: `url(${fixedImage})`,
                }}
            >
                <img className={styles.hoverContent} src={fixedImage} />
                {/* <video className={styles.hoverContent} autoPlay loop muted>
                    <source src={fixedImage} />
                </video> */}
            </div>
            <div className={styles.mainWrapper}>
                <div className={styles.elem}>
                    <div className={styles.smallDot}></div>
                    <h5>FEATURED PROJECTS</h5>
                </div>
                {data.map((item) => (
                    <div key={item.title} className={styles.elem}
                        onMouseEnter={() => handleHoverEnter(item.image)}
                        onMouseLeave={handleHoverLeave}
                    >
                        <div className={styles.overlay}></div>
                        <h2>{item.title}</h2>
                    </div>
                ))}
                <div className={styles.projectButton} style={{border:"none"}}>
                    <h4><a href="#">All Projects</a></h4>
                </div>
            </div>
        </>
    );
};


export default ProjectSection;
