import React from 'react'
import './MailItem.css'

const MailItem = (mail) => {
	return (
		<div className='mail'>
			<span className='mail-title'>{mail.title}</span>
			<span className='sender'>&lt; {mail.sender} &gt;</span>
			<div className='short-mail'>{mail.mail.slice(0, 60).trimEnd()}</div>
		</div>
	)
}

export default MailItem