import SHOP_DATA from "../../components/home/home.data";
import CartActionTypes from "./cart.types";
import { incrementQuantityUtil, decrementQuantityUtil } from "./cart.utils";

const INITIAL_STATE = {
  products: SHOP_DATA.products,
  deliveryAvailability: SHOP_DATA.pincode,
  discount: SHOP_DATA.discount,
  selectedPinCode: "560066",
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.INCR_QUANITY:
      console.log(state);
      return {
        ...state,
        products: incrementQuantityUtil(state.products, action.payload),
      };
    case CartActionTypes.DECR_QUANTITY:
      return {
        ...state,
        products: decrementQuantityUtil(state.products, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case CartActionTypes.SET_SELECTED_PIN_CODE:
      return {
        ...state,
        selectedPinCode: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
