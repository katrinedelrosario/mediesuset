import { NavLink } from "react-router-dom"
import style from './navbar.module.scss'
import logo from '../../assets/Logo.png'

export const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div>
                <img src={logo} alt="Mediesuset-logo" />
                <h4>4-7 juli 2022</h4>
            </div>

            <ul>
                <li>
                    <NavLink to='/forside'>Forside</NavLink>
                </li>
                <li>
                    <NavLink to='/events'>events</NavLink>
                </li>
                <li>
                    <NavLink to='/camps'>camps</NavLink>
                </li>
                <li>
                    <NavLink to='/billetter'>billetter</NavLink>
                </li>
                <li>
                    <NavLink to='/info'>info</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>login</NavLink>
                </li>
            </ul>

        </nav>
    )
}