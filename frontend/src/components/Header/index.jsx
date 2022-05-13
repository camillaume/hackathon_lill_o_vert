import { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../Burger/index";
import SHeader from "./style";

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <SHeader>
      <Link to="/Home" className="logo">
        <img
          src="../../../src/assets/pictures/logo-lille-o-vert.svg"
          alt="logo"
        />
      </Link>
      <Burger burger={burgerOpen} func={toggleBurger} />
      <div className="navigation">
        <ul>
          <Link to="/mobility">
            <li>SE DEPLACER CONSCIEMMENT</li>
          </Link>
          <Link to="/consume">
            <li>CONSOMMER RESPONSABLE</li>
          </Link>
        </ul>
      </div>
    </SHeader>
  );
}
