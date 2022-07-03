import { ReactNode } from 'react'

type Props = {
    text: string
    children?: ReactNode,
    className?: string
}

const Chip = ({ text, children, className }: Props) => {
    return (
        <button className={`${className} px-4 py-2 border border-green-600 rounded-full hover:bg-green-600 transition mt-4`}>
            {text}
            {children}
        </button>
    )
}

export default Chip