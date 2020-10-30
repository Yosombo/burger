import React, { useState } from 'react'
import  axios  from '../axiosOrders';
const OrderContext = React.createContext();

const inititalState ={
    // Load Order
   orders: [], 
   loading: false,
   error: null,
    // Save Order
    saving: false,
    finished: false,
    error: null,
}

export const OrderStore = props =>{
    const[state, setState]=useState(inititalState)
    const loadOrders=(userId, token)=>{
     
        setState({...state, loading: true})
        
         axios.get(`/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
         .then(response =>{
             setState({...state, orders: Object.entries(response.data).reverse()})
             
        }).catch(err => setState({...state, error: err.message}))
    }
    return (
        <OrderContext.Provider value={{state, loadOrders}}>
            {props.children}
        </OrderContext.Provider>
    )
}
export default OrderContext;