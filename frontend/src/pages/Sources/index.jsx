import SSources from "./style";

export default function Sources() {
  return (
    <SSources>
      <div>
        <h2>SOURCES</h2>
      </div>
      <p className="baseline">
        Ci-dessous les les ressources que nous avons utiliser afin de vous
        proposer un expérience éco-responssable globale sur le territoire de la
        MEL.
      </p>
      <ul>
        <li>
          Une des APIs fournie par l`ADEME permettant d`évaluer son bilant
          carbonne en fonction d`une distance kilométrique et du moyen de
          trasport utilisé <a href="https://monconvertisseurco2.fr/">ici</a>
        </li>
        <li>
          {" "}
          Carte fournie par le site Zero Waste Lille, indiquant des lieux pour
          consommer éco-respossable{" "}
          <a
            href="https://zerowastelille.org/la-carte-du-vrac-des-hauts-de-france/"
            rel="noreferrer"
          >
            ici
          </a>
        </li>
        <li>
          {" "}
          Convertisseur de consomation carbone{" "}
          <a href="https://monconvertisseurco2.fr/" rel="noreferrer">
            ici
          </a>
        </li>
      </ul>
    </SSources>
  );
}
