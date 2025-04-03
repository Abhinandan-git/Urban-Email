import React from 'react'
import NavBar from '../components/NavBar'
import MailEnvelope from '../components/MailEnvelope'
import Footer from '../components/Footer'

const Inbox = () => {
	return (
		<div className='inbox'>
			<NavBar />
			<MailEnvelope />
			<Footer />
		</div>
	)
}

export default Inbox