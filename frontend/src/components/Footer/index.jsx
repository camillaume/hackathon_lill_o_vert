import { NavLink } from "react-router-dom";
import SFooter from "./style";

export default function Footer() {
  return (
    <SFooter>
      <div>
        <ul>
          <NavLink to="/sources">
            <li>SOURCES</li>
          </NavLink>
          <NavLink to="/team">
            <li>L'EQUIPE</li>
          </NavLink>
        </ul>
      </div>
    </SFooter>
  );
}
