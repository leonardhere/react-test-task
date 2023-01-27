import React from 'react'
import LeftMenu from '../MainMenu'
import MainPlace from '../MainPlace/MainPlace'
import styles from './MainPage.module.css'

const Home= () => {
  return (
    <div className={styles.containerPage}>
      <LeftMenu/>
      <MainPlace title="Это главная страница"/>
    </div>
  )
}

export default Home