import React from 'react'
import styles from './Video.module.css'
import homeVideo from "../../../assets/homeVideo.mp4"


const Video = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.mainBlob} >
                    <div className={styles.blob1}>
                        <div className={styles.blob1}></div>
                        <div className={styles.blob2}></div>
                        <div className={styles.blob3}></div>
                    </div>
                </div>
                <video autoPlay muted loop className={styles.video}>
                    <source src={homeVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    )
}

export default Video