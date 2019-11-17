const initialState ={
  cart: []
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'ADDTOCART':{
        return{
          ...state,
          cart  : state.cart.concat(action.payLoad)
        }
      }
      default:
        return state;
      }
   }
   