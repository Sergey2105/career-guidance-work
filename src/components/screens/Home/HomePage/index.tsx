import React, { useState } from 'react'
import styles from './index.module.scss'

const HomePage = () => {
	return (
		<div className={styles['home']}>
			<div className={styles['home__main']}>
				<div className={styles['home__wrapper']}>
					{/* <p>Твой календарь(список) событий, твой гид в мире возможностей!</p> */}
					<p className={styles['home__motto']}>
						Твой календарь мероприятий, твой путь к профессиональному росту!
					</p>
				</div>
			</div>
			<div className={styles['home__second']}>
				<div className={styles['home__wrapper']}>
					<p className={styles['home__motto__second']}>
						Воплоти свой потенциал!
					</p>
				</div>
			</div>
		</div>
	)
}
export default HomePage
