import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import CartList from './CartList';
import {showAlertLogout} from './../redux/index'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

class Sellers extends Component {
    constructor(){
        super();

        this.cartChild = React.createRef();
        let scount = 6

        localStorage.setItem("scount", scount);

        let s1pname = ["S1Product 1", "S1Product 2", "S1Product 3", "S1Product 4","S1Product 5"]
        let s2pname = ["S2Product 1", "S2Product 2", "S2Product 3", "S2Product 4","S2Product 5","S2Product 6"]
        let s3pname = ["S3Product 1", "S3Product 2", "S3Product 3", "S3Product 4","S3Product 5"]
        let s4pname = ["S4Product 1", "S4Product 2", "S4Product 3", "S4Product 4","S4Product 5","S4Product 6"]
        let s5pname = ["S5Product 1", "S5Product 2", "S5Product 3", "S5Product 4","S5Product 5","S5Product 6"]
        let s6pname = ["S6Product 1", "S6Product 2", "S6Product 3", "S6Product 4","S6Product 5","S6Product 6"]

 
        localStorage.setItem("s1pname", JSON.stringify(s1pname));
        localStorage.setItem("s2pname", JSON.stringify(s2pname));
        localStorage.setItem("s3pname", JSON.stringify(s3pname));
        localStorage.setItem("s4pname", JSON.stringify(s4pname));
        localStorage.setItem("s5pname", JSON.stringify(s5pname));
        localStorage.setItem("s6pname", JSON.stringify(s6pname));

        let s1pprice = [120, 320, 50, 80, 110]
        let s2pprice = [50, 63, 230, 85, 69, 300]
        let s3pprice = [110, 210, 320, 420, 350]
        let s4pprice = [250, 110, 750, 630, 254, 564]
        let s5pprice = [210, 320, 420, 540, 230, 152]
        let s6pprice = [961, 21, 563, 351, 546, 246]

        localStorage.setItem("s1price", JSON.stringify(s1pprice));
        localStorage.setItem("s2price", JSON.stringify(s2pprice));
        localStorage.setItem("s3price", JSON.stringify(s3pprice));
        localStorage.setItem("s4price", JSON.stringify(s4pprice));
        localStorage.setItem("s5price", JSON.stringify(s5pprice));
        localStorage.setItem("s6price", JSON.stringify(s6pprice));
    }


    setSeller = num => {
        localStorage.setItem("CurrSeller", num)
        window.location.href="/products"
    }

    logOut = () => {
        localStorage.removeItem("Auth");
        this.props.showAlertLogout();
        window.location.href="/login"
        
      }

    render(){

        return(

            <div className="supSeller">
            <button ref={this.logoutButton} className="logoutButton" onClick={this.logOut}>Logout</button>
            <button ref={this.cartButton} className="cartButton" onClick={() => this.cartChild.current.showCartList()}><img src={require('./../assets/shopping-cart.svg')}/></button>
            <CartList ref={this.cartChild}/>
            <div className="sellerPage">
                    <div className="heaDing">
                        <h3>SELLERS</h3>
                    </div>
                    <div className="sellerList">
                        <button onClick={() => this.setSeller(1)} className="seller">
                            <h6>Seller 1</h6>
                        </button>
                        <button onClick={() => this.setSeller(2)} className="seller">
                            <h6>Seller 2</h6>
                        </button>
                        <button onClick={() => this.setSeller(3)} className="seller">
                            <h6>Seller 3</h6>
                        </button>
                        <button onClick={() => this.setSeller(4)} className="seller">
                            <h6>Seller 4</h6>
                        </button>
                        <button onClick={() => this.setSeller(5)} className="seller">
                            <h6>Seller 5</h6>
                        </button>
                        <button onClick={() => this.setSeller(6)} className="seller">
                            <h6>Seller 6</h6>
                        </button>                      
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

Sellers.propTypes = {
    showAlertLogout : PropTypes.func
    
}

export default connect(
    null,  mapDispatchToProps
   )(Sellers);