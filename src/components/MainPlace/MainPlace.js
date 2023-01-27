import React from 'react'
import styles from './MainPlace.module.css'

const MainPlace = (props) => {
  return (
    <div className={styles.mainPlaceContainer}>
        <h1>{props.title}</h1>
    </div>
  )
}

export default MainPlace