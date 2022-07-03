import { useEffect, useRef, useState } from 'react'
import BIRDS from 'vanta/dist/vanta.net.min';
import Chip from '../components/Chip';
import { getRandomJoke, Joke } from '../api/Joke';
import { useVantaNet } from '../hooks/Vanta';

type HomeState = {
  joke?: Joke
  loading: boolean
}

const Home = () => {
  const [{ joke, loading }, setUiState] = useState<HomeState>({ loading: true })
  useEffect(() => {
    getRandomJoke().then(res => {
      setUiState({
        joke: res[0],
        loading: false
      })
    }).catch(err => console.log(err))
  }, [])
  const myRef = useVantaNet()
  return (
    <section ref={myRef} className="min-h-screen text-white text-center p-8 flex flex-col-reverse items-center justify-around md:flex-row md:text-left md:p-24">
      <div className="md:w-1/2">
        <h4 className='text-3xl font-bold text-green-500'>HI THERE!</h4>
        <h2 className="text-5xl text-white mt-12">I am Divyansh,<br /><span className='font-bold'>an Android Developer</span></h2>
        <p className="mt-3">{joke?.question}</p>
        <p>{joke?.punchline}</p>
        <Chip className='text-2xl mt-12' text="Download Resume" />
      </div>
      <div className="w-2/3 md:w-1/2">
        <img src="assets/programmer.svg" alt="" />
      </div>
    </section>
  )
}
export default Home