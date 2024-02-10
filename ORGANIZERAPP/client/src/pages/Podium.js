// src/Podium.js
import React from 'react';
import './Podium.css';

const Podium = ({ podiumData }) => {
    // Check if podiumData is available before accessing properties
    if (!podiumData || podiumData.length < 3) {
        return null; // or you can render a loading state or default content
    }

    return (
        <div className="podium-container">
            <div className="podium-rank rank-2">
                <div className="podium-details">
                    <div className="medal">🥈</div>
                    <div className="rank">{podiumData[1].rank}</div>
                    <div className="name">{podiumData[1].name}</div>
                    <div className="points">{podiumData[1].points} points</div>
                </div>
            </div>
            <div className="podium-rank rank-1">
                <div className="podium-details">
                    <div className="medal">🥇</div>
                    <div className="rank">{podiumData[0].rank}</div>
                    <div className="name">{podiumData[0].name}</div>
                    <div className="points">{podiumData[0].points} points</div>
                </div>
            </div>
            <div className="podium-rank rank-3">
                <div className="podium-details">
                    <div className="medal">🥉</div>
                    <div className="rank">{podiumData[2].rank}</div>
                    <div className="name">{podiumData[2].name}</div>
                    <div className="points">{podiumData[2].points} points</div>
                </div>
            </div>
        </div>
    );
};

export default Podium;
