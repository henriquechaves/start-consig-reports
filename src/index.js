import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/metismenu/dist/metisMenu.min.css';
import '../node_modules/animate.css/animate.min.css';
import './assets/styles/style.css';

import '../node_modules/metismenu/dist/metisMenu.min.js';

// Bootstrap JS relies on a global varaible.
// In ES6, all imports are hoisted to the top of the file
// so if we used `import` to import Bootstrap, it would
// execute earlier than we have assigned the global
// variable. This is why we have to use CommonJS require()
// here since it doesn't have the hoisting behavior.
// import $ from 'jquery';
// window.jQuery = $;
// require('../node_modules/bootstrap/dist/js/bootstrap.min.js');

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker();
