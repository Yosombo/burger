import React, { useState, useEffect, useContext } from 'react'
import css from './ContactData.module.css'
import Button from '../General/Button/Button'
import Spinner from '../General/Spinner/Spinner';
import {useHistory} from 'react-router-dom'
import BurgerContext from '../../Context/BurgerContext'
import UserContext from '../../Context/UserContext';

const ContactData = props => {
    const history = useHistory();
    const [name, setName] = useState();
    const [city, setCity] = useState();
    const [street, setStreet] = useState();
    const burgerCtx = useContext(BurgerContext)
    const userCtx = useContext(UserContext)
    useEffect(() => {
        if(burgerCtx.burger.finished && !burgerCtx.burger.error){
            history.replace('/orders')
        }
        return () => {
           burgerCtx.clearBurger()
        }
    },[burgerCtx.burger.finished])

    const changeName= (e)=>{
        setName(e.target.value)
    }
    const changeStreet= (e)=>{
        setCity(e.target.value)
    }
    const changeCity= (e)=>{
        setStreet(e.target.value)
    }

    const saveOrder = ()=>{
    const order ={
      userId: userCtx.state.userId,
      ingredients: burgerCtx.burger.ingredients,
      totalPrice: burgerCtx.burger.totalPrice,
      address: {
        name,
        city,
        street
      },
    }

    burgerCtx.saveBurger(order, userCtx.state.token)

    }

    return (
        <div className={css.ContactData}>
            {burgerCtx.burger.saving ? <Spinner/> : (<div>
            <input onChange={changeName} type="text" name='name' placeholder='Name'/>
            <input onChange={changeStreet} type="text" name='street' placeholder='Street'/>
            <input onChange={changeCity} type="text" name='city' placeholder='City'/>
            <Button text="SUBMIT" btnType="Success" clicked={saveOrder}/>
            </div>)}      
        </div>
    )
    
}

export default ContactData
