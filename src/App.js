import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function App() {
  const [userData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#B983FF",
          "#94B3FD",
          "#94DAFF",
          "#99FEFF",
          "#FB7AFC",
        ],
        borderColor: "#61045F",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="app">
      <h2>Charts</h2>
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 500 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
