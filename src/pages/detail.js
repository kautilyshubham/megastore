import React, { Component, Fragment } from 'react';
import Header from '../components/header'

class ProductDetail extends Component {
    state = { 

     }
    render() { 
        alert(this.props.match.url)
        return ( 
            <Fragment>
                  <Header />
                <div className="container">
                <div className="detail_left">
                <p>this is left</p>
                </div>
                <div className="detail_right">
                <p>this is right</p>
                    
                </div>
            </div>
            </Fragment>
          
         );
    }
}
 
export default ProductDetail;