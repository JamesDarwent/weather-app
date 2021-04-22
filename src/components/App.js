import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import "../styles/App.css";

// const App = (props) => {
//   const { location } = props;
//   return (
//     <div className="App">
//       <LocationDetails city={location.city} country={location.country} />
//     </div>
//   );
// };

// Below is a deconstructed version of the above component

const App = ({ location }) => {
  const { city, country } = location;
  return <LocationDetails city={city} country={country} />;
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
