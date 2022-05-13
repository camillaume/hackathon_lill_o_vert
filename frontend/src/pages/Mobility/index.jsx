import Vehicule from "../../components/Vehicule/index";
import Calculator from "../../components/Calculator";
import SMobility from "./style";

function Mobility() {
  return (
    <SMobility>
      <div className="mobility">
        <p className="explications">
          Calculez vos émissions carbone pour vos trajets annuels dans la
          métropole lilloise, et comparez-les avec nos indicateurs.
          <br />
          Cliquez sur les moyens de transport, vous serez surpris par certains
          résultats !
        </p>

        <div className="components">
          <Vehicule />
          <Calculator className="calculator" />
        </div>
        <p className="note">
          * estimation réalisée sur la base de 220 jours travaillés
        </p>
      </div>
    </SMobility>
  );
}

export default Mobility;
