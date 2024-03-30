import React from 'react'
import styles from './MidSection.module.css'
import one from "../../../assets/1.webp"

const MidSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.leftWrapper}>
          <h1>We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.</h1>

        </div>
        <div className={styles.rightWrapper}>
          <img src={one} className={styles.image} />
          <p>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
        </div>
      </div>
      <div className={styles.blob}>
        {/* <div className={styles.blob1}></div>
        <div className={styles.blob2}></div> */}
      </div>
    </div>
  )
}

export default MidSection