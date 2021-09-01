import styled from "styled-components";
import { useMediaQuery } from "beautiful-react-hooks";

const HeaderContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 420px) {
    width: 100%;
  }
`;

const HeaderMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 420px)");

  return (
    <div style={{ backgroundColor: "#341f97", padding: "1rem" }}>
      <HeaderContainer>
        <h1>TEST</h1>
        <HeaderMenuWrapper>
          {!isMobile && <p>Track Order</p>}
          {/* <img
            src="/assets/icons/search.png"
            alt="Search"
            width="20"
            height="20"
          /> */}
          <img src="/assets/icons/user.png" alt="User" width="40" height="40" />
          <img
            src="/assets/icons/shopping.png"
            alt="Cart"
            width="40"
            height="40"
          />
        </HeaderMenuWrapper>
      </HeaderContainer>
    </div>
  );
};

export default Header;
