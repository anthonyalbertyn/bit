import React from 'react';

import PropTypes from 'prop-types';
import './LeaderChart.css';

const propsDefinition = {
  data: PropTypes.array.isRequired,
};

export function LeaderChart({data = []}) {

  return (
    <div className="leader-chart">
        I am a will be a chart
    </div>
  );
}

LeaderChart.propTypes = propsDefinition;

export default LeaderChart;
