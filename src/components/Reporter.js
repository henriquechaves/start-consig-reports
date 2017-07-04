import React from 'react'

import Chart from './Chart'

export default props => {

  const data = [5, 8, 13, 25, 39, 55]
  const id = 'myChart'
  const label = 'Utilização do Sistema no Primeiro Semestre de 2017'
  const labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"]
  const style = {
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1,
  }



  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="hpanel">
            <div className="panel-heading">
                <div className="panel-tools">
                    <a className="showhide"><i className="fa fa-chevron-up"></i></a>
                    <a className="closebox"><i className="fa fa-times"></i></a>
                </div>
                cabeçalho da rota { props.location.pathname }
            </div>
            <div className="panel-body">
              <Chart
                type = 'bar'
                data = { data }
                id = { id }
                label = { label }
                labels = { labels }
                style = { style }
                >
              </Chart>
              <Chart
                type = 'line'
                data = { data }
                id = { id }
                label = { label }
                labels = { labels }
                style = { style }
                >
              </Chart>
              <Chart
                type = 'pie'
                data = { data }
                id = { id }
                label = { label }
                labels = { labels }
                style = { style }
                >
              </Chart>
            </div>
            <div className="panel-footer">
                rodapé da rota { props.location.pathname }
            </div>
        </div>
      </div>
    </div>
  )
}
