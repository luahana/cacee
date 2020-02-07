export const addItemToBag = (bagItems, itemToAdd) => {
  const { selectedSize, selectedColor, _id } = itemToAdd;
  const existingBagItem = bagItems.find(
    bagItem =>
      bagItem._id === _id &&
      bagItem.selectedSize === selectedSize &&
      bagItem.selectedColor === selectedColor,
  );

  if (existingBagItem) {
    return bagItems.map(bagItem =>
      bagItem._id === _id &&
      bagItem.selectedSize === selectedSize &&
      bagItem.selectedColor === selectedColor
        ? {
            ...bagItem,
            quantity: bagItem.quantity + 1,
            selectedColor: selectedColor,
            selectedSize: selectedSize,
          }
        : bagItem,
    );
  }
  return [
    ...bagItems,
    {
      ...itemToAdd,
      quantity: 1,
      selectedColor: selectedColor,
      selectedSize: selectedSize,
    },
  ];
};

export const removeItemToBag = (bagItems, index) => {
  bagItems.splice(index, 1);
  return bagItems;
};

export const changeQuantityOfItem = (bagItems, val) => {
  const { index, value } = val;
  const quantity = (bagItems[index].quantity =
    bagItems[index].quantity + value);
  if (quantity <= 0) {
    removeItemToBag(bagItems, index);
  }
  return bagItems;
};

export const calculateTotalPriceOfItems = bagItems => {
  return bagItems.reduce(
    (acc, { prices, quantity }) => acc + prices[0] * quantity,
    0,
  );
};

export const countTotalItem = bagItems => {
  return bagItems.reduce((acc, { quantity }) => acc + quantity, 0);
};
