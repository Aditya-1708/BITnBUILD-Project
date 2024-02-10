// src/Leaderboard.js
import React from 'react';
import './Leaderboard.css';

const Leaderboard = ({ leaderboardData }) => {
  // Sort leaderboard data based on points in descending order
  const sortedLeaderboard = leaderboardData.slice().sort((a, b) => b.points - a.points);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rank</th>
            <th>No of Participation</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {sortedLeaderboard.map((participant, index) => (
            <tr key={participant.id} className={`rank-${index + 1}`}>
              <td>{participant.name}</td>
              <td>{index + 1}</td>
              <td>{/* Add number of participation logic if available */}</td>
              <td>{participant.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
