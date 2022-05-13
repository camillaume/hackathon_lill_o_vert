import Iframe from "react-iframe";
import SMap from "./style";

export default function Map() {
  return (
    <SMap>
      <div className="test">
        <Iframe
          className="map"
          src="https://zerodechet.gogocarto.fr/annuaire?iframe=1&noheader=1#/carte/lille@50.657,3.154,12z?cat=all"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        />
      </div>
      <div className="speach">
        <h1>Consommer autrement, est-ce possible ?</h1>
        <ul>
          <li>
            {" "}
            L’éco-responsabilité c&apos;est tenir compte dans son quotidien, des
            différents impacts environnementaux de notre mode de vie. Il s’agit
            avant tout d’une démarche qui consiste à mettre en place des
            habitudes dans le but de limiter son empreinte écologique et son
            impact sur la planète. A ces pratiques se greffe un véritable état
            d’esprit, celui de se sentir responsable face à l’environnement car
            il n’est pas le seul bénéficiaire de cette démarche, nous jouissons
            tous de ses bienfaits.
          </li>
          <li>
            Cette carte ci-contre vous permet par des filtres de trouver autour
            de chez vous, des magasins de vrac, des ateliers de réparation
            communautaires, des sites de dons et d&apos;échanges ou encore des
            composteurs.
          </li>
          <li>Changer vos habitudes est maintenant à portée de votre main.</li>
        </ul>
      </div>
    </SMap>
  );
}
