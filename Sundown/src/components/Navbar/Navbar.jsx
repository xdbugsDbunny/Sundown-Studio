import React from 'react'
import styles from './Navbar.module.css'


const Navbar = () => {
  return (
    <>
        <nav className={styles.navbar}>
            <img src='https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg' alt='logo' />
            <div className={styles.navButtons} >
                <h4><a href='#' >Work</a></h4>
                <h4><a href='#' >Studio</a></h4>
                <h4><a href='#' >Contact</a></h4>
            </div>
        </nav>
    </>
  )
}

export default Navbar