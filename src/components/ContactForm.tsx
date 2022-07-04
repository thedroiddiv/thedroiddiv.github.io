import { useState } from 'react'
import Chip from './Chip';

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setTimeout(() => {
            setName("");
            setEmail("");
            setMessage("");
        }, 1000)
    };

    return (
        <form name="contact" className="flex flex-col">
            <div className="mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    className="w-full bg-white rounded bg-opacity-10 text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    className="w-full bg-white bg-opacity-10 rounded  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="text-sm text-gray-400">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    className="w-full bg-white bg-opacity-10 rounded text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <Chip onClick={e => handleSubmit(e)} text='Submit'/>
        </form>
    )
}

export default ContactForm