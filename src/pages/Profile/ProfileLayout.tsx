import { NavLink, Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div>
      <h2>Личный кабинет</h2>

      <nav>
        <NavLink to="info">Информация</NavLink> |{" "}
        <NavLink to="settings">Настройки</NavLink>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}