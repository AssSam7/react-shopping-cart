import ProductsList from "../products-list/products-list.component";
import styled from "styled-components";

const ProductsWrapper = styled.div``;

const ProductsHeader = styled.div`
  font-weight: 300;
  padding: 1rem 3rem;
  padding-top: 2rem;
  border-bottom: 1px solid #e7e7e7;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  column-gap: 2rem;
  align-items: center;

  @media only screen and (max-width: 420px) {
    display: none;
  }
`;

const Products = ({ products }) => (
  <ProductsWrapper>
    <ProductsHeader>
      <h3>Product</h3>
      <h3>Price</h3>
      <h3>Quantity</h3>
      <h3>Subtotal</h3>
    </ProductsHeader>
    {products.map((product) => (
      <ProductsList product={product} key={product.id} />
    ))}
  </ProductsWrapper>
);

export default Products;
