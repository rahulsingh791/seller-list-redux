import React, { Component } from 'react';
import PElement from './PElement';
import CartList from './CartList'
import {showAlertLogout} from './../redux/index'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';


class Products extends Component {
    constructor(){
        super()
        this.cartChild = React.createRef();
    }

    logOut = () => {
        localStorage.removeItem("Auth");
        this.props.showAlertLogout();
        window.location.href="/login"
      }


    render(){
        let selnum = parseInt(localStorage.getItem("CurrSeller"));
        
        let currSspname = JSON.parse(localStorage.getItem("s"+selnum+"pname"));
        let currSsprice = JSON.parse(localStorage.getItem("s"+selnum+"price"));

        let productList = [];

        for(let i=0;i<currSspname.length;i++){
            let a= <PElement name={currSspname[i]} price={currSsprice[i]}/>
            productList.push(a);
        }

        return(

            <div className="supSeller">
            <button ref={this.logoutButton} className="logoutButton" onClick={this.logOut}>Logout</button>
            <button ref={this.cartButton} className="cartButton" onClick={() => this.cartChild.current.showCartList()}><img src={require('./../assets/shopping-cart.svg')}/></button>
            <CartList ref={this.cartChild}/>
            <div className="productPage">
                <div className="heaDing">
                   
                        <button onClick={() => window.history.back()}><img src={require('./../assets/back.png')}></img></button>
                        <b>Products</b>
                    
                </div>
                <div className="productList">
                    {productList}
                </div>
            </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showAlertLogout : () => dispatch(showAlertLogout())
    }
}

Products.propTypes = {
    showAlertLogout : PropTypes.func
    
}


export default connect(
    null,  mapDispatchToProps
   )(Products);