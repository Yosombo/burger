import React, { useEffect, useContext } from 'react'
import Spinner from '../../components/General/Spinner/Spinner'
import Order from '../../components/Order/Order'
import OrderContext from '../../Context/OrderContext'
import UserContext from '../../Context/UserContext';
const OrderPage =props => {
    const userCtx =  useContext(UserContext)
    const orderCtx = useContext(OrderContext)
    useEffect(()=>{
        orderCtx.loadOrders(userCtx.state.userId, userCtx.state.token);
    },[])


    return (
        <div style={{textAlign: "center", color: 'white'}}>
            <h2>Order history</h2>
            
        {orderCtx.state.loading ? <Spinner/> : orderCtx.state.orders.map(el => <Order key={el[0]} order={el[1]}/>)}
        </div>
    )
    
}

export default (OrderPage)
