import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => {
  const { date, description, icon, temperature } = props;

  return (
    <div className="forecast-summary">
      <div className="forecast-summary_date"> {date} </div>
      <div className="forecast-summary_icon" data-testid="forecast-icon">
        {icon}
      </div>
      <div className="forecast-summary_temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary_description"> {description} </div>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
  }).isRequired,
};
export default ForecastSummary;
