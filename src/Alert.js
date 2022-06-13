import React, { useEffect } from "react";

const Alert = ({ type, msg, showAlert }) => {
  useEffect(() => {
    /* here we pass function (showAlert) but see In the app file.
      The parameter default
      This is how it returns to false by default
    */
    const removeAlert = setTimeout(() => showAlert(), 3000);
    return () => clearTimeout(removeAlert); // clean up function
  }, []);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
