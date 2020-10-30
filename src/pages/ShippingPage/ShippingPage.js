import React, { useContext } from 'react'
import Burger from '../../components/Burger/Burger'
import Button from '../../components/General/Button/Button';
import css from './ShippingPage.module.css'
import { Route } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import ContactData from "../../components/ContactData/ContactData"
import BurgerContext from '../../Context/BurgerContext'
const ShippingPage =(props)=>{
const burgerCtx = useContext(BurgerContext)

const cancelOrder =()=>{
    props.history.goBack()
}

const showContactData=()=>{
    props.history.replace('/ship/contact')
}


return (
    <div className={css.ShippingPage}>
        <h1>{<CurrencyFormat decimalScale={2} value={burgerCtx.burger.totalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'}/>}</h1>
        <div>
        <Burger/>
        </div>
        <div className={css.Buttons}>
        <Button clicked={cancelOrder} btnType="Danger" text="CANCEL ORDER"/>
        <Button clicked={showContactData} btnType="Success" text="ENTER YOUR DELIVERY ADDRESS"/>
        <Route path="/ship/contact">
            <ContactData/>
        </Route>
        </div>

    </div>
        )
    
}
export default (ShippingPage)
