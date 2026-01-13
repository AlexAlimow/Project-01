import { NavLink, Outlet } from "react-router-dom";
import s from "./ProfileLayout.module.css"; // создадим отдельный CSS

export default function ProfileLayout() {
  return (
    <section className={s.container}>
      <h2>Личный кабинет</h2>

      <nav className={s.nav}>
        <NavLink to="info" className={({ isActive }) => isActive ? s.active : ""}>
          Информация
        </NavLink>
        <NavLink to="settings" className={({ isActive }) => isActive ? s.active : ""}>
          Настройки
        </NavLink>
      </nav>

      <div className={s.outlet}>
        <Outlet />
      </div>
    </section>
  );
}