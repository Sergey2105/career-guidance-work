import Layout from '@/components/layout/Layout'
import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import notFound from '../../public/404.png'

const NotFound: NextPage = () => {
	return (
		<Layout title='NotFound'>
			<Image src={notFound} alt='NotFound' />
		</Layout>
	)
}
export default NotFound
