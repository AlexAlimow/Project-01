import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import s from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <NavBar />
      </header>

      <main className={s.container}>
        <div className={s.content}>
          <Outlet />
        </div>
      </main>

      <footer className={s.footer}>© 2026</footer>
    </div>
  );
}
