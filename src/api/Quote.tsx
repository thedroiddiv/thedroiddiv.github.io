export type Quote = {
    id: string;
    author: string;
    en: string;
}

export const getRandomQuote = async () : Promise<Quote> => {
    const quote = await fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
    return quote.json()
}