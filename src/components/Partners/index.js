import React from 'react'

import styles from './styles.module.css'

import nemetschek from './images/nemetschek.jpg'
import industria from './images/industria.png'
import hacksoft from './images/hacksoft.png'
import hedgeserv from './images/hedgeserv.png'
import acronis from './images/acronis.png'

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
      <a href="https://www.hedgeserv.com/career/">
        <img src={hedgeserv} alt="HedgeServ" />
      </a>
      <a href="https://www.acronis.com/en-eu/">
        <img src={acronis} alt="Acronis" />
      </a>
    </div>
  )
}
