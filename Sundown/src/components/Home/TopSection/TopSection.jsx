import React from 'react'
import styles from './TopSection.module.css'

const TopSection = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.leftWrapper}>
        <h3>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.
        </h3>
      </div>
      <div className={styles.rightWrapper}>
        <h1>
          SPACES <br/>
          THAT <br/>
          INSPIRE
        </h1>
      </div>
    </div>
  )
}

export default TopSection