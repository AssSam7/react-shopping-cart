export const incrementQuantityUtil = (products, productToIncr) => {
  const item = products.find((product) => product.id === productToIncr.id);
  if (item.quantity) {
    return products.map((item) =>
      item.id === productToIncr.id
        ? {
            ...item,
            quantity: item.quantity + 1,
            subTotal: item.subTotal + item.price,
          }
        : item
    );
  } else {
    return products.map((item) =>
      item.id === productToIncr.id
        ? {
            ...item,
            quantity: 1,
            subTotal: item.price,
          }
        : item
    );
  }
};

export const decrementQuantityUtil = (products, productToDecr) => {
  console.log(productToDecr);
  const item = products.find((product) => product.id === productToDecr.id);
  if (item.quantity >= 1) {
    return products.map((item) =>
      item.id === productToDecr.id
        ? {
            ...item,
            quantity: item.quantity - 1,
            subTotal: item.subTotal - item.price,
          }
        : item
    );
  }
  return products;
};

export const calculateTotal = (products) => {
  return products.reduce((acc, curr) => acc + (curr.subTotal || 0), 0);
};

export const numberOfItems = (products) => {
  return products.filter((product) => product.quantity).length;
};

export const calculateTotalDiscount = (products, discount) => {
  const total = calculateTotal(products);
  if (total > discount.minTotal) {
    return total * (discount.discountPercentage / 100);
  } else {
    return 0;
  }
};

export const calculateShipping = (delivery, selectedPinCode) => {
  if (delivery[selectedPinCode]) {
    return delivery[selectedPinCode].deliveryPrice
      ? `${delivery[selectedPinCode].deliveryPrice}$`
      : "Free";
  } else {
    return "Not Available";
  }
};
