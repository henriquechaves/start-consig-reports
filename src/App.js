import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from './components/Layout'

const App = props => (
  <BrowserRouter>
    <Route path="/" component={ Layout } />
  </BrowserRouter>
)

export default App
