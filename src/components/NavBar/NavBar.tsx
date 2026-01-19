import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import clsx from "clsx";
import { ROUTES as R } from "../../shared/routes";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(s.link, isActive && s.active);

export default function NavBar() {
  return (
    <nav className={s.container}>
      <NavLink to={R.HOME} className={navLinkClass}>
        Home
      </NavLink>
      <NavLink to={R.COUNTER} className={navLinkClass}>
        Counter
      </NavLink>
      <NavLink to={R.NATIONALIZE} className={navLinkClass}>
        Nationalize
      </NavLink>
      <NavLink to={R.SPACE_MISSION} className={navLinkClass}>
        Space Mission
      </NavLink>
      <NavLink to={R.GENDER_REVEAL} className={navLinkClass}>
        Gender Reveal
      </NavLink>
      <NavLink to={R.IDEAL_WEIGHT_CALCULATOR} className={navLinkClass}>
        Ideal Weight
      </NavLink>
      <NavLink to={R.ABOUT} className={navLinkClass}>
        About
      </NavLink>
      <NavLink to={R.CONTACT} className={navLinkClass}>
        Contact
      </NavLink>
      <NavLink to={R.PROFILE_INFO} className={navLinkClass}>
        Profile
      </NavLink>
      <NavLink to={R.USERSPAGE} className={navLinkClass}>
        Users
      </NavLink>
    </nav>
  );
}
