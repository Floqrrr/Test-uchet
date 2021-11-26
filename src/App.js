import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import AddCategory from './components/AddCategory'
import AddSeller from './components/AddSeller'
import AddManufacturer from './components/AddManufacturer'
import Main from './components/Main'
import NavBar from "./components/NavBar"
import Order from "./components/Order"
import AddOrders from "./components/AddOrders"
import EditConfigurator from "./components/EditConfigurator"

function App() {

  return (
    <Fragment>
      <Router>
        <NavBar/>
        <section className="wrapper">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/order/:id" component={Order} />
            <Route exact path="/orders/" component={AddOrders} />
            <Route exact path="/addproduct" component={AddProduct} />
            <Route exact path="/addcategory" component={AddCategory} />
            <Route exact path="/addseller" component={AddSeller} />
            <Route exact path="/addmanufacturer" component={AddManufacturer} />
            <Route exact path="/edit/:id" component={EditConfigurator} />
          </Switch>
        </section>
      </Router>
    </Fragment>
  )
}

export default App
