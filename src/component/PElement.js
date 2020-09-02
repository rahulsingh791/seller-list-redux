import React, { Component } from 'react'
import {showAlertPadded} from './../redux/index'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';


class PElement extends Component {

    addToCart = () => {


        if(localStorage.getItem("ItemArrName")==null){
            let ia = [this.props.name];
            localStorage.setItem("ItemArrName", JSON.stringify(ia));
        }else{
            let ia = JSON.parse(localStorage.getItem("ItemArrName"));
            ia.push(this.props.name);
            localStorage.setItem("ItemArrName", JSON.stringify(ia));
        }

        if(localStorage.getItem("ItemArrPrice")==null){
            let ia = [this.props.price];
            localStorage.setItem("ItemArrPrice", JSON.stringify(ia));
        }else{
            let ia = JSON.parse(localStorage.getItem("ItemArrPrice"));
            ia.push(this.props.price);
            localStorage.setItem("ItemArrPrice", JSON.stringify(ia));
        }

        this.props.showAlertPadded();
        

       
    }

    render(){
        return(
            <div className="pelement">
                <img src={require('./../assets/product.png')}/>
                <h6>{this.props.name}</h6>
                <h6>${this.props.price}</h6>
                <button onClick={() => this.addToCart()}>Add To Cart</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showAlertPadded : () => dispatch(showAlertPadded())
    }
}

PElement.propTypes = {
    showAlertPadded : PropTypes.func
    
}

export default connect(
    null,  mapDispatchToProps
   )(PElement);