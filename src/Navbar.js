import { Children } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    const path = window.location.pathname
    return (
        <nav className= "nav" >
            <Link to = "/" className = "site-title"> Sudoku </Link>
            <ul>
                <CustomeLink to ="/program"> Program </CustomeLink>
                <CustomeLink to ="/about"> About </CustomeLink>
            </ul>
        </nav>
    )
}

function CustomeLink({to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className= {isActive ? "active" : ""}>
            <Link to={to}>
                {children}
            </Link>
        </li>
    )
}