import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from './index.module.scss'

const Footer: FC = () => {
	const pathname = usePathname()
	return (
		<footer className={styles['footer']}>
			<div className={styles['footer__wrapper']}>
				<div className={styles['footer__information']}>
					<div className={styles['footer__detail']}>
						<p>Explore</p>
						<ul className={styles['footer__information__link']}>
							<li>
								<Link
									href='/'
									className={`${pathname === '/' ? styles.active : ''} ${
										styles['link']
									}`}
								>
									Tutorial
								</Link>
							</li>
							<li>
								<Link
									href='/'
									className={`${pathname === '/' ? styles.active : ''} ${
										styles['link']
									}`}
								>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									href='/'
									className={`${pathname === '/' ? styles.active : ''} ${
										styles['link']
									}`}
								>
									Terms
								</Link>
							</li>
						</ul>
					</div>
					<div className={styles['footer__detail']}>
						<p>Socialize</p>
						<ul className={styles['footer__information__link']}>
							<li>
								<Link
									href='/'
									className={`${pathname === '/' ? styles.active : ''} ${
										styles['link']
									}`}
								>
									Telegram
								</Link>
							</li>
							<li>
								<Link
									href='/'
									className={`${pathname === '/' ? styles.active : ''} ${
										styles['link']
									}`}
								>
									OK
								</Link>
							</li>
							<li>
								<Link
									href='/'
									className={`${pathname === '/' ? styles.active : ''} ${
										styles['link']
									}`}
								>
									VK
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
