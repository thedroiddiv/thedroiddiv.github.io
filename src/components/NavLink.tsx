import React from 'react'
import { Link } from 'react-router-dom'

interface NavLinkProps {
    to: string,
    className?: string,
    children?: React.ReactNode;
}

function NavLink({ to, className, children }: NavLinkProps) {
    return (
        <Link to={to} className={`${className} cursor-pointer`}>
            {children}
        </Link>
    )
}

export default NavLink
