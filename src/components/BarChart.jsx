import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

const BarChart = ({ chartData }) => {
  return (
    <>
    <div className="title">
        <h3>Bar Chart</h3>
    </div>
    <div className="chart">
    <Bar 
      data={chartData}
      options={{maintainAspectRatio: false, }}
    />
    </div>
    </>
  )
}

export default BarChart;