import {  GETPRODUCTSLIST,ADDTOCART } from "./action";


const initialState = {
    productsList : [],
    cartData:[],
    
    isProductsLoading : true,
    isProductDetailLoading : true
}


export const productsReducer = (state=initialState,action)=>{
    switch(action.type){
        case GETPRODUCTSLIST :
            return {
                ...state , 
                productsList : action.payload,
                isProductsLoading : false
            }
        case ADDTOCART:
            return{
                ...state ,
                cartData:[...state.cartData ,action.payload],
                isProductsLoading : false
            }    
        
        default :
            return {...state}  
    }
}




