"use client"
import axios from 'axios';
import { FormEvent, useEffect, useState } from "react";

export default function Page() {
  const server_host = 'http://127.0.0.1:8000';
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mailList, setMailList] = useState([]);
  const [mail, setMail] = useState({"response": ""});

  useEffect(() => {
    axios.post(`${server_host}/mails`).then(response => {
      setMailList(response.data);
    }).catch(error => {console.log(error);});
  }, []);
  
  const sendPrompt = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const prompt = form.elements.namedItem("prompt") as HTMLInputElement;
    const prompt_data = prompt.value.trim();
    
    await axios.post(`${server_host}/generate`, { prompt_data }).then(response => {
      setMail(response.data);
    });
  }

  return (
    <main>
      <form onSubmit={(event) => sendPrompt(event)} method="post">
        <input type="text" name="prompt" id="prompt" />
        <button type="submit">Submit prompt</button>
      </form>
    </main>
  )
}