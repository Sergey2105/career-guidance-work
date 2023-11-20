import Layout from '@/components/layout/Layout'
import HomePage from '@/components/screens/Home/HomePage'
import { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<Layout title='Главная'>
			<HomePage />
		</Layout>
	)
}

export default Home
