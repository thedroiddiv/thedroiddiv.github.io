import { ReactNode } from 'react'


type Props = {
  children: ReactNode
}

export const Section = ({ children }: Props) => {
  return (
    <section className={`min-h-screen bg-black text-white`}>
      {children}
    </section>
  )
}