'use client'
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

const ContactForm = ({handleInputClick}: any) => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
    name: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contact',  
      { method: "POST", 
        headers: { "Content-Type": "application/json"}, 
        body: JSON.stringify(formData), })
      setStatus('success') 
      if (res) {
      toast("Your message was sent successfully")}
      setFormData({ email: '', subject: '', message: '' , name: ''})
    } catch (err) {
      setStatus('error')
      toast('Error sending email. Please try again later.')
     
    }
  }

  return (
    

  <div className=" px-4 mx-auto max-w-screen-md h-fit z-100">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black dark:text-white">Let's Chat!</h2>
      <form onSubmit={handleSubmit} className="w-full">
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Your email</label>
         <input className='shadow-sm bg-gray-50 border border-gray-300  text-black dark:text-white  text-sm rounded-md focus:ring-red-300 focus:border-red-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light required'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
        <br />
        <div className='flex space-x-3 mx-auto'>
      <div className='w-full'>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-black dark:text-gray-100">Your Name</label>
              <input className='shadow-sm bg-gray-50 border border-gray-300  text-black dark:text-white  text-sm rounded-md focus:ring-red-300 focus:border-red-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light required'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        
        />
    </div>
      <br className='hidden md:block'/>
      <div className='w-full'>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black dark:text-gray-100">Subject</label>
              <input className='shadow-sm bg-gray-50 border  border-gray-300 text-black dark:text-white text-sm rounded-md focus:ring-red-300 focus:border-red-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light required'
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
    </div></div>
      <br />
      <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-black dark:text-gray-100">Your message</label>
              <textarea className='shadow-sm bg-gray-50 border h-full border-gray-300  text-black dark:text-white text-sm rounded-md focus:ring-red-300 focus:border-red-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light required'
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <br />
      <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white dark:text-black rounded-lg dark:bg-white bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      {status === 'success' && <p>Email sent!</p>}
      {status === 'error' && <p>Error sending email, please try again.</p>}
      </form>
  </div>  
  )
}

export default ContactForm
