import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/General/Modal/Modal";
import OrderSummery from "../../components/OrderSummery/OrderSummery";
import { useHistory } from 'react-router-dom';

const BurgerPage =(props) =>{ 
  const history =useHistory()
  const [confirmOrder, setConfirmOrder] = useState(false)
  
  const continueOrder =()=>{
    history.push({
    pathname: '/ship',
    })
  closeConfirmModal()
  }

  const showConfirmModal = () => {
    setConfirmOrder(true);
    
  };

  const closeConfirmModal = () => {
    setConfirmOrder(false)
  };



  return (
    <div>
      <Modal show={confirmOrder} closeConfirmModal={closeConfirmModal}>
      <OrderSummery onCancel={closeConfirmModal} onContinue={continueOrder}/>
      </Modal>
      <Burger/>
      <BuildControls showConfirmModal={showConfirmModal}/>
    </div>
  );
  
}

export default BurgerPage;
