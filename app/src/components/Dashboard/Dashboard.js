import React, { useEffect, useState } from 'react';
import LeaderChart from '../LeaderChart';

import './Dashboard.css';

export function Dashboard(props) {

  const [leaderChartData, setLeaderChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // I will fetch the data from the api
    // then prepare that data for the Leader Chart
    // then I will update state with setLeaderChartData
    // and I will update state and setIsLoading(false)
  }, []);

  if (isLoading) {
      return (
        <div className="dashboard">
            <div className="dashboard-loading">Loading data ...</div>
        </div>
      );
  }

  return (
    <div className="dashboard">
        I am a dashboard
        <LeaderChart data={leaderChartData} />
    </div>
  );
}


export default Dashboard;
