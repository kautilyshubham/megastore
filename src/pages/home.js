import React, { Component } from 'react';
import Header from '../components/header';
import ShopCard from '../components/shop-card';
import './page.css';
import Sidebar from '../components/sidebar';

import { connect } from 'react-redux';

class home extends Component {
    state = { 
        items : this.props.shopData.items
     }

     componentDidUpdate(prevProps){
         if(prevProps.shopData !== this.props.shopData){
             if(this.props.shopData.activeFilter.size){
                 this.setState({
                    items : this.props.shopData.items.filter(item => item.size.includes(this.props.shopData.activeFilter.size))
                 })
             }
             else{
                this.setState({
                    items : this.props.shopData.items
                 })
             }
         }
     }

    render() { 
        console.log(this.props.shopData.activeFilter.size.length);
        const latestItems = this.state.items.map(item=>{
                                    return(
                                        <ShopCard
                                        key={item.id} 
                                        id ={item.id}
                                        img={item.img}
                                        name={item.name} 
                                        category={item.category} 
                                        price={item.price}
                                        addToCart={()=>this.props.addToCart(item)}
                                        >
                                        </ShopCard>
                                    )
                                })


        return ( 
           <div className="app">
               <Header />
               <div className="container" style={{marginTop: "40px"}}>
                   <Sidebar />
                   <div className="home_right">
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
        addToCart : (item) =>dispatch({type: 'ADDTOCART', payLoad: item})
    
})
 
export default connect(mapStateToProps, mapDispatchToProps)(home);