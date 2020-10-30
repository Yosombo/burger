import React, { useState, useEffect, useContext,useRef } from 'react'
import css from './ContactData.module.css'
import Button from '../General/Button/Button'
import Spinner from '../General/Spinner/Spinner';
import {useHistory} from 'react-router-dom'
import BurgerContext from '../../Context/BurgerContext'
import UserContext from '../../Context/UserContext';
import deliverImg from '../../assets/images/deliver.png'

const ContactData = props => {
    const history = useHistory();
    const [name, setName] = useState();
    const [city, setCity] = useState();
    const [street, setStreet] = useState();
    const burgerCtx = useContext(BurgerContext)
    const userCtx = useContext(UserContext)
    const deliverRef = useRef();
    const inputRef = useRef();
    const addClass = () =>{
        inputRef.current.style.opacity='0';
        deliverRef.current.style.transform="translateX(100vw)";
        deliverRef.current.style.opacity="0.3";

      }


    useEffect(() => {
        if(burgerCtx.burger.finished && !burgerCtx.burger.error){
         addClass()
         setTimeout( ()=>{
            history.replace('/orders')
         }, 1000)

        }
        return () => {
            setTimeout( ()=>{
                burgerCtx.clearBurger()
             }, 1000)
          
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
            <img ref={deliverRef} className={css.Emoji} src={deliverImg}></img>
            {burgerCtx.burger.saving ? <Spinner/> : (<div ref={inputRef} className={css.ContactData__content}> 
            <input onChange={changeName} type="text" name='name' placeholder='Name'/>
            <input onChange={changeStreet} type="text" name='street' placeholder='Street'/>
            <input onChange={changeCity} type="text" name='city' placeholder='City'/>
            <span >
            <Button text="SUBMIT" btnType="Success" clicked={saveOrder}/>
            </span>
            </div>)}      
        </div>
    )
    
}

export default ContactData
