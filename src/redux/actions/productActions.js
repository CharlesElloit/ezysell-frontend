import {
  REQUEST_PRODUCTS_SENT,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_FAIL,
  REQUEST_PRODUCTS_DETAIL_SENT,
  REQUEST_PRODUCTS_DETAIL_SUCCESS,
  REQUEST_PRODUCTS_DETAIL_FAIL
} from "../actionTypes";
import axios from "axios";
// import data from "../data";

const fetchProductStart = () => ({
  type: REQUEST_PRODUCTS_SENT
});

const fetchProductSuccess = products => ({
  type: REQUEST_PRODUCTS_SUCCESS,
  payload: products
});

const fetchProductFails = error => ({
  type: REQUEST_PRODUCTS_FAIL,
  error: error
});

export const getProductAction = () => async dispatch => {
  dispatch(fetchProductStart());
  axios
    .get("/products")
    .then(res => {
      dispatch(fetchProductSuccess(res.data));
    })
    .catch(error => {
      dispatch(fetchProductFails(error.message));
    });
};

// product details
export const fetchProductDetailStart = () => ({
  type: REQUEST_PRODUCTS_DETAIL_SENT
});

export const fetchProductDetailSuccess = productDetails => ({
  type: REQUEST_PRODUCTS_DETAIL_SUCCESS,
  payload: productDetails
});

export const fetchProductDetailFail = error => ({
  type: REQUEST_PRODUCTS_DETAIL_FAIL,
  error: error
});

export const getProductDetailAction = productId => async dispatch => {
  dispatch(fetchProductDetailStart());
  axios
    .get(`/products/${productId}`)
    .then(res => {
      dispatch(fetchProductDetailSuccess(res.data));
    })
    .catch(error => {
      dispatch(fetchProductDetailFail(error.message));
    });
};
