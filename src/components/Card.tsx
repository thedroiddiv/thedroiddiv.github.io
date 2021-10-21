import React from 'react'

interface CardProps {
    className?: string;
    cardImage?: string;
    cardTitle?: string;
    cardDesc?:string;
    children?: React.ReactNode;
}

function Card({className, cardImage, cardTitle, cardDesc, children}:CardProps) {
    return (
        <div className={`${className} card w-80 overflow-hidden rounded-md shadow-md flex flex-col`}>
            <img className="max-44 object-cover rounded-m" src={`${cardImage}`} alt="" />
            <div className="content p-3">
                <h2 className="text-xl">{cardTitle}</h2>
                <p className="text-sm">{cardDesc}</p>
                {children}
            </div>
        </div>
    )
}

export default Card
