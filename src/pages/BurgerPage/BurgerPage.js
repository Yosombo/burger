import React, { Component } from "react";
import Spinner from "../../components/General/Spinner/Spinner";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/General/Modal/Modal";
import OrderSummery from "../../components/OrderSummery/OrderSummery";
import { withRouter } from 'react-router-dom';




class BurgerPage extends Component {
  state = {
    confirmOrder: false,
  };


  continueOrder =()=>{

  this.props.history.push({
    pathname: '/ship',
})
  this.closeConfirmModal()
  }

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {

    return (
      <div>
        <Modal show={this.state.confirmOrder} closeConfirmModal={this.closeConfirmModal}>
          {this.state.loading ? <Spinner/> : 
          <OrderSummery
          onCancel={this.closeConfirmModal}
          onContinue={this.continueOrder}
          />}
        </Modal>

        <Burger/>

        <BuildControls
          showConfirmModal={this.showConfirmModal}
        />
      </div>
    );
  }
}

export default withRouter(BurgerPage) ;
