import React from 'react'

import styles from './styles.module.css'
import rosi from './rosi.jpg'
import radoslav from './radoslav.jpg'

export default () => {
  return (
    <div className={styles.Container}>
      <div className={styles.TeacherContainer}>
        <img className={styles.TeacherImage} src={rosi} alt="Ivaylo" />
        <div className={styles.TeacherInfo}>
          <p className={styles.TeacherName}>Rositsa Zlateva</p>
          <ul>
            <li>Full Stack Python Developer at HedgeServ.</li>
            <li>4 years of experience writing backend with Python.</li>
            <li>Taught 2 previous Python 101 courses.</li>
          </ul>
        </div>
      </div>
      <div className={styles.TeacherContainer}>
        <img className={styles.TeacherImage} src={radoslav} alt="Radoslav" />
        <div className={styles.TeacherInfo}>
          <p className={styles.TeacherName}>Radoslav Georgiev</p>
          <ul>
            <li>CEO at HackSoft.</li>
            <li>Using Python and Django everday in a big single page project.</li>
            <li>
              8 years of experience with Python and backend technologies.
            </li>
            <li>
              6 years of experience teaching different courses, including
              Python, JavaScript and Haskell.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
