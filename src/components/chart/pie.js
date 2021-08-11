import { Pie } from 'react-chartjs-2';

const data = {
  labels: [
    'Taxa de entrega grátis (R$ 300,00)',
    'Promoção de Segunda-feira (R$ 150,00)',
    'Promoção de Terça-feira (R$ 150,00)'
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [15, 70, 15],
      backgroundColor: ['#8F4100', '#EF6C00', '#F28933'],
      borderColor: ['#8F4100', '#EF6C00', '#F28933'],
      borderWidth: 1
    }
  ]
};

const options = {
  maintainAspectRatio: false
};

export default function PieChart() {
  return <Pie data={data} options={options} />;
}
