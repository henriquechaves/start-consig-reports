import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

import Home from './Home'
import Content from './Content'
import ContentHeader from './ContentHeader'
import NotFound from './NotFound'

import Reporter from './Reporter'

class Layout extends Component {
  render() {
    return (
      <div className="fixed-navbar fixed-sidebar">
        <Header />
        <Sidebar />
        <div id="wrapper">
          { !this.props.match.isExact && <ContentHeader pathname={ this.props.location.pathname }/> }
          <div className="content animate-panel">
            <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/pagina1" component={ Content } />
              <Route path="/pagina2" component={ Content } />
              <Route path="/pagina3" component={ Content } />
              <Route path="/pagina4" component={ Content } />
              <Route path="/pagina5" component={ Content } />
              <Route path="/reporter" component={ Reporter } />
              <Route path="*" component={ NotFound } />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
