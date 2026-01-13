import { BrowserRouter, Route, Routes } from "react-router-dom";

import Counter from "./components/Counter/Counter";
import IdealWeightCalculator from "./components/IdealWeightCalculator/IdealWeightCalculator";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import { NationalityDetector } from "./components/NationalityDetector/NationalityDetector";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./layouts/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ProfileLayout from "./pages/Profile/ProfileLayout";
import ProfileInfo from "./pages/Profile/ProfileInfo";
import ProfileSettings from "./pages/Profile/ProfileSettings";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="counter" element={<Counter />} />
          <Route path="nationalize" element={<NationalityDetector />} />
          <Route path="space-mission" element={<SpaceMissionForm />} />
          <Route path="gender-reveal" element={<GenderReveal />} />
          <Route
            path="ideal-weight-calculator"
            element={<IdealWeightCalculator />}
          />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* 🧩 Собственный layout */}
          <Route path="profile" element={<ProfileLayout />}>
            <Route path="info" element={<ProfileInfo />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

