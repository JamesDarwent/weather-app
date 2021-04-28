import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
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

const App = ({ location, forecasts }) => {
  return (
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />;
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
};

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
