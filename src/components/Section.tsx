import { ReactNode } from 'react'


type Props = {
  title?: string,
  children: ReactNode,
  className?: string
}

export const Section = ({ title, children, className }: Props) => {
  const arr = title?.split(' ')
  const last = arr?.pop()
  return (
    <section className={`${className} p-12 md:p-24`}>
      <h3 className='text-center text-4xl font-bold'>{arr?.join(' ').toUpperCase()}<span className='text-green-600'> {last?.toUpperCase()}</span></h3>
      {children}
    </section>
  )
}