import React from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import PropTypes from 'prop-types';
import './LeaderChart.css';

const propsDefinition = {
  data: PropTypes.array.isRequired,
};

export function LeaderChart({ data = [] }) {
  if (data.length === 0) {
    return null;
  }

  return (
    <div className="leader-chart">
      <div className="leader-chart-title">Table Tennis Ranking</div>
      <div className="leader-chart-default">
        <ComposedChart
          layout="vertical"
          width={600}
          height={800}
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 40 }}
        >
          <CartesianGrid stroke="#d2d2d2" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="points" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </div>
      <div className="leader-chart-alternative">
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {data.map((player) => (
              <tr key={`player-${player.id}`}>
                <td>{player.name}</td>
                <td className="points">{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

LeaderChart.propTypes = propsDefinition;

export default LeaderChart;
