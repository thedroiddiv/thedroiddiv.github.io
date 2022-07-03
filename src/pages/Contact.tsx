import ContactForm from '../components/ContactForm'
import { Section } from '../components/Section'

function Contact() {
  return (
    <Section title='CONTACT 📱 ME'>
      <div className="flex flex-col items-center md:flex-row justify-center gap-8 flex-wrap">

        <div className="md:w-64 w-96 flex-col items-center">
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

        <div className="w-96">
          <ContactForm />
        </div>

        <iframe
          className="md:w-64 w-96 h-96 rounded-lg"
          title="Location"
          src="https://www.google.com/maps/embed/v1/place?q=iiit+naya+raipur&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>

      </div>


    </Section>
  )
}

export default Contact