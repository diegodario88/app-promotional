import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Abr 3', 'Abr 4', 'Abr 5', 'Abr 6', 'Abr 7', 'Abr 8', 'Abr 9'],
  datasets: [
    {
      label: 'Faturamento diário',
      data: [100, 200, 150, 200, 300, 200, 400, 500],
      fill: false,
      backgroundColor: '#EF6C00',
      borderColor: '#EF6C00'
    }
  ]
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

export default function LineChart() {
  return <Line data={data} options={options} />;
}
