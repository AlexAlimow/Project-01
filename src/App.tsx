import "./App.css";

import Goodbye from "./components/Goodbye/Goodbye";
import Counter from "./components/Counter/Counter";
import Tool from "./components/Tool/Tool";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import IdealWeightCalculator from "./components/IdealWeightCalculator/IdealWeightCalculator";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";


function App() {
  const johnDoe = {
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "John Doe",
    description: "Frontend developer & QA Engineer",
  };

  return (
    <>
      <h1>Hello Vite + React!</h1>
      {/* <Greetings name="Alex" />
      <Greetings name="Alisher" /> */}
      <GenderReveal />
      <SpaceMissionForm />
      
      <Counter />
      <Tool />
      <ProfileCard {...johnDoe} />
      <IdealWeightCalculator />
      <Goodbye familyName="Smith" score={92} />
      <Goodbye familyName="Johnson" />
    </>
  );
}

export default App;

// Задание:
//создайте компонент goodbye 
// компонент должен возвращать параметр с текстом "Goodbye, {family_name}"
// соответственно у компонента должен быть пропс familyNamme 
// Создайте два элемента с разными фиамилиями 