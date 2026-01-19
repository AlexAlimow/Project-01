import { useState } from "react";

import s from "./SpaceMissionForm.module.css";

const AstronautMission: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [planet, setPlanet] = useState<string>("Mars");
  const [missionStarted, setMissionStarted] = useState<boolean>(false);

  const startMission = () => {
    if (name.trim()) {
      setMissionStarted(true);
    }
  };

  return (
    <div className={s.container}>
      <h2>SpaceMissionForm 🚀</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setMissionStarted(false);
        }}
      />
      <select
        value={planet}
        onChange={(e) => {
          setPlanet(e.target.value);
          setMissionStarted(false);
        }}
      >
        <option value="Mars">Mars</option>
        <option value="Venus">Venus</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
      </select>
      <button onClick={startMission}>Start Mission</button>
      {missionStarted && name && (
        <p>
          🧑‍🚀 Astronaut {name} is headed to {planet}!
        </p>
      )}
    </div>
  );
};
export default AstronautMission;
