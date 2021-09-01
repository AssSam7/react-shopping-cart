import styled from "styled-components";

const NotificationWrapper = styled.div`
  background-color: #686de0;
  padding: 1rem;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const DiscountNotification = () => (
  <NotificationWrapper>
    Shop for $5000 or more and get 10% discount on your order
  </NotificationWrapper>
);

export default DiscountNotification;
