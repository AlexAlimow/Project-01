import { useState } from "react";
import { fetchNationality } from "../../api/nationalizeApi";
import type { NationalityInformation } from "./types/NationalityInformation";
import { Results } from "./Results";
import s from "./Results.module.css";

export const NationalityDetector = () => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState<NationalityInformation | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    if (!name.trim()) {
      setError("Please enter a name");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const data = await fetchNationality(name);
      setInfo(data);
    } catch {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={s.container}>
      <h2>Nationality detector</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <button onClick={handleClick}>Detect</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Results info={info} />
    </div>
  );
};
