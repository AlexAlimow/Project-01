import "./App.css";

import Goodbye from "./components/Goodbye/Goodbye";
import Counter from "./components/Counter/Counter";
import Tool from "./components/Tool/Tool";
import ProfileCard from "./components/ProfileCard/ProfileCard";


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

      <Goodbye familyName="Smith" score={92} />
      <Goodbye familyName="Johnson" />
      <Counter />
      <Tool />
      <ProfileCard {...johnDoe} />
      
    </>
  );
}

export default App;

// Задание:
//создайте компонент goodbye 
// компонент должен возвращать параметр с текстом "Goodbye, {family_name}"
// соответственно у компонента должен быть пропс familyNamme 
// Создайте два элемента с разными фиамилиями 