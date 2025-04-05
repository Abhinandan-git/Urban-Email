import React, { useEffect, useState } from 'react'
import MailItem from './MailItem'
import axios from 'axios'
import './MailsList.css'

const MailsList = () => {
	const [mails, setMails] = useState([]);

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/inbox').then((res) => setMails(res.data)).catch((err) => console.error(err))
	}, [])


	return (
		<div className="mails">
			{mails.map((mail, idx) => <MailItem {...mail} key={idx}></MailItem> )}
		</div>
	)
}

export default MailsList