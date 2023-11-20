import { FC, PropsWithChildren } from 'react'
import Header from './header'
import Footer from './footer'
import { IMeta } from '../seo/meta.interface'
import Meta from '../seo/Meta'

const Layout: FC<PropsWithChildren<IMeta>> = ({
	title,
	description,
	children,
}) => {
	return (
		<Meta title={title} description={description}>
			<Header />
			<main>{children}</main>
			<Footer />
		</Meta>
	)
}
export default Layout
