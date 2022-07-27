import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Chip from '../components/Chip';
import { getRandomJoke, Joke } from '../data/Joke';
import { resumeUrl } from '../data/Resume';
import { useVantaGlobe } from '../hooks/Vanta';

type HomeState = {
  joke?: Joke;
  loading: boolean;
};

const Home = () => {
  const [{ joke, loading }, setUiState] = useState<HomeState>({
    loading: true,
  });
  useEffect(() => {
    getRandomJoke()
      .then((res) => {
        setUiState({
          joke: res[0],
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  const myRef = useVantaGlobe();
  return (
    <section
      ref={myRef}
      className="md:min-h-screen flex flex-col-reverse items-center justify-around md:flex-row md:text-left md:p-24"
      id="home"
    >
      <div className="md:w-1/2 backdrop-blur rounded-lg md:backdrop-blur-none rounded-lg p-4 m-2">
        <h4 className="text-3xl md:text-5xl font-bold text-green-500">
          HI THERE!
        </h4>
        <h2 className="text-3xl md:text-6xl text-white md:mt-12">
          I am Divyansh,
          <br />
          <span className="font-bold">an Android Developer</span>
        </h2>
        {loading && <ReactLoading type={'bars'} color="#fff" />}
        <p className="mt-3">{joke?.question}</p>
        <p>{joke?.punchline}</p>
        <Chip
          href={resumeUrl}
          className="text-2xl mt-12"
          text="Download Resume"
        />
      </div>
      <div className="w-5/6 md:w-1/2">
        <img src="assets/programmer.svg" alt="" />
      </div>
    </section>
  );
};
export default Home;
