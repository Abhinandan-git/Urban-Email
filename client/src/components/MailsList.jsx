import React, { useEffect, useState } from 'react'
import MailItem from './MailItem'
import axios from 'axios'

const MailsList = () => {
	const [mails, setMails] = useState([]);

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/inbox').then((res) => setMails(res.data)).catch((err) => console.error(err))
	}, [])


	return (
		<div className="products">
			{mails.map((mail, idx) => {
				return <MailItem {...mail} key={idx}></MailItem>
			})}
		</div>
	)
}

export default MailsList