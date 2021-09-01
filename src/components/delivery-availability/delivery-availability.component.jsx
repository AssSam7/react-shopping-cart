import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Modal from "react-modal";

import { setSelectedPinCode } from "../../redux/cart/cart.actions";

const DeliveryContainer = styled.div`
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h3`
  font-weight: 500;
`;

const DeliveryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #222;
  padding-bottom: 0.5rem;
`;

const Input = styled.input`
  border: none;
  outline: none;

  &:focus {
    border: none;
    outline: none;
  }
`;

const ChangeHyperLink = styled.a`
  color: #6c5ce7;
  text-transform: uppercase;
  text-decoration: none;

  &:active {
    text-decoration: none;
  }
`;

const DataWrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  /* display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  column-gap: 2rem; */
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const SingleDataWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalCloseIcon = styled.img`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ModalContent = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChangeButton = styled.button`
  cursor: pointer;
  background-color: #ff3f6c;
  border: none;
  outline: none;
  color: #fff;
  padding: 1rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeliveryAvailability = (props) => {
  const { delivery, selectedPinCode, dispatch } = props;
  let pinCodes = Object.keys(delivery);

  const [modalIsOpen, setIsOpen] = useState(false);
  // const [selectedPinCode, setSelectedPinCode] = useState("560066");

  const customStyles = {
    content: {
      width: "30vw",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <DeliveryContainer>
      <Title>Delivery Availability</Title>
      <DeliveryWrapper>
        <InputWrapper>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="assets/icons/LOCATION.png" alt="Location Pin" />
            <Input
              type="text"
              placeholder="Enter Pin code"
              value={selectedPinCode}
              onChange={(e) => dispatch(setSelectedPinCode(e.target.value))}
            />
          </div>

          <ChangeHyperLink href="#" onClick={openModal}>
            Change
          </ChangeHyperLink>
        </InputWrapper>

        <DataWrapper>
          <SingleDataWrapper>
            {delivery[selectedPinCode] &&
            delivery[selectedPinCode].deliveryPrice === 0 ? (
              <img src="/assets/icons/check.png" alt="Check" />
            ) : (
              <img
                src="/assets/icons/close.png"
                width="24"
                height="24"
                alt="Check"
              />
            )}

            <p>Free delivery</p>
          </SingleDataWrapper>
          <SingleDataWrapper>
            {delivery[selectedPinCode] &&
            delivery[selectedPinCode].cashOnDelivery ? (
              <img src="/assets/icons/check.png" alt="Check" />
            ) : (
              <img
                src="/assets/icons/close.png"
                width="24"
                height="24"
                alt="Check"
              />
            )}
            <p>Cash on delivery</p>
          </SingleDataWrapper>
          <SingleDataWrapper>
            {delivery[selectedPinCode] &&
            delivery[selectedPinCode].estimatedDays ? (
              <img src="/assets/icons/check.png" alt="Check" />
            ) : (
              <img
                src="/assets/icons/close.png"
                width="24"
                height="24"
                alt="Check"
              />
            )}
            {delivery[selectedPinCode] &&
            delivery[selectedPinCode].estimatedDays ? (
              <p>
                Estimated delivery in{" "}
                {delivery[selectedPinCode].estimatedDays.min}-
                {delivery[selectedPinCode].estimatedDays.max} days
              </p>
            ) : (
              <p>Estimated delivery is not available</p>
            )}
          </SingleDataWrapper>
        </DataWrapper>
      </DeliveryWrapper>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalContainer>
          <ModalHeader>
            <h3>Change Delivery Address</h3>
            <ModalCloseIcon
              src="/assets/icons/close.png"
              alt="Close Modal"
              onClick={closeModal}
            />
          </ModalHeader>
          <ModalContentWrapper>
            {pinCodes.map((pin) => (
              <ModalContent
                onChange={(e) => dispatch(setSelectedPinCode(e.target.value))}
              >
                <input type="radio" value={pin} name="pincode" />
                <p>{pin}</p>
              </ModalContent>
            ))}
          </ModalContentWrapper>
          <ModalFooter>
            <ChangeButton onClick={closeModal}>Change</ChangeButton>
          </ModalFooter>
        </ModalContainer>
      </Modal>
    </DeliveryContainer>
  );
};

const mapStateToProps = (state) => {
  return { selectedPinCode: state.cart.selectedPinCode };
};

export default connect(mapStateToProps, null)(DeliveryAvailability);
