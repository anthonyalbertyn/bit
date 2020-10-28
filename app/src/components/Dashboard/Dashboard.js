import React, { useEffect, useState } from 'react';
import LeaderChart from '../LeaderChart';

import './Dashboard.css';

export function Dashboard() {
  const [leaderChartData, setLeaderChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancel;

    if (cancel) {
      return;
    }
    const pointsData = {};
    const leaderChartData = [];

    function initialisePointsData(players = []) {
      players.forEach(
        (player) =>
          (pointsData[player.id] = {
            name: player.name,
            id: player.id,
            points: 0,
          }),
      );
    }

    function allocateWinsToPlayers(games = []) {
      games.forEach((game) => {
        if (game.player1.score === 21) {
          // player 1 wins
          pointsData[game.player1.id].points =
            pointsData[game.player1.id].points + 1;
          pointsData[game.player2.id].points =
            pointsData[game.player2.id].points - 1;
        } else {
          // player 2 wins
          pointsData[game.player1.id].points =
            pointsData[game.player1.id].points - 1;
          pointsData[game.player2.id].points =
            pointsData[game.player2.id].points + 1;
        }
      });
    }

    function setupLeaderChartData() {
      Object.keys(pointsData).forEach((key) => {
        leaderChartData.push(pointsData[key]);
      });
    }

    function compareDescending(a, b) {
      return b.points - a.points;
    }

    function sortLeaderChartData() {
      leaderChartData.sort(compareDescending);
    }

    const endPoints = [
      'http://localhost:4000/players',
      'http://localhost:4000/games',
    ];
    Promise.all(endPoints.map((url) => fetch(url).then((resp) => resp.json())))
      .then((results) => {
        console.log(results[0]);
        console.log(results[1]);
        // results[0] is players
        initialisePointsData(results[0]);
        // results[1] is games
        allocateWinsToPlayers(results[1]);
        setupLeaderChartData();
        sortLeaderChartData();
        setLeaderChartData(leaderChartData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
    return () => {
      cancel = true;
    };
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
      {leaderChartData.length > 0 && <LeaderChart data={leaderChartData} />}
      {leaderChartData.length === 0 && (
        <div className="dashboard-error">
          There was a problem fetching data. Please try again later.
        </div>
      )}
    </div>
  );
}

export default Dashboard;
