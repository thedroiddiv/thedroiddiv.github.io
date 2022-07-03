import { useEffect, useRef, useState } from 'react'
import BIRDS from 'vanta/dist/vanta.net.min';


const Home = () => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(BIRDS({
          el: myRef.current,
          yOffset: 0.20,
          color: 0x257d5d,
          backgroundColor: 0x0,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          maxDistance: 18.00

        }))
      }
      return () => {
        // if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    return (
      <section ref={myRef} className="min-h-screen text-white p-8 flex flex-col items-center justify-around md:flex-row">
        <div className="md:w-3/6">
          <h4 className='text-3xl font-bold text-green-500'>HI THERE!</h4>
          <h2 className="text-5xl text-white mt-6">I am Divyansh, <span className='font-bold'>an Android Developer</span></h2>
          <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut, aliquid esse doloremque aspernatur ut magni ad temporibus iusto veritatis.</p>
          <button className='px-4 py-2 w-48 border border-green-500 rounded-full hover:bg-green-500 transition mt-4'>Download Resume</button>
        </div>
        <div className="flex mt-8 justify-center rounded-full md:w-96 md:h-96">
          <img className='rounded-full' src="https://picsum.photos/400/400" alt=""  />
        </div>
      </section>
    )
  }
export default Home