import type { FC } from "react";
import type { NationalityInformation } from "./types/NationalityInformation";
import { getCountryName } from "./utils/countryCodes";

import s from "./Results.module.css";

type Props = {
  info: NationalityInformation | undefined;
};

export const Results: FC<Props> = ({ info }) => {
  if (!info) {
    return <p>No information yet. Please insert name</p>;
  }

  return (
    <div className={s.container}>
      <h3>Results</h3>

      <span>Name: {info.name}</span>
      <span>Analyzed data: {info.count}</span>

      <h4>Possible nationalities:</h4>
      <ul>
        {info.country
          .sort((a, b) => b.probability - a.probability)
          .slice(0, 3)
          .map((item) => (
            <li key={item.country_id}>
              {getCountryName(item.country_id)} —{" "}
              {(item.probability * 100).toFixed(1)}%
            </li>
          ))}
      </ul>
    </div>
  );
};
