import { NavLink, Outlet } from "react-router-dom";
import s from "./ProfileLayout.module.css"; // создадим отдельный CSS
import clsx from "clsx";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(isActive && s.active);

export default function ProfileLayout() {
  return (
    <section className={s.container}>
      <h2>Личный кабинет</h2>

      <nav className={s.nav}>
        <NavLink to="info" className={navLinkClass}>
          Информация
        </NavLink>
        <NavLink to="settings" className={navLinkClass}>
          Настройки
        </NavLink>
      </nav>

      <div className={s.outlet}>
        <Outlet />
      </div>
    </section>
  );
}
