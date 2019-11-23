const initialState ={
    items : [
        {id :"shirt102938", category:"shirt", name: "redbul white shirt", desc: "white check shirt", img:"https://cdn.laredoute.com/products/641by641/3/1/b/31bad1f2bc0ae2bba3286d7b5b02b6e9.jpg", price: 1000, size: ['s','m','xs']},
        {id :"shirt102454938", category:"shirt", name: "full shirt", desc: "white full shirt", img:"https://cdn.laredoute.com/products/641by641/3/1/b/31bad1f2bc0ae2bba3286d7b5b02b6e9.jpg", price: 876, size: ['m','xs','l']},
        {id :"shirt10243938", category:"shirt", name: "levice shir", desc: "white skinni shirt", img:"https://cdn.laredoute.com/products/641by641/3/1/b/31bad1f2bc0ae2bba3286d7b5b02b6e9.jpg", price: 450, size: ['xs','m','xxl']},
        {id :"shirt102444339348", category:"shirt", name: "shirt net get ", desc: "white half shirt", img:"https://cdn.laredoute.com/products/641by641/3/1/b/31bad1f2bc0ae2bba3286d7b5b02b6e9.jpg", price: 350, size: ['xs','s','m']},
        {id :"shirt10256938", category:"shirt", name: "shirt blue", desc: "white check shirt", img:"https://cdn.laredoute.com/products/641by641/3/1/b/31bad1f2bc0ae2bba3286d7b5b02b6e9.jpg", price: 250, size: ['s','l','xl']},
        {id :"shirt10429849384", category:"shirt", name: "shirt breow", desc: "white check shirt", img:"https://cdn.laredoute.com/products/641by641/3/1/b/31bad1f2bc0ae2bba3286d7b5b02b6e9.jpg", price: 150, size: ['s','m','l']},
        {id :"jackt1h456029358", category:"jacket", name: "shirt", desc: "white check shirt", img:"https://cdn.laredoute.com/products/641by641/3/1/b/31bad1f2bc0ae2bba3286d7b5b02b6e9.jpg", price: 750, size: ['xs','m','l']},
        {id :"pant1034338", category:"pant", name: "pant trick", desc: "black jeans", img:"https://cdn.laredoute.com/products/641by641/3/1/b/31bad1f2bc0ae2bba3286d7b5b02b6e9.jpg", price: 650, size: ['s','l','xl']},
        {id :"pant1029368", category:"pant", name: "pant get easy", desc: "grey trouser", img:"https://cdn.laredoute.com/products/641by641/3/1/b/31bad1f2bc0ae2bba3286d7b5b02b6e9.jpg", price: 900, size: ['s','l','xxl']},
    ],
    fiters:{
      size: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
    },
    activeFilter:{
      size: '',

    },
    activeFilterCount:{
      sizeFitler: ""
    }
  }
  
  export default (state = initialState, action) => {
   
      switch (action.type) {
        case "SIZEFILTER":
          return {
            ...state,
            ...state.activeFilter.size = action.payLoad,
            ...state.activeFilterCount.sizeFitler = state.fiters.size.indexOf(action.payLoad)

          };
        case "RESETFILTER":
          return {
            ...state,
            ...state.activeFilter.size = "",
            ...state.activeFilterCount.sizeFitler = ""

          }
          case "ADDEDTOCART": {
            return{
              ...state,
              ...state.items.map(i=>{
                if(i.id === action.payLoad){
                   return(i['addedToCart'] = true)
                }
                else{
                  return i
                }
              })
            }
          }
          case "ITEMREMOVED": {
            return{
              ...state,
              ...state.items.map(i=>{
                if(i.id === action.payLoad){
                   return(i['addedToCart'] = false)
                }
                else{
                  return i
                }
              })
            }
          }
        default:
          return state;
        }
     }
     