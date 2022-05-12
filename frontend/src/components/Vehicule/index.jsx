import { useState, useEffect } from "react";
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

export default function Vehicule() {
  const [vehicules, setVehicules] = useState([]);
  const [kms, setKms] = useState(0);
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
        return setVehicules(data);
      });
  }, []);

  return (
    <SVehicule>
      <section>
        <div className="km">
          <form onSubmit={hSubmit}>
            <p>Nombre de kilomètres</p>
            <input id="nbKm" type="number" value={kms} onChange={hChange} />
            <input type="submit" value="OK" />
          </form>
          <div>
            {images.map((image) => {
              return <img alt="transport" src={image} />;
            })}
          </div>
        </div>
        {vehicules
          .sort((a, b) => (a.emissions.kgco2e > b.emissions.kgco2e ? 1 : -1))
          .map((vehicule) => {
            return (
              <div key={vehicule.id} className="vehicule">
                <div className="resultImg">{vehicule.name}</div>
                <p className="resultText">
                  {Math.round(vehicule.emissions.kgco2e * kms * 1000) / 1000}
                  kgco2e
                </p>
              </div>
            );
          })}
      </section>
    </SVehicule>
  );
}
