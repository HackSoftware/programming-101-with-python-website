import React from 'react'

import pythonImage from './python.png'
import styles from './styles.module.css'

export default () => {
  return (
    <img
      src={pythonImage}
      width="120"
      className={styles.PythonLogo}
      alt="Python logo"
    />
  )
}
