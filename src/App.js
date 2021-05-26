import { useState, useMemo, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cpu from './components/Cpu'
import Gpu from './components/Gpu'
import Hdd from './components/Hdd'
import Main from './components/Main'
import Motherboard from './components/Motherboard'
import NavBar from "./components/NavBar"
import Power from './components/Power'
import Ram from './components/Ram'
import Configurator from './components/Configurator'
import EditConfigurator from './components/EditConfigurator'

function App() {

  return (
    <Fragment>
      <Router>
        <NavBar/>
        <section className="wrapper">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/cpu" component={Cpu} />
            <Route exact path="/gpu" component={Gpu} />
            <Route exact path="/motherboard" component={Motherboard} />
            <Route exact path="/hdd" component={Hdd} />
            <Route exact path="/power" component={Power} />
            <Route exact path="/ram" component={Ram} />
            <Route exact path="/configurator" component={Configurator} />
            <Route exact path="/edit/:id" component={EditConfigurator} />
          </Switch>
        </section>
      </Router>
    </Fragment>
  )
}

export default App
