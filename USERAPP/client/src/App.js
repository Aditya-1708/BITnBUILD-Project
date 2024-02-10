import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Leaderboard from "./pages/Leaderboard";
import MyCalendar from "./pages/MyCalendar";
import Podium from "./pages/Podium";
import Profilepage from "./pages/Profilepage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [podiumData, setPodiumData] = useState([]);

  useEffect(() => {
    // Mock data for demonstration purposes
    const mockData = [
      { id: 1, name: "John Doe", points: 100 },
      { id: 2, name: "Jane Smith", points: 90 },
      { id: 3, name: "Bob Johnson", points: 80 },
      { id: 4, name: "Alice Brown", points: 75 },
      { id: 5, name: "Charlie Davis", points: 7000 },
      { id: 6, name: "Eva White", points: 650 },
      { id: 7, name: "George Miller", points: 60 },
      { id: 8, name: "Helen Clark", points: 500 },
      { id: 9, name: "Ian Green", points: 50 },
      { id: 10, name: "Julia Adams", points: 45 },
    ];

    setLeaderboardData(mockData);
  }, []);

  useEffect(() => {
    // Update podiumData whenever leaderboardData changes
    const sortedLeaderboard = [...leaderboardData].sort(
      (a, b) => b.points - a.points
    );
    const updatedPodiumData = sortedLeaderboard.slice(0, 3);
    setPodiumData(updatedPodiumData);
  }, [leaderboardData]);

  return (
    <Router>
      <>
      <Navbar />
        <Routes>
          <Route
            exact
            path="/leaderboard"
            element={
              <div className="app-container">
                <h1 className="global-leader">Global Leader</h1>
                <Podium podiumData={podiumData} />
                <Leaderboard leaderboardData={leaderboardData} />
              </div>
            }
          ></Route>
          
          <Route exact path="/calendar" element={<MyCalendar />}></Route>
          <Route exact path="/home" element={<Homepage/>}></Route>
          <Route exact path="/profile" element={<Profilepage/>} ></Route>
          <Route exact path="/registerpage" element={<RegisterPage/>} ></Route>
        </Routes>
      </>
    </Router>
  

  );
}

export default App;
