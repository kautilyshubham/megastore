import React from 'react';
import { Card, Button } from 'antd';

import './component.css';

const { Meta } = Card;

const ShopCard = (props)=>{
        return ( 
            <Card
                className= "shopcard"
                hoverable
                style={{ width: 240 }}
                cover={<img src={props.img} alt={props.name}  />}>
                <Meta 
                title={props.name}
                description={props.category} 
                />
                 <div className="additional">
                     <p className="price">$- {props.price} </p>
                    <Button type="primary" onClick={props.addToCart} disabled={props.addedToCart} >{(props.addedToCart) ? "Added To Cart" :  'Add to card'}</Button>
                 </div>
            </Card>
        )
    }

 
export default ShopCard;