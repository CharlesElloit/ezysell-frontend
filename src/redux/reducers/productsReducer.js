import {
  REQUEST_PRODUCTS_SENT,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_FAIL,
  REQUEST_PRODUCTS_DETAIL_SENT,
  REQUEST_PRODUCTS_DETAIL_SUCCESS,
  REQUEST_PRODUCTS_DETAIL_FAIL
} from "../actionTypes";
import updateObject from "../utility";

const intialState = {
  products: [],
  productDetails: [],
  productUserDetails: [],
  loading: false
};

const fetchProductStart = state => {
  return updateObject(state, { loading: true, products: [] });
};

const fetchProductSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    products: action.payload
  });
};

const fetchProductFail = (state, action) => {
  return updateObject(state, { loading: true, payload: action.payload });
};

//Products Details
const fetchProductDetailStart = state => {
  return updateObject(state, { loading: true, productDetails: [] });
};

const fetchProductDetailSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    productDetails: action.payload
  });
};

const fetchProductDetailSFails = (state, action) => {
  return updateObject(state, {
    loading: true,
    payload: action.payload
  });
};

export default function productReducer(state = intialState, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS_SENT:
      return fetchProductStart(state);
    case REQUEST_PRODUCTS_SUCCESS:
      return fetchProductSuccess(state, action);
    case REQUEST_PRODUCTS_FAIL:
      return fetchProductFail(state, action);
    case REQUEST_PRODUCTS_DETAIL_SENT:
      return fetchProductDetailStart(state);
    case REQUEST_PRODUCTS_DETAIL_SUCCESS:
      return fetchProductDetailSuccess(state, action);
    case REQUEST_PRODUCTS_DETAIL_FAIL:
      return fetchProductDetailSFails(state, action);
    default:
      return state;
  }
}
