
export const GETPRODUCTSLIST = "GETPRODUCTSLIST"
export const ADDTOCART ="ADDTOCART"

export const dispatchProductList = (data)=> dispatch=>{
    return dispatch({
        type : GETPRODUCTSLIST,
        payload : data 
    })
}


export const dispatchAddTocart=(data,history)=>dispatch=>{
    history.push('/cart')
    return dispatch({
        type:ADDTOCART,
        payload:data
    })
}