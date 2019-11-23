const initialState ={
  cartItems: [

  ],
  isCartOpen: false,
  cartTotal: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'ADDTOCART':{
        return{
          ...state,
          ...state.cartItems.push({...action.payLoad, ...action.payLoad.quantity = 1}),
          isCartOpen : true,
          cartTotal : state.cartTotal + action.payLoad.price

        }
      }
      case 'OPENCARTTRAY':{
        return{
          ...state,
          isCartOpen : true
        }
      }
      case 'INCREASEQUANTITY':{
        return{
          ...state,
          ...state.cartItems.map(item=>{
            if(item.id === action.payLoad ){
              if(item.quantity <9){
              return(
                item.quantity +=1,
                state.cartTotal = state.cartTotal + item.price
              )}
              else{
              return alert("Quantity can not be more then 10");
              }
            }
            else{
              return null
            }
          })
        }
      }
      case 'DECREASEQUANTITY':{
        return{
          ...state,
          ...state.cartItems.map(item=>{
            if(item.id === action.payLoad){
              if(item.quantity > 1){
              return(
                item.quantity -=1,
                state.cartTotal = state.cartTotal - item.price
              ) 
            }
            else{
              return alert("Quantity can not be less then 1")
            }
          }
          else{
            return null
          }
          })
        }
      }
      case 'ITEMREMOVED':{
        return{
          ...state,
         ...state.cartItems.map(item=>{
            if(item.id === action.payLoad){
              return (
                state.cartTotal = state.cartTotal - (item.quantity * item.price)
                )}
            else{
              return null
            }
          }),
          ...state.cartItems =state.cartItems.filter(item=>{
            return item.id !== action.payLoad
          }),
          ...state.isCartOpen = state.cartItems.length ? true : false

        }
      }
      default:
        return state;
      }
   }
   