import React from 'react'
import './MailEnvelope.css'
import MailsList from './MailsList'
import Mail from './Mail'

const MailEnvelope = () => {
	return (
		<div className='mail-envelope'>
			<div className="mail-flex-container">
				<MailsList />
				<Mail />
			</div>
		</div>
	)
}

export default MailEnvelope