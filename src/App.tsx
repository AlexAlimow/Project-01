import { BrowserRouter, Route, Routes } from "react-router-dom";

import Counter from "./components/Counter/Counter";
import IdealWeightCalculator from "./components/IdealWeightCalculator/IdealWeightCalculator";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import { NationalityDetector } from "./components/NationalityDetector/NationalityDetector";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./layouts/Layout";


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/gender-reveal" element={<GenderReveal />} />
            <Route path="/nationalize" element={<NationalityDetector />} />
            <Route path="/space-mission" element={<SpaceMissionForm />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/ideal-weight-calculator" element={<IdealWeightCalculator />} />
            <Route path="*" element={<NotFound />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

