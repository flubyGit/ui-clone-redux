import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './pages/Landing'
import Globals from './globals'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Globals />
      <Switch>
        <Route path="/" exact component={Landing} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
