import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'

export default () => {
  return (
    <div id="header">
      <div className="color-line"></div>
      <div id="logo" className="light-version">
        <Link to="/">
          <img className="logo" src={ logo } alt="Logo Star Consig" />
        </Link>
      </div>
      <nav>
        <div className="header-link hide-menu"><i className="fa fa-bars"></i></div>
        <div className="small-logo">
          <span className="text-primary">Star Consig</span>
        </div>
        <div className="mobile-menu">
          <button type="button" className="navbar-toggle mobile-menu-toggle" data-toggle="collapse" data-target="#mobile-collapse">
            <i className="fa fa-chevron-down"></i>
          </button>
          <div className="collapse mobile-navbar" id="mobile-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/login">Entrar</Link>
              </li>
              <li>
                <Link to="/signup">Cadastrar</Link>
              </li>
              <li>
                <Link to="/profile">Perfil</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-right">
          <ul className="nav navbar-nav no-borders">
            <li className="dropdown">
              <Link to="/logout">
                <i className="pe-7s-upload pe-rotate-90"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

// aguardando utilização futura:
// <li className="dropdown">
//   <Link to="/" className="dropdown-toggle">
//     <i className="pe-7s-keypad"></i>
//   </Link>
//   <div className="dropdown-menu hdropdown bigmenu animated flipInX">
//     <table>
//       <tbody>
//         <tr>
//           <td>
//             <a href="projects.html">
//               <i className="pe pe-7s-portfolio text-info"></i>
//               <h5>Projetos</h5>
//             </Link>
//           </td>
//           <td>
//             <a href="contacts.html">
//               <i className="pe pe-7s-users text-success"></i>
//               <h5>Contatos</h5>
//             </Link>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// </li>
