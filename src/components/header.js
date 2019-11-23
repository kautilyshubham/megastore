import React, { Component } from 'react';
import { Icon, Badge  } from 'antd';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

import './component.css'

class Header extends Component {
  state = {
      cartCount: this.props.cartData.cartItems.length,
      cartData: this.props.cartData
  };

  componentDidUpdate(prevProps){
     if(prevProps.cartData !== this.props.cartData){
        this.setState({
         cartCount: this.props.cartData.cartItems.length
        })
     }

  }

  render() {
    return (
      <div className="header">
         <div className="container" style={{justifyContent: 'space-between'}}>
             <Link to="/" className="logo" >Megastore</Link>
               {/* <nav>
                  <ul>
                     <li><Link className="nav_link" to="/about">About</Link></li>
                     <li><Link className="nav_link" to="/shop">Shop</Link>
                              <ul className="sub_menu">
                                 <li><Link className="nav_link" to="/shop">Men</Link></li>
                                 <li><Link className="nav_link" to="/shop">Women</Link></li>
                              </ul>
                     </li>
                     <li><Link className="nav_link" to="/">Contact</Link></li>
                  </ul>
               </nav> */}
              <Link to="" className="cart_icon" 
              onClick={(e)=>(this.state.cartCount) ? this.props.openCartTray : alert("Your cart is empty")}> 
              <Icon type="shopping-cart"  />
              <Badge count={this.state.cartCount}></Badge>
              </Link>
         </div>
       
      </div>
        
        );
  }
}

const mapStateToProps = state => ({
   cartData: state.cartReducer,

});

const mapDispatchToProps = dispatch =>({
   openCartTray : ()=> {dispatch({type: 'OPENCARTTRAY'})}
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);