import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Kmean from './components/Kmean.js'
import Hierarchy from './components/Hierarchy.js'
import Links from './components/Links.js'
import RenderTree from './components/RenderTree.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/kmeans' exact component={Kmean} />
          <Route path='/hierarchy' exact component={Hierarchy} />
        </Switch>
        <Links />
        <RenderTree />
      </BrowserRouter>
    </div>
  )
}

export default App
