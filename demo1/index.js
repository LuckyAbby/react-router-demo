import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import Inbox from './modules/Inbox'
import Home from './modules/Home'
import Message from './modules/Message'
import {Router, Route, IndexRoute, Redirect, browserHistory} from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/inbox" component={Inbox}>
        <Route path="/messages/:id" component={Message}/>
        <Redirect from="messages/:id" to="/messages/:id"/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
