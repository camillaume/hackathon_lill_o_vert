import { useState, useContext, useEffect } from "react";
import Robinet from "../../assets/pictures/robinet.png";
import Hamburger from "../../assets/pictures/hamburger.png";
import Pomme from "../../assets/pictures/pomme.png";
import Chauffage from "../../assets/pictures/chauffage.png";
import context from "../../services/Context/Ctx";
import SCalculator from "./style";

const calculator = () => {
  const [co2, setCo2] = useState(0);
  const { kms, curvehicle } = useContext(context);

  useEffect(() => {
    if (!curvehicle.emissions) return;
    setCo2(Math.round(curvehicle.emissions.kgco2e * kms * 220 * 1000) / 1000);
  }, [kms, curvehicle]);

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
  // const hSubmit = (event) => {
  //   event.preventDefault();
  // };
  if (!curvehicle.emissions) return <div />;
  return (
    <SCalculator>
      <section>
        <div className="ensemble">
          {/* <div> */}
          <img src={Hamburger} className="hamburger" alt="hamburger" />
          {/* </div> */}
          <h2>{calcMeatMeal()}</h2>
        </div>
        <div className="ensemble">
          <img src={Pomme} alt="pomme" />
          <h2>{calcVeganMeal()}</h2>
        </div>
        <div className="ensemble">
          <img src={Robinet} alt="robinet" />
          <h2>{calcWater()}</h2>
        </div>
        <div className="ensemble">
          <img src={Chauffage} alt="chauffage" />
          <h2>{calcHeat()}</h2>
        </div>
      </section>
    </SCalculator>
  );
};
export default calculator;
