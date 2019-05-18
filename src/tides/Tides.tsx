import React from 'react';
import { Line } from 'react-chartjs-2';
import { format } from 'date-fns';

interface TidalData {
  time: Date
  meters: number
}

interface TidesProps {
  predicted: TidalData[]
}

const DEFAULT_LABELS = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
]

const DEFAULT_VALUES = Array.apply(null, new Array(DEFAULT_LABELS.length)).map(() => 0);

export const Tides = (props: TidesProps) => {
  return <Line data={{
    labels: props.predicted.length > 0 ? props.predicted.map((t) => format(t.time, 'HH:mm')) : DEFAULT_LABELS,
    datasets: [
      {
        label: 'Tides',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: props.predicted.length > 0 ? props.predicted.map((t) => t.meters) : DEFAULT_VALUES
      }
    ]
  }} />;
}
