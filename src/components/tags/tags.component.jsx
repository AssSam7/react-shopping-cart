import styled from "styled-components";
import { PropTypes } from "prop-types";

const themePicker = (type) => {
  switch (type) {
    case "normal":
      return "#341f97";

    case "gift":
      return "#2d3436";

    default:
      return "#55efc4";
  }
};

const TagWrapper = styled.h4`
  padding: 0.2rem;
  color: #fff;
  background-color: ${(props) => themePicker(props.type)};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

const Tag = (props) => {
  return <TagWrapper type={props.type}>{props.content}</TagWrapper>;
};

Tag.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
};

export default Tag;
