import React from "react";
import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "block",
  margin: "100px auto",
};
/**
 * A Spinner to appear while data is being loaded
 * @function Spinner
 * @param {bool} loading
 * @returns {JSX.Element}
 * @author Waseem Iqbal
 */
const Spinner = ({ loading }) => {
  return (
    <HashLoader
      color="#4438ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
