export const initialState={
    basket:[],
    wishlist:[]
};
export  const getBasketTotal=(basket)=>basket?.reduce((amount,item)=>item.price+amount,0);
const reducer=(state, action)=>{
console.log( action);
    switch(action.type){
        case "add-to-cart":
            return{...state,
                basket:[...state.basket, action.item],
            };
            case "REMOVE_FROM_BASKET":
                const  index=state.basket.findIndex(
                    (basketitem)=>basketitem.id===action.id
                ); 
                let  newBasket=[...state.basket];
                if(index>=0){
                    newBasket.splice(index, 1);
                }  else{
                    console.warn(`Cant remove product (id: ${action.id})as itis not in the basket!`)
                } 
                return {...state, basket:newBasket}
                case "add-to-wish":
                    return{...state,
                        wishlist:[...state.wishlist, action.item],
                    };
                    case "REMOVE_FROM_Wish":
                        const  index1=state.wishlist.findIndex(
                            (wishlistitem)=>wishlistitem.id===action.id
                        ); 
                        let  newwishlist=[...state.wishlist];
                        if(index1>=0){
                            newwishlist.splice(index1, 1);
                        }  else{
                            console.warn(`Cant remove product (id: ${action.id})as itis not in the wishlist!`)
                        } 
                        return {...state, wishlist:newwishlist}
          default: return state;  
         
    }
};
export default reducer;