import { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);
  console.log(alert);

  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2">
        <p className="flex-1 text-base font-semibold leading-7 text-white">
          <strong>{alert.text}</strong>
        </p>
      </p>
    )
  );
}

export default Alert;
