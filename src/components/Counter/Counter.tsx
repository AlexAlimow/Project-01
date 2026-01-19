import { useState } from "react";
import Button from "../../ui/Button";

import style from "./Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  function handlePlusOne() {
    setCount(count + 1);
  }

  function handleMinusTwo() {
    setCount((prev) => prev - 2);
  }

  function handleResetCounter() {
    setCount(0);
  }
  function handleRandom() {
    const randomNum = Math.floor(Math.random() * 11);
    setCount(randomNum);
  }

  return (
    <section className={style.container}>
      <h2>Counter</h2>
      Count: {count}
      {/* <button type="button" onClick={handlePlusOne}>+1
            </button>
            <button type="button" onClick={handleMinusTwo}>-2
            </button>
            <button type="button" onClick={handleResetCounter}>Clear
            </button>
            <button type="button" onClick={handleRandom}>Random
            </button> */}
      <Button onClick={handlePlusOne} child="+1" />
      <Button onClick={handleMinusTwo} child="-2" />
      <Button onClick={handleRandom} child="Random" />
      <Button onClick={handleResetCounter} child="Clear" />
    </section>
  );
}

export default Counter;

// хук useState принимает начальное значение состояния
// возвращает кортеж, где на первом месте
// находится переменная состояния state
// а на втором - функция сеттер
