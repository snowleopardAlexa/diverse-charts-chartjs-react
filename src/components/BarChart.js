import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  return (
    <Bar 
      data={{
        labels: ['Red', 'Blue', 'Orange', 'Yellow', 'Purple']
      }}
      height={400}
      width={600}
      options={{
          maintainAspectRatio: false,
      }}
    />
  )
}

export default BarChart;