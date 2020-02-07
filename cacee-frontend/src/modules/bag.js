import { createAction, handleActions } from 'redux-actions';
import {
  addItemToBag,
  removeItemToBag,
  changeQuantityOfItem,
  calculateTotalPriceOfItems,
  countTotalItem,
} from './bag.utils';

const OPEN_MENU = 'bag/OPEN_MENU';
const CLOSE_MENU = 'bag/CLOSE_MENU';
const ADD_ITEM = 'bag/ADD_ITEM';
const REMOVE_ITEM = 'bag/REMOVE_ITEM';
const CHANGE_QUANTITY = 'bag/CHANGE_QUANTITY';
const TOGGLE_MENU = 'bag/TOGGLE_MENU';
const TOTAL_PRICE = 'bag/TOTAL_PRICE';
const COUNT_ITEM = 'bag/COUNT_ITEM';

export const openMenu = createAction(OPEN_MENU);
export const closeMenu = createAction(CLOSE_MENU);
export const toggleMenu = createAction(TOGGLE_MENU);
export const addItem = createAction(ADD_ITEM, item => item);
export const removeItem = createAction(REMOVE_ITEM, item => item);
export const changeQuantity = createAction(CHANGE_QUANTITY, (index, value) => ({
  index,
  value,
}));
export const calculateTotalPrice = createAction(TOTAL_PRICE);
export const countItem = createAction(COUNT_ITEM);

const initialState = {
  isMenuOpen: false,
  bagItems: [],
  totalPrice: 0,
  itemCount: 0,
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
    [TOGGLE_MENU]: state => ({
      ...state,
      isMenuOpen: !state.isMenuOpen,
    }),
    [ADD_ITEM]: (state, { payload: item }) => ({
      ...state,
      bagItems: addItemToBag(state.bagItems, item),
    }),
    [REMOVE_ITEM]: (state, { payload: item }) => ({
      ...state,
      bagItems: removeItemToBag(state.bagItems, item),
    }),
    [CHANGE_QUANTITY]: (state, { payload: val }) => ({
      ...state,
      bagItems: changeQuantityOfItem(state.bagItems, val),
    }),
    [TOTAL_PRICE]: state => ({
      ...state,
      totalPrice: calculateTotalPriceOfItems(state.bagItems),
    }),
    [COUNT_ITEM]: state => ({
      ...state,
      itemCount: countTotalItem(state.bagItems),
    }),
  },
  initialState,
);

export default bag;
