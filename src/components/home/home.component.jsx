import { connect } from "react-redux";
import { useMediaQuery } from "beautiful-react-hooks";

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
import DiscountNotification from "../discount-notification/discount-notification.component";

const Home = (props) => {
  const isMobile = useMediaQuery("(max-width: 420px)");

  return (
    <div className="container">
      {props.discount && !isMobile && <DiscountNotification />}
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
