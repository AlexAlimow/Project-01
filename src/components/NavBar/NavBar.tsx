import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";

export default function NavBar() {
    return (
        <nav className={s.container}>
            <NavLink to={"/"} className={s.link}>
                Home
            </NavLink>
            <NavLink to={"/counter"} className={s.link}>
                Counter
            </NavLink>
            <NavLink to={"/nationalize"} className={s.link}>
                Nationalize
            </NavLink>
            <NavLink to={"/space-mission"} className={s.link}>
                Space Mission
            </NavLink>
            <NavLink to={"/gender-reveal"} className={s.link}>
                Gender Reveal
            </NavLink>
            <NavLink to={"/ideal-weight-calculator"} className={s.link}>
                Ideal Weight Calculator
            </NavLink>


        </nav>
    );
}
