import React from 'react'

interface ChipProps {
    className?:string,
    children?:React.ReactNode;
}

function Chip({className,children}:ChipProps) {
    return (
        <div className={`${className} flex justify-center items-center text-white rounded-xl px-4 py-2 bg-black  bg-clip-padding bg-opacity-10`}>
            {children}
        </div>
    )
}

export default Chip
