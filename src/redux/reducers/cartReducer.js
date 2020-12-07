import { ADD_TO_SHOPPINGCART } from "../actionTypes";

const initialState = [];

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_SHOPPINGCART:
      const cartItem = action.payload;
      const product = state.shoppingCart.find(
        item => item.product === cartItem.id
      );
      if (product)
        return {
          shoppingCart: state.shoppingCart.map(item =>
            item.product === product.product ? cartItem : item
          )
        };

      return {
        shoppingCart: [...state.shoppingCart, cartItem]
      };
    default:
      return state;
  }
}

export default cartReducer;
