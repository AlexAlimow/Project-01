import { Routes, Route } from "react-router-dom";
import Counter from "../components/Counter/Counter";
import GenderReveal from "../components/GenderReveal/GenderReveal";
import IdealWeightCalculator from "../components/IdealWeightCalculator/IdealWeightCalculator";
import { NationalityDetector } from "../components/NationalityDetector/NationalityDetector";
import SpaceMissionForm from "../components/SpaceMissionForm/SpaceMissionForm";
import Layout from "../layouts/Layout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProfileInfo from "../pages/Profile/ProfileInfo";
import ProfileLayout from "../pages/Profile/ProfileLayout";
import ProfileSettings from "../pages/Profile/ProfileSettings";
import { ROUTES as R } from "../shared/routes";
import CarPage from "../pages/CarPage/CarPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import UserPage from "../pages/UserPage/UserPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={R.HOME} element={<Layout />}>
        <Route index element={<Home />} />

        <Route path={R.COUNTER} element={<Counter />} />
        <Route path={R.NATIONALIZE} element={<NationalityDetector />} />
        <Route path={R.SPACE_MISSION} element={<SpaceMissionForm />} />
        <Route path={R.GENDER_REVEAL} element={<GenderReveal />} />
        <Route
          path={R.IDEAL_WEIGHT_CALCULATOR}
          element={<IdealWeightCalculator />}
        />
        <Route path={R.ABOUT} element={<About />} />
        <Route path={R.CONTACT} element={<Contact />} />

        {/* Собственный layout */}
        <Route path={R.PROFILE} element={<ProfileLayout />}>
          <Route path={R.PROFILE_INFO} element={<ProfileInfo />} />
          <Route path={R.PROFILE_SETTINGS} element={<ProfileSettings />} />
        </Route>

        <Route path={R.PRODUCT(":id")} element={<ProductPage />} />
        <Route path="/cars/:model" element={<CarPage />} />
        <Route path={R.USERSPAGE} element={<UsersPage />} />
        <Route path={R.USER(":id")} element={<UserPage />} />

        {/* 404 */}
        <Route path={R.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
}
