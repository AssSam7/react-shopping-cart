import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.3" : "1")};
  padding: ${(props) => (props.isTransparent ? "0" : "1rem 2rem")};
  background-color: ${(props) =>
    props.isTransparent ? "transparent" : "#4834d4"};
  color: ${(props) => (props.isTransparent ? "#4834d4" : "#fff")};
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

const Button = (props) => (
  <StyledButton {...props} disabled={props.isDisabled}>
    {props.content}
  </StyledButton>
);

export default Button;
