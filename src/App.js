import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import { UserData } from './Data';

function App() {

const [userData, setUserData] = useState({
  lables: UserData.map((data) => data.year),
  datasets: [{
    label: "Users Gain",
    data: UserData.map((data) => data.userGain),
  }]
});

  return (
    <div className="App">
      <h2>Charts made with React and Chart.js</h2>
     <BarChart chartData={userData} />
    </div>
  );
}

export default App;
