import SSources from "./style";

export default function Sources() {
  return (
    <SSources>
      <div>
        <h1>SOURCES</h1>
      </div>
      <p className="baseline">
        Ci-dessous les ressources que nous avons utilisées afin de vous proposer
        une expérience éco-responsable globale sur le territoire de la MEL.
      </p>
      <ul>
        <li>
          Une des APIs fournie par l&apos;ADEME permettant d&apos;évaluer son
          bilan carbone en fonction d&apos;une distance kilométrique et du moyen
          de transport utilisé{" "}
          <a href="https://api.monimpacttransport.fr/">ici</a>
        </li>
        <li>
          {" "}
          Carte fournie par le site Zero Waste Lille, indiquant des lieux pour
          consommer éco-resposable{" "}
          <a
            href="https://zerowastelille.org/la-carte-du-vrac-des-hauts-de-france/"
            rel="noreferrer"
          >
            ici
          </a>
        </li>
        <li>
          {" "}
          Convertisseur de consommation carbone{" "}
          <a href="https://monconvertisseurco2.fr/" rel="noreferrer">
            ici
          </a>
        </li>
      </ul>
    </SSources>
  );
}
