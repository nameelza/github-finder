import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, null);

  const setAlert = (text, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { text, type },
    });

    setTimeout(() => dispatch({ type: "CLEAR_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider value={{ setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
