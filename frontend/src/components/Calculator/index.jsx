import { useState } from "react";
import Robinet from "../../assets/pictures/robinet.png";
import Hamburger from "../../assets/pictures/hamburger.png";
import Pomme from "../../assets/pictures/pomme.png";
import Chauffage from "../../assets/pictures/chauffage.png";

const calculator = () => {
  const [co2, setCo2] = useState(0);

  const calcMeatMeal = () => {
    return Math.round(co2 / 7.26);
  };
  const calcVeganMeal = () => {
    return Math.round(co2 / 0.51);
  };
  const calcHeat = () => {
    return Math.round(co2 / 18.63);
  };
  const calcWater = () => {
    return Math.round(co2 / 0.000132);
  };
  const hChange = (event) => {
    setCo2(event.target.value);
  };
  // const hSubmit = (event) => {
  //   event.preventDefault();
  // };
  return (
    <div>
      <input type="number" value={co2} onChange={hChange} />
      <h2>{calcMeatMeal()}</h2>
      <img src={Hamburger} alt="hamburger" />
      <h2>{calcVeganMeal()}</h2>
      <img src={Pomme} alt="pomme" />
      <h2>{calcWater()}</h2>
      <img src={Robinet} alt="robinet" />
      <h2>{calcHeat()}</h2>
      <img src={Chauffage} alt="chauffage" />
    </div>
  );
};
export default calculator;
