import React from 'react';
import { connect } from 'react-redux';
import { Slider } from 'antd';

const sidebar = (props)=> {
    function formatter(value) {
        return `${value * 20}`;
      }
      
        return ( 
            <div className="sidebar">
               <p>Select size</p>
               <button className="clear_btn"
               onClick={()=>props.resetFilters()}
               >Clear all</button>
               {
                   props.size.map((item,i)=>{
                    return (
                        <button 
                        key={i} 
                        text={item} 
                        onClick={()=>{props.sizeFilter(item) }}
                        className= {`size_button ${(i === props.activeSize) ? 'active': null}`}
                        >
                            {item}
                         </button>
                    )
                   })
               }
               <br /><br />
               <p>Select Price Range</p>
               <div>
                    <Slider 
                    range 
                    defaultValue={[80, 90]}
                    step={10}
                    // onChange={'a'}
                    // onAfterChange={'a'}
                    tipFormatter={formatter} 
                    tooltipVisible
                    min = {10}
                    
                    />
                </div>
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