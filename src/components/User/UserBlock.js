import React from 'react'
import styles from './UserBlock.module.css'

const UserBlock = ({name, division, position}) => {
  return (
    <div className={styles.userblock}>
        <div>{name}</div>
        <div>{position}, {division}</div>
    </div>
  )
}

export default UserBlock