import { useState } from 'react'
import { motion } from 'framer-motion';


function ContactMe() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <motion.div
            initial={{ scaleX: 0, }}
            animate={{ scaleX: 1 }}
            exit={{}}
            transition={{ duration: 0.3 }}
        >

            <div className="flex flex-col md:flex-row w-full p-10 md:space-x-10">

                <div className="rounded-lg  overflow-hidden bg-black bg-opacity-20">
                    <iframe
                        className="lg:min-w-96 lg:min-h-96 w-full h-full"
                        title="Location"
                        src="https://www.google.com/maps/embed/v1/place?q=iiit+naya+raipur&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                    </iframe>
                </div>


                <form
                    name="contact"
                    onSubmit={e => { }}
                    className="flex flex-col lg:w-96 lg:h-96">

                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white bg-opacity-20 rounded  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white bg-opacity-20 rounded  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white bg-opacity-20 rounded text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-800 hover:to-blue-800 rounded text-lg">
                        Submit
                    </button>
                </form>

            </div>
        </motion.div>
    )
}

export default ContactMe
