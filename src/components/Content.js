import React from 'react'

export default props => {
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
                <p>
                  conteúdo da rota { props.location.pathname }
                </p>

            </div>
            <div className="panel-footer">
                rodapé da rota { props.location.pathname }
            </div>
        </div>
      </div>
    </div>
  )
}
