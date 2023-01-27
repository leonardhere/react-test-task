import React from 'react'
import {Link} from 'react-router-dom'
import UserBlock from '../User/UserBlock'
import styles from './Header.module.css'

const Header = () => {
  const UserProps = {name: 'Леонард', division: 'IT', position: 'frontend'}
  return (
    <div className={styles.headerContainer}>
        <ul className={styles.headerContainerLinks}>
          <li className={styles.containerLinksItem}>
            <Link to="/">Главная</Link>
          </li>
          <li className={styles.containerLinksItem}>
            <Link to="/taskspage">Задачи</Link>
          </li>
          <li className={styles.containerLinksItem}>
            <Link to="/directory">Справочники</Link>
          </li>
        </ul>
        <UserBlock {...UserProps}/>
    </div>
  )
}

export default Header