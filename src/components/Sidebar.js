import React from 'react'
import { Link } from 'react-router-dom'

import profile from '../assets/images/profile.jpg'

export default () => {
  return (
    <aside id="menu">
      <div id="navigation">
        <div className="profile-picture">
          <Link to="/">
            <img src={ profile } className="img-circle m-b" alt="Meu Perfil" />
          </Link>
          <div className="stats-label text-color">
            <span className="font-extra-bold font-uppercase">Roberta Razer</span>
          </div>
        </div>
        <ul className="nav" id="side-menu">
          <li className="active">
            <Link to="/"> <span className="nav-label">Início</span> </Link>
          </li>
          <li>
            <Link to="/empresa"><span className="nav-label">Sua Empresa</span><span className="fa arrow"></span> </Link>
            <ul className="nav nav-second-level">
              <li><Link to="/pagina1">Página 1</Link></li>
              <li><Link to="/pagina2">Página 2</Link></li>
              <li><Link to="/pagina3">Página 3</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/financeiro"><span className="nav-label">Financeiro</span><span className="fa arrow"></span> </Link>
            <ul className="nav nav-second-level">
              <li><Link to="/pagina4">Página 4</Link></li>
              <li><Link to="/pagina5">Página 5</Link></li>
              <li><Link to="/reporter">Relatório Utilização</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  )
}
