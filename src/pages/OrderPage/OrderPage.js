import React, { Component } from 'react'
import Spinner from '../../components/General/Spinner/Spinner'
import Order from '../../components/Order/Order'
import * as actions from '../../redux/actions/OrderActions'
import { connect } from 'react-redux';
export class OrderPage extends Component {

    componentDidMount=()=>{
        this.props.loadOrders(this.props.userId);
      }
    render() {

        return (
            <div>
            {this.props.loading ? <Spinner/> : this.props.orders.map(el => <Order key={el[0]} order={el[1]}/>)}
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        orders: state.OrderReducer.orders,
        loading: state.OrderReducer.loading,
        userId: state.SignupLoginReducer.userId
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        loadOrders: (userId)=> dispatch(actions.loadOrders(userId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderPage)
