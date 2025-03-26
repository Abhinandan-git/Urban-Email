"use client"
// import axios from "axios";
// import { useState, useEffect } from "react";

export default async function Example() {
  // const server_host = 'http://127.0.0.1:8000';
  
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [mailList, setMailList] = useState([]);
  // const [mail, setMail] = useState({"response": ""});

  // useEffect(() => {
  //   axios.post(`${server_host}/mails`).then(response => {
  //     setMailList(response.data);
  //   }).catch(error => {console.log(error);});
  // }, []);
  
  // const sendPrompt = async (event: any) => {
  //   event.preventDefault();
  //   const form = event.target as HTMLFormElement;
  //   const prompt = form.elements.namedItem("prompt") as HTMLInputElement;
  //   const prompt_data = prompt.value.trim();
    
  //   await axios.post(`${server_host}/generate`, { prompt_data }).then(response => {
  //     setMail(response.data);
  //   });
  // }

  const server_host = '';

  return (
    <form className="w-screen">
      <div className="flex h-screen items-center justify-center flex-col align-middle">
        <div className="space-y-12 w-xl">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">Your Email AI companion.</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="to_people" className="block text-sm/6 font-medium text-gray-900">
                  To:
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="to_people"
                      name="to_people"
                      type="text"
                      placeholder="Who recieves the mail..."
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="subject" className="block text-sm/6 font-medium text-gray-900">
                  Subject:
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Whats the mail about..."
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="mail" className="block text-sm/6 font-medium text-gray-900">
                  Your Email
                </label>
                <div className="mt-2">
                  <textarea
                    id="mail"
                    name="mail"
                    rows={3}
                    className="resize-none block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    defaultValue={''}
                    placeholder="Your mail..."
                  />
                </div>
                <p className="mt-3 text-sm/6 text-gray-600">Write your mail or wait for your companion.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6 w-xl">
          <button type="button" className="text-sm/6 font-semibold text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  )
};