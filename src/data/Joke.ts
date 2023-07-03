export type Joke = {
  question: string;
  punchline: string;
};

export const getRandomJoke = async (): Promise<Joke[]> => {
  const quote = await fetch(
    'https://backend-omega-seven.vercel.app/api/getjoke',
  );
  return quote.json();
};
