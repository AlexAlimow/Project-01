import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={s.container}>
      <NavLink to="/" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
        Home
      </NavLink>
      <NavLink to="/counter" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
        Counter
      </NavLink>
      <NavLink to="/nationalize" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
        Nationalize
      </NavLink>
      <NavLink to="/space-mission" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
        Space Mission
      </NavLink>
      <NavLink to="/gender-reveal" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
        Gender Reveal
      </NavLink>
      <NavLink to="/ideal-weight-calculator" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
        Ideal Weight
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
        About
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
        Contact
      </NavLink>
      <NavLink to="/profile/info" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
        Profile
      </NavLink>
    </nav>
  );
}