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
    <section className={`${className} p-4 md:p-24`}>
      <h3 className='my-12 text-center text-4xl font-bold'>{arr?.join(' ').toUpperCase()}<span className='text-green-600'> {last?.toUpperCase()}</span></h3>
      {children}
    </section>
  )
}