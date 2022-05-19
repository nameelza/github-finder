import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, null);
  
};
