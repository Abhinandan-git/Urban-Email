import React from 'react'

const MailItem = (mail) => {
	return (
		<div className='mail'>
			<h1>{mail.sender}</h1>
			<h2>{mail.reciever}</h2>
			<h2>{mail.title}</h2>
			<p>{mail.mail}</p>
		</div>
	)
}

export default MailItem