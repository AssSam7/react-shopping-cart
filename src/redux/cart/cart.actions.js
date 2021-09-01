import CartActionTypes from "./cart.types";

export const incrementQuantity = (item) => ({
  type: CartActionTypes.INCR_QUANITY,
  payload: item,
});

export const decrementQuantity = (item) => ({
  type: CartActionTypes.DECR_QUANTITY,
  payload: item,
});

export const setSelectedPinCode = (pincode) => ({
  type: CartActionTypes.SET_SELECTED_PIN_CODE,
  payload: pincode,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item,
});
