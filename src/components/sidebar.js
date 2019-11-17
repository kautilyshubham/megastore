import React from 'react';
import SizeButton from '../components/sizeButton';
import { connect } from 'react-redux';


const sidebar = (props)=> {
        return ( 
            <div className="sidebar">
               <p>Select size</p>
               <button className="clear_btn"
               onClick={()=>props.resetFilters()}
               >Clear all</button>
               {
                   props.size.map((item,i)=>{
                    return (
                        <SizeButton 
                        key={i} 
                        text={item} 
                        clicked={()=>props.sizeFilter(item)}
                        addedClass= {(i === props.activeSize) ? "active": ""}
                        
                         />
                    )
                   })
               }
            </div>
         );
    }
 
const mapStateToProps = state =>{
    return{
        size : state.shopReducer.fiters.size,
        activeSize: state.shopReducer.activeFilterCount.sizeFitler
    }
}
const mapDispatchToProps = dispatch => ({
    sizeFilter: (size) => dispatch({ type: 'SIZEFILTER', payLoad: size }),
    resetFilters: ()=> dispatch({ type: 'RESETFILTER' }),
    })


export default connect(mapStateToProps,mapDispatchToProps )(sidebar);