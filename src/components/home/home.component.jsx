import { connect } from "react-redux";
import Products from "../products/products.component";

import {
  numberOfItems,
  calculateTotal,
  calculateTotalDiscount,
  calculateShipping,
} from "../../redux/cart/cart.utils";

import "./home.styles.scss";
import OrderSummary from "../order-summary/order-summary.component";
import DeliveryAvailability from "../delivery-availability/delivery-availability.component";

const Home = (props) => {
  console.log("props", props);
  return (
    <div className="container">
      <div className="shopcart">
        <h1 className="shopcart__title">Shopping cart</h1>
        <div className="shopcart__container">
          <Products products={props.products} />
          <div className="info">
            <DeliveryAvailability delivery={props.delivery} />
            <OrderSummary
              numberOfItems={numberOfItems(props.products)}
              total={calculateTotal(props.products)}
              totalDiscount={calculateTotalDiscount(
                props.products,
                props.discount
              )}
              standardShipping={calculateShipping(
                props.delivery,
                props.selectedPinCode
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
    delivery: state.cart.deliveryAvailability,
    discount: state.cart.discount,
    selectedPinCode: state.cart.selectedPinCode,
  };
};

export default connect(mapStateToProps)(Home);
