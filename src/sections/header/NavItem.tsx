
interface Props {
    children?: React.ReactNode;
}

export const NavItem: React.FC<Props> = ({ children }) => {
    return (

        <li className="rounded-lg px-4 py-2 cursor-pointer transition-all hover:decoration-wavy hover:underline underline-offset-8 text-2xl">
            {children}
        </li>

    )
}