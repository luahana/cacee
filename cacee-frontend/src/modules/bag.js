import { createAction, handleActions } from 'redux-actions';

const OPEN_MENU = 'bag/OPEN_MENU';
const CLOSE_MENU = 'bag/CLOSE_MENU';
const ADD_ITEM = 'bag/ADD_ITEM';

export const openMenu = createAction(OPEN_MENU);
export const closeMenu = createAction(CLOSE_MENU);
export const addItem = createAction(ADD_ITEM, item => item);

const addItemToBag = (bagItems, itemToAdd) => {
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

const initialState = {
  isMenuOpen: false,
  bagItems: [],
};

const bag = handleActions(
  {
    [OPEN_MENU]: state => ({
      ...state,
      isMenuOpen: true,
    }),
    [CLOSE_MENU]: state => ({
      ...state,
      isMenuOpen: false,
    }),
    [ADD_ITEM]: (state, { payload: item }) => ({
      ...state,
      bagItems: addItemToBag(state.bagItems, item),
    }),
  },
  initialState,
);

export default bag;
