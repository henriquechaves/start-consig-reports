import React from 'react'
import RC2 from 'react-chartjs2'

const chartData = ( data, label, labels, style ) => {
  return {
    labels: labels,
    datasets: [
      {
        data: data,
        label: label,
        backgroundColor: style.backgroundColor,
        borderColor: style.borderColor,
        borderWidth: style.borderWidth,
      },
    ],
  }
}

const chartOptions = type => {
  if( type === 'pie') return ''
  return {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
}

export default props => {

  const type = props.type
  const data = chartData( props.data, props.label, props.labels, props.style )
  const options = chartOptions( type )

  return (
    <RC2 data={ data } options={ options } type={ type } />
  )
}
