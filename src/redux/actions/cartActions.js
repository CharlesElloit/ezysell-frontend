// import axios from "axios";
import { ADD_TO_SHOPPINGCART } from "../actionTypes";

// export const addToCartAction = productId => async dispatch => {
//   axios
//     .get(`/api/product/${productId}`)
//     .then(response => {
//       dispatch({
//         type: ADD_TO_SHOPPINGCART,
//         payload: {
//           id: response.data.id,
//           name: response.data.name,
//           iamgeUrl: response.data.imageUrl,
//           price: response.data.price
//         }
//       });
//     })
//     .catch(error => {
//       console.log(error.message);
//     });
// };

export const addToCartAction = (productId, state) => async dispatch => {
  let tempCart = state.shoppingCart;
  let product = state.products;
  let cartItem = tempCart.find(item => item.id === productId);
  if (!cartItem) {
    let item = product.find(item => item.id === productId);
    dispatch({ type: ADD_TO_SHOPPINGCART, payload: item });
  }
};
