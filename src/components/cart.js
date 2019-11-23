import React, {Component } from 'react';
import {Icon} from  'antd';

import { connect } from 'react-redux';




class Cart extends Component {
    state = { 
        total: 0,
        cartItems: []
     }

     componentDidUpdate = (prevProps)=>{
         if(prevProps !== this.props){
             this.setState({
                 isOpen : this.props.isCartOpen,
                 cartItems: this.props.cartItems
             })
         }
     }

     
    render() { 
        console.log(this.props.cartItems);
        const cartItems = ( this.state.cartItems.length ?
            this.state.cartItems.map(item=>{
                return(
                     <div className="card_item" key={item.id}>
                         
                        <img src={item.img} alt="" className="card_item_img" />
                        <h5>{item.name}</h5>
                         <span>Quantity: <b>{item.quantity}</b> </span>
                        <div className="quantity_buttons">
                            <button onClick={()=>this.props.increaseQuantity(item.id)}>+</button>
                            <button onClick={()=>this.props.decreaseQuantity(item.id)}>-</button>
                        </div>
                        <button className="delete_item_button"
                        onClick={()=>this.props.itemRemoved(item.id)}
                        ><Icon type="delete" theme="filled" className="delete_item" /></button>
                <span className="item_price">${item.price * item.quantity}</span>
                    </div>
                )
            }) : <h3 
            style={{position: 'relative', 
            top: '40%', textAlign: 'center',opacity: '0.5'}}>Your cart is empty &#9785;</h3>
        )
        
        return ( 
            <div className={`cart_box ${(this.state.isOpen) ? 'open': 'close'}`}>
                <div className="cart_heading">
                    <h3>You Need To pay: <b>${this.props.data.cartTotal}</b></h3>
                <button className="cart_close_button" onClick={()=>{this.setState({isOpen: false})}} >
                    <Icon type="close" /></button>
                </div>
                <div className="cart_items">
                {cartItems}
                </div>
                <button className="checkout_button"><span>checkout</span></button>
            </div>
         );
    }
}

const mapStoreToprops = state =>(
    {
      data: state.cartReducer,
      cartItems  : state.cartReducer.cartItems,
      isCartOpen: state.cartReducer.isCartOpen,
    }
)
    
const mapDispatchToProps = dispatch => ({
    increaseQuantity: (itemId)=> dispatch({type: 'INCREASEQUANTITY', payLoad: itemId}),
    decreaseQuantity: (itemId)=> dispatch({type: 'DECREASEQUANTITY', payLoad: itemId}),
    itemRemoved : (itemId)=> dispatch({type: "ITEMREMOVED", payLoad: itemId})
})

 
export default connect(mapStoreToprops,mapDispatchToProps)(Cart) ;