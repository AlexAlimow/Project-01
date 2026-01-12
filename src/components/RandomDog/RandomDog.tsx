import { useEffect, useState } from "react";

export default function RandomDog() {
  const [image, setImage] = useState<string | undefined>(undefined);
  async function fetchDogImage() {
    console.log("fetch");
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    // console.log(data);
    setImage(data.message);
  }
  // useEffect с пустым массивом зависимостей срабатывает
  // только при mount
  useEffect(() => {
    console.log("Только при первом рендере");
  }, []);

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div>
      <h2>Random Dog</h2>
      <img src={image} alt="dog" />
    </div>
  );
}

// Component life-cycle:  mount -> update -> unmount

// useEffect без массива зависимостей
  // при mount и при любых изменениях - update
  useEffect(() => {
    console.log("Use effect in Space Mission - no dependencies");
  });

  // useEffect с зависимостями
  // при mount 
  // или когда меняется указанная в массиве переменная - name
  useEffect(() => {
    console.log("Use effect in Space Mission - with dependecie on name");
  }, [name]);