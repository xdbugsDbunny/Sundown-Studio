import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerSection} >
        <div className={styles.footerContent}>
            <div className={styles.linkBox}>
                <h4>Work</h4>
                <h4>Studio</h4>
                <h4>Contact</h4>
            </div>
            <div className={styles.contactBox} >
                <p>Get industry insights and creative inspiration straight to your inbox.</p>
            </div>
        </div>
        <h1>Sundown</h1>
        <div className={styles.footerBottom} >
            <h3>Copyright © Sundown Studio</h3>
            <h3>Brooklyn, NY</h3>
            <h3>Instagram</h3>
            <h3>LinkedIn</h3>
        </div>
    </div>
  )
}

export default Footer