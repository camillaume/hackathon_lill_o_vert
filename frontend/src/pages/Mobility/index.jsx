import Vehicule from "../../components/Vehicule/index";
import Calculator from "../../components/Calculator";
import SMobility from "./style";

function Mobility() {
  return (
    <SMobility>
      <div className="mobility">
        <p className="explications">
          Calculez vos émissions carbone pour vos trajets quotidiens dans la
          métropole lilloise, et comparez-les avec nos indicateurs.
          <br />
          Vous serez surpris par certains résultats !
        </p>

        <div className="components">
          <Vehicule />
          <Calculator />
        </div>
      </div>
    </SMobility>
  );
}

export default Mobility;
