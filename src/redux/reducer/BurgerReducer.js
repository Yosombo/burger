const initialState ={
    ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0,
      },

      totalPrice: 0,
      purchasing: false,

    ingredientNames: {
        salad: `Salad`,
        meat: `Meat`,
        cheese: `Cheese`,
        bacon: `Bacon`,
      }
}

const INGREDIENT_PRICES = {
  salad: 150,
  meat: 1500,
  cheese: 250,
  bacon: 800,
};

const reducer = (state = initialState, action)=>{

if(action.type === 'ADD_INGREDIENT') {

return{
  ...state,
  ingredients: {
    ...state.ingredients,
    [action.ortsNer]: state.ingredients[action.ortsNer] +1
  },
  totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ortsNer],
  purchasing: true
}
} 
else if (action.type === 'REMOVE_INGREDIENT'){
  const newPrice = state.totalPrice - INGREDIENT_PRICES[action.ortsNer]

  return{
    ...state,
    ingredients: {
      ...state.ingredients,
      [action.ortsNer]: state.ingredients[action.ortsNer] -1
    },
    totalPrice: newPrice,
    purchasing: newPrice>0
  }
}

return state;
}
export default reducer;