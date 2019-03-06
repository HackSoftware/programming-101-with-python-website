import React from 'react'

import styles from './styles.module.css'

import nemetschek from './images/nemetschek.jpg'
import industria from './images/industria.png'
import hacksoft from './images/hacksoft.png'

export default () => {
  return (
    <div className={styles.Container}>
      <a href="https://www.nemetschek.bg/">
        <img src={nemetschek} alt="Nemetscheck Bulgaria" />
      </a>
      <a href="https://www.industria.tech">
        <img src={industria} alt="Industria" />
      </a>
      <a href="https://www.hacksoft.io/">
        <img src={hacksoft} alt="HackSoft" />
      </a>
    </div>
  )
}
