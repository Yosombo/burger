import React, { useState ,useEffect} from 'react'
import  axios  from '../axiosOrders';

const BurgerContext = React.createContext()
const initialState ={
    ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0,
      },

    totalPrice: 0,
    getPrice:0,
    purchasing: false,
    ingredientNames: {
        salad: `SALAD`,
        cheese: `CHEESE`,
        meat: `MEAT`,
        bacon: `BACON`,
      },
    saving: false,
    finished: false,
    error: null
}

const INGREDIENT_PRICES = {
    salad: 1.49,
    meat: 4.49,
    cheese: 1.19,
    bacon: 1.59,
  };
  
export const BurgerStore = props =>{
    
    const[burger, setBurger] = useState(initialState);
 

    const useFinished=(func) =>{
        useEffect(() => {
            if(burger.finished && !burger.error){
           func()
          }
        },[burger.finished])
    }   
    const  saveBurger =(newOrder, token)=>{
    setBurger({
        ...burger, 
        saving: true})

     axios.post(`/orders.json?auth=${token}`, newOrder)
     .then(response => {
        setBurger({
            ...burger, 
            saving: false,
            finished: true,
            error: null})
     }).catch(error =>{
        setBurger({
            ...burger, 
            saving: false,
            finished: true,
            error})
     })
    }

    const clearBurger = ()=>{
        setBurger(initialState)
    }

    const addIngredient =(orts) =>{
        console.log(orts);

        setBurger({
            ...burger, ingredients:{...burger.ingredients, [orts]: burger.ingredients[orts]+1},
            totalPrice: burger.totalPrice + INGREDIENT_PRICES[orts],
     
            purchasing: true},
            )
             
    }

    const removeIngredient =(orts) =>{
        const newPrice = burger.totalPrice - INGREDIENT_PRICES[orts]
        console.log(orts);
        setBurger({
            ...burger, ingredients:{...burger.ingredients, [orts]: burger.ingredients[orts]-1},
            totalPrice: newPrice,
            purchasing: newPrice>0})
    }
    return (
        <BurgerContext.Provider value={{burger, addIngredient, removeIngredient, clearBurger, saveBurger, useFinished}}>
            {props.children}
        </BurgerContext.Provider>
    )
}

export default BurgerContext;
