import styled from "styled-components";
import Button from "../button/button.component";

const OrderSummaryContainer = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const OrderSummaryTitle = styled.h3`
  font-weight: 600;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const SummaryCalculationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CommonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PrimaryText = styled.h1`
  font-weight: 500;
`;

const Text = styled.h3`
  font-weight: 200;
`;

const TextBold = styled.h3`
  font-weight: 300;
`;

const calculateFinalTotal = (total, discount, shipping) => {
  console.log(
    "Total ",
    total,
    "Discount ",
    discount,
    "Shipping ",
    typeof shipping
  );
  if (discount && !(shipping > 0)) {
    return total - discount;
  } else if (!discount && shipping > 0) {
    return total - shipping;
  } else if (discount && shipping > 0) {
    return total - discount - shipping;
  }
  return total;
};

const OrderSummary = (props) => {
  const { numberOfItems, total, totalDiscount, standardShipping } = props;
  return (
    <OrderSummaryContainer>
      <OrderSummaryTitle>
        Order Summary ({numberOfItems} items)
      </OrderSummaryTitle>
      <SummaryContainer>
        <SummaryCalculationWrapper>
          <CommonWrapper>
            <Text>Subtotal</Text>
            <Text>{total} $</Text>
          </CommonWrapper>
          {totalDiscount && (
            <CommonWrapper>
              <Text>Total Discount</Text>
              <TextBold>-{totalDiscount}$</TextBold>
            </CommonWrapper>
          )}
          <CommonWrapper>
            <Text>Standard Shipping</Text>
            <Text>{standardShipping}</Text>
          </CommonWrapper>
        </SummaryCalculationWrapper>
        <CommonWrapper>
          <TextBold>Order Total</TextBold>
          <PrimaryText>
            {calculateFinalTotal(
              total,
              totalDiscount,
              parseInt(standardShipping)
            )}{" "}
            $
          </PrimaryText>
        </CommonWrapper>
        <CommonWrapper>
          <Button content="Continue Shopping" isTransparent />
          <Button
            content="Checkout"
            isDisabled={standardShipping === "Not Available"}
          />
        </CommonWrapper>
      </SummaryContainer>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
