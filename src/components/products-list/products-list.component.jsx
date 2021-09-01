import { connect } from "react-redux";
import styled from "styled-components";
import { useMediaQuery } from "beautiful-react-hooks";

import Tag from "../tags/tags.component";
import {
  incrementQuantity,
  decrementQuantity,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

const ProductWrapper = styled.div`
  padding: 1rem 3rem;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  column-gap: 2rem;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid #e7e7e7;
  }

  @media only screen and (max-width: 420px) {
    grid-template-columns: 3fr 1fr 1fr;
  }
`;

const ProductGiftWrapper = styled.div`
  grid-column: 1 / span 3;
  position: relative;
  margin-top: 2rem;
  background-color: #f4f4f4;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  column-gap: 2rem;
  align-items: center;

  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: -9px;
    left: 10%;

    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #f4f4f4;
  }
`;

const ProductTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ProductContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const ProductName = styled.h4`
  font-family: inherit;
  font-weight: 200;
`;

const ProductDesc = styled.p`
  color: #7f7f7f;
  font-family: inherit;
  font-weight: 100;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProductsList = (props) => {
  const isMobile = useMediaQuery("(max-width: 420px)");
  const { name, price, desc, tagline, planLink, quantity, subTotal, gift } =
    props.product;
  const { dispatch } = props;

  return (
    <ProductWrapper>
      <ProductTitleWrapper>
        <img src="/assets/Earphone.png" alt="Product" />
        <ProductContentWrapper>
          {tagline && <Tag type={"normal"} content={tagline} />}
          <ProductName>{name}</ProductName>
          <ProductDesc>
            {desc.includes("Extended Warranty") ? (
              <>
                <span>{desc.replace("Extended Warranty", "")}</span> <br />
                <p style={{ display: "flex", gap: "0.5rem" }}>
                  <span>Extended Warranty</span>
                  <a href={planLink}>View Plan</a>
                </p>
              </>
            ) : (
              <span>{desc}</span>
            )}
          </ProductDesc>
        </ProductContentWrapper>
      </ProductTitleWrapper>
      <p>{price} $</p>
      <QuantityWrapper>
        <button
          type="button"
          onClick={() => dispatch(decrementQuantity(props.product))}
        >
          <img
            src="/assets/icons/minus.png"
            alt="Decrement"
            width="15"
            height="15"
          />
        </button>
        <p style={{ border: "1px solid #e7e7e7", padding: "0.5rem" }}>
          {quantity || 0}
        </p>
        <button
          type="button"
          onClick={() => dispatch(incrementQuantity(props.product))}
        >
          <img
            src="/assets/icons/plus.png"
            alt="Increment"
            width="15"
            height="15"
          />
        </button>
      </QuantityWrapper>
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>{subTotal || 0} $</p>
        {!isMobile && (
          <img
            src="/assets/icons/DELETE.png"
            alt="Delete"
            onClick={() => dispatch(clearItemFromCart(props.product))}
          />
        )}
      </div>
      {gift && (
        <ProductGiftWrapper>
          <ProductTitleWrapper>
            <img src="/assets/Earphone.png" alt="Product" />
            <ProductContentWrapper>
              <Tag type={"gift"} content={"Gift"} />
              <ProductName>{gift.name}</ProductName>
              <ProductDesc>{gift.desc}</ProductDesc>
            </ProductContentWrapper>
          </ProductTitleWrapper>
          <p>{gift.price} $</p>
          <QuantityWrapper>
            <p>{1}</p>
          </QuantityWrapper>
        </ProductGiftWrapper>
      )}
    </ProductWrapper>
  );
};

export default connect(null)(ProductsList);
