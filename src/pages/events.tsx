import EventPage from '@/components/Events/EvenstPage'
import Layout from '@/components/layout/Layout'
import { NextPage } from 'next'

const events: NextPage = () => {
	return (
		<Layout title='Мероприятия'>
			<EventPage />
		</Layout>
	)
}

export default events
