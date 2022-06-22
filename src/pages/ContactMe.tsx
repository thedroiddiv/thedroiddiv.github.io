import { useState } from "react";
import { motion } from "framer-motion";

function ContactMe() {
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
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{}}
      transition={{ duration: 0.3 }}
    >
      <div className="md:grid md:grid-cols-3 w-full p-10 md:space-x-10 space-y-10">
        <div className="p-10">
          <h2 className="text-xl text-white font-medium ">Divyansh Kushwaha</h2>
          <p className="text-sm">
            Ramanujan House, IIIT Naya Raipur Sector 24, Naya Raipur, Chhattisgarh
            493661 <br /> INDIA
          </p>
          <br />
          <p>
            <span className="font-medium">Email:</span>
            <br /> kushwaha.divyansh.dxn@gmail.com
          </p>
          <p>
            <span className="font-medium">Mobile:</span>
            <br />
            +91-8354931770
          </p>
        </div>

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
              className="w-full bg-white bg-opacity-20 rounded  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
              className="w-full bg-white bg-opacity-20 rounded  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
              className="w-full bg-white bg-opacity-20 rounded text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="text-white p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-800 hover:to-blue-800 rounded text-lg"
          >
            Submit
          </button>
        </form>

        <div className="rounded-lg overflow-hidden bg-black bg-opacity-20">
          <iframe
            className="w-full h-full"
            title="Location"
            src="https://www.google.com/maps/embed/v1/place?q=iiit+naya+raipur&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactMe;
