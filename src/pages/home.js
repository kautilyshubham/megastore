import React, { Component } from 'react';
import Header from '../components/header';
import ShopCard from '../components/shop-card';
import './page.css';
import Sidebar from '../components/sidebar';
import Cart from '../components/cart';

import { connect } from 'react-redux';

class home extends Component {
    state = { 
        items : this.props.shopData.items,
     }

     componentDidUpdate(prevProps){
         if(prevProps.shopData !== this.props.shopData){
             if(this.props.shopData.activeFilter.size){
                 this.setState({
                    items : this.props.shopData.items.filter(item => item.size.includes(this.props.shopData.activeFilter.size)),
                   
                 })
             }
           
             else{
                this.setState({
                    items : this.props.shopData.items,
                 })
             }
         }
     }

    render() { 
        const latestItems = this.state.items.map(item=>{
                                    return(
                                        <ShopCard
                                        key={item.id} 
                                        id ={item.id}
                                        img={item.img}
                                        name={item.name} 
                                        category={item.category} 
                                        price={item.price}
                                        addToCart={()=>{this.props.addToCart(item); 
                                            this.props.addedToCart(item.id)}}
                                        addedToCart= {item.addedToCart ? true : false }
                                       
                                        >
                                        </ShopCard>
                                    )
                                })


        return ( 
           <div className="app">
               <Header />
               <Cart />
               <div className="container" style={{marginTop: "40px"}}>
                   <Sidebar />
                   <div className="home_right">
                       <div className="top">
                               <input type="text" Search placeholder="Search item"
                               onChange={(e)=>console.log(e)} />
                               <select name="order" id="">
                                   <option value="null">Select Order</option>
                                   <option value="Lowest to highest">Lowest to highest</option>
                                   <option value="Highest to lowest">Highest to lowest</option>
                               </select>
                       </div>
                        {latestItems}
                   </div>
                 
               </div>
           </div>
         );
    }
}

const mapStateToProps = state => ({
        shopData : state.shopReducer,
   })

const mapDispatchToProps = dispatch => ({
        addToCart : (item) =>dispatch({type: 'ADDTOCART', payLoad: item}),
        addedToCart : (itemId)=> dispatch ({type: 'ADDEDTOCART', payLoad: itemId})
    
})
 
export default connect(mapStateToProps, mapDispatchToProps)(home);