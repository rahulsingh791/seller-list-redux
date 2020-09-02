import React, { Component } from 'react';


class CartItem extends Component {
    constructor(props){
        super(props);

    }

    removeItem(listIndex){
        let ia = JSON.parse(localStorage.getItem("ItemArrPrice"));
        ia.splice(listIndex,1);       
        localStorage.setItem("ItemArrPrice", JSON.stringify(ia));

        let iaN = JSON.parse(localStorage.getItem("ItemArrName"));
        iaN.splice(listIndex,1);       
        localStorage.setItem("ItemArrName", JSON.stringify(iaN));

        this.props.updatePList();
    }

    render(){
        return(
            <div className="cartItem">
                <span>
                    <img src={require('./../assets/product.png')}/>
                     <b className="itemNameList">{this.props.name}</b> <b className="itemPriceList">${this.props.price}</b>
                    <button onClick={() => this.removeItem(this.props.listIndex)}>&times;</button>
                </span>
            </div>
        );
    }
}

export default CartItem;