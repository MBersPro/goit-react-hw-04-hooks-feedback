import React from "react";
import PropTypes from "prop-types";
import {ul} from './Statistics.module.css'
import Notification from "../notification/Notification";

const Statistics = ({ state, total, percentage }) => {
  return (
    <ul className={ul}>
      {total ? (
        <>
          {state.map((item) => (
            <li>
              {item[0]}: {item[1]}
            </li>
          ))}
          <li>total: {total}</li>
          <li>Positive feedback: {percentage}%</li>
        </>
      ) : (
        <Notification/>
      )}
    </ul>
  );
};

Statistics.propTypes = {
  state: PropTypes.array.isRequired,
  total: PropTypes.func.isRequired,
  percentage: PropTypes.func.isRequired
}

export default Statistics;
