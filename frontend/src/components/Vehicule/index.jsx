import { useState, useEffect, useContext } from "react";
import axios from "axios";
import SVehicule from "./style";
import velo from "../../assets/pictures/velo.svg";
import trotinette from "../../assets/pictures/trotinette.svg";
import bus from "../../assets/pictures/bus.svg";
import metro from "../../assets/pictures/metro.svg";
import voiture from "../../assets/pictures/voiture.svg";
import voitureElectrique from "../../assets/pictures/voiture-electrique.svg";
import scooter from "../../assets/pictures/scooter.svg";
import tram from "../../assets/pictures/tram.svg";
import context from "../../services/Context/Ctx";

export default function Vehicule() {
  const [vehicules, setVehicules] = useState([]);
  const { kms, setKms, setCurvehicle } = useContext(context);

  const images = [
    velo,
    trotinette,
    tram,
    metro,
    bus,
    voitureElectrique,
    tram,
    scooter,
    bus,
    bus,
    voiture,
  ];

  const hChange = (event) => {
    setKms(event.target.value);
  };
  const hSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    axios
      .get(
        `https://api.monimpacttransport.fr/beta/getEmissionsPerDistance?&fields=emoji,description`
      )
      .then(({ data }) => {
        setVehicules(data);
        setCurvehicle(data[10]);
      });
  }, []);

  return (
    <SVehicule>
      <section>
        <form onSubmit={hSubmit}>
          <p>Trajet quotidien aller/retour (kms)</p>
          <input
            className="nbKm"
            type="number"
            value={kms}
            onChange={hChange}
          />
          <input className="ok" type="submit" value="OK" />
        </form>
        <div className="comparison">
          <div className="images">
            {images.map((image, idx) => {
              return (
                /* eslint-disable */
                <img
                  alt="transport"
                  src={image}
                  onClick={() => {
                    setCurvehicle(vehicules[idx]);
                  }}
                />
                /* eslint-enable */
              );
            })}
          </div>
          <div className="vehicules">
            {vehicules
              .sort((a, b) =>
                a.emissions.kgco2e > b.emissions.kgco2e ? 1 : -1
              )
              .map((vehicule) => {
                return (
                  <div key={vehicule.id}>
                    <div className="vehicule">
                      <progress
                        className="resultImg"
                        max="200"
                        value={vehicule.emissions.kgco2e * kms * 20}
                      />
                      <p className="resultText">
                        {Math.round(vehicule.emissions.kgco2e * kms * 220 * 1) /
                          1}{" "}
                        kgco2e
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </SVehicule>
  );
}
