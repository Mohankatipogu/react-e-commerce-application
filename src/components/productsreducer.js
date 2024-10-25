import { products } from "./products";

let intialstate={
    allproducts:products,
    cartItems:[]
}

function productReducer(state=intialstate,action){
    if(action.type==='ADD_TO_CART'){
        return {...state,cartItems:[...state.cartItems,{...action.payload,count:1}]}
        
        
    }
        if(action.type==='INC'){
            var cartItems=state.cartItems.map((ci)=>{  
                if(action.payload===ci.id){
                     ci.count++;
                }
                return ci;     
            })
            
            return{...state,cartItems:[...cartItems]}
        }
        if(action.type==='DEC'){
            var cartItems=state.cartItems.map((ci)=>{
                 if(action.payload===ci.id){
                    ci.count--;
                 }
                 return ci;
            })
            return {...state,cartItems:[...cartItems]}
        }
        if(action.type==='Del'){
            var cartItems=[...state.cartItems]
            var cartItems1=cartItems.filter((a)=>{return a.id !=action.payload})
            return{...state,cartItems:[...cartItems1]}
        }
        return state
    }
    

export default productReducer;