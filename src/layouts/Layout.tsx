import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import s from "./Layout.module.css";

export default function Layout() {
    return (
        <div className={s.page}>
            <header>
                <NavBar />
            </header>

            <div className={s.container}>
                <Outlet />
            </div>

            <footer className={s.footer}>
                Footer
            </footer>
        </div>
    );
}