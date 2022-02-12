import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
//import LineChart from "./components/LineChart";
//import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#ec008c",
          "#78ffd6",
          "#50AF95",
          "#00F260",
          "#fc6767",
        ],
        borderColor: "purple",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="app">
      <div className="title">
        <h2>Diverse Charts</h2>
      </div>
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
     
    </div>
  );
}

export default App;
