import React, { Component } from 'react'
import CartItem from './CartItem'

class CartList extends Component {

    constructor(){
        super()
        this.currentDiv = React.createRef();

        this.state = {
            list : 0
        }
    }

    updateList = () => {
        let ia = JSON.parse(localStorage.getItem("ItemArrPrice"));
        let tValue = 0;


        for(let i=0;i<ia.length;i++){
            tValue = parseInt(ia[i]) + tValue;
        }

        

        this.setState({
            list : tValue
        })
        
        
    }

    hideCurrentDiv = () => {
        this.currentDiv.current.style.right = "-30%";
    }

    showCartList = () => {
        this.currentDiv.current.style.right = "1%";
        this.updateList();
    }

    

    render(){
        let iaL;
        let ia=[];
        let iaN=[];
        if(localStorage.getItem("ItemArrPrice")!=null){
             ia = JSON.parse(localStorage.getItem("ItemArrPrice"));
             iaN = JSON.parse(localStorage.getItem("ItemArrName"));
             if(ia.length==0){
                iaL = <p> Cart Empty </p>
             }
        }else{
            iaL = <p> Cart Empty </p>
        }

        if(ia.length > 0){
            iaL = [];

            for(let i=0; i < ia.length;i++){
               
                let name = iaN[i];
                let price = ia[i];


                let temp = <CartItem updatePList={this.updateList} name={name} price={price} listIndex={i} />
                iaL.push(temp);
            }
        }

        return(
            
            <div className="cartList" ref={this.currentDiv}>
                <div onClick={this.hideCurrentDiv} className="buttonArrange">
                    <button className="preCartListButton">&times;</button>
                </div>
                <div class="innerList">
                    {iaL}
                </div>
                <div className="totalDiv">
                    <div className="totalLine"></div>
                    <b>Total : ${this.state.list}</b>
                </div>
            </div>
            
        );
    }
}


export default CartList;
