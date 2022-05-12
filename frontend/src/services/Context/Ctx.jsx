import { createContext, useState } from "react";
import PropTypes from "prop-types";

const context = createContext(null);

export default context;

export function CtxProvider({ children }) {
  const [kms, setKms] = useState(0);
  const [curvehicle, setCurvehicle] = useState({});

  return (
    <context.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        kms,
        setKms,
        curvehicle,
        setCurvehicle,
      }}
    >
      {children}
    </context.Provider>
  );
}

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
