import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => {
  const { date, description, icon, temperature } = props;

  return (
    <div class="forecast-summary">
      <div class="forecast-summary_date"> {date} </div>
      <div class="forecast-summary_icon"> {icon} </div>
      <div class="forecast-summary_temperature"> {temperature.max} &deg;C </div>
      <div class="forecast-summary_description"> {description} </div>
    </div>
  );
};

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
