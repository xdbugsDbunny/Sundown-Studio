import React from 'react'
import styles from './Carousel.module.css'


const Carousel = () => {
  return (
    <div className={styles.text}>
      <div className={styles.container}>
        <h1>EXPERIENCES</h1>
        <div className={styles.circle}></div>
        <h1>CONTENT</h1>
        <div className={styles.circle}></div>
        <h1>ENVIRONMENTS</h1>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.container}>
        <h1>EXPERIENCES</h1>
        <div className={styles.circle}></div>
        <h1>CONTENT</h1>
        <div className={styles.circle}></div>
        <h1>ENVIRONMENTS</h1>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.container}>
        <h1>EXPERIENCES</h1>
        <div className={styles.circle}></div>
        <h1>CONTENT</h1>
        <div className={styles.circle}></div>
        <h1>ENVIRONMENTS</h1>
        <div className={styles.circle}></div>
      </div>
    </div>
  )
}

export default Carousel