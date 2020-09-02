import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sellers from './component/Sellers';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Products from './component/Products'
import './myapp.css'

import Login from './Login'
import {showAlertNologin} from './redux/index'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';


class App extends Component {
  constructor(){
    super()
   
    
    this.logoutButton = React.createRef();
    this.cartButton = React.createRef();
    
    
  }



  componentDidMount(){


  }
 

  render(){

    const PrivateRoute = () => (
      <Route  render={() => (
        localStorage.getItem("Auth") == "true" ? "" : this.props.showAlertNologin(),

        localStorage.getItem("Auth") == "true"
          ? ""
          : <Redirect to='/login' />
      )} />
    )

    return (
      <BrowserRouter>
        <div className="App">
          
          <PrivateRoute/>
          <Route exact path="/"><Sellers /></Route>
          <Route path="/products"><Products /></Route>
          <Route path="/login"><Login /></Route>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showAlertNologin : () => dispatch(showAlertNologin())
  }
}

App.propTypes = {
  showAlertNoLogin : PropTypes.func
  
}

export default connect(
null,  mapDispatchToProps
)(App);
