import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import styles from './index.module.scss'

const Header: FC = () => {
	const pathname = usePathname()
	return (
		<header className={styles['header']}>
			<div className={styles['header__wrapper']}>
				<div className={styles['header__menu']}>
					<ul>
						<li>
							<Link
								href='/'
								className={`${pathname === '/' ? styles.active : ''} ${
									styles['link']
								}`}
							>
								Главная
							</Link>
						</li>
						<li>
							<Link
								href='/events'
								className={`${pathname === '/events' ? styles.active : ''} ${
									styles['link']
								}`}
							>
								Мероприятия
							</Link>
						</li>
						<li>
							<Link
								href='/contact'
								className={`${pathname === '/contact' ? styles.active : ''} ${
									styles['link']
								}`}
							>
								Контакты
							</Link>
						</li>
					</ul>
					<FaUserAlt className={styles['header__icon']} />
				</div>
			</div>
		</header>
	)
}
export default Header
