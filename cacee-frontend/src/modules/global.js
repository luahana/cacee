import { createAction, handleActions } from 'redux-actions';

const OPEN_MENU = 'global/OPEN_MENU';
const CLOSE_MENU = 'global/CLOSE_MENU';

export const openMenu = createAction(OPEN_MENU);
export const closeMenu = createAction(CLOSE_MENU);

const initialState = {
  isAdmin: false,
  isMenuOpen: false,
};

const global = handleActions(
  {
    [OPEN_MENU]: state => ({
      ...state,
      isMenuOpen: true,
    }),
    [CLOSE_MENU]: state => ({
      ...state,
      isMenuOpen: false,
    }),
  },
  initialState,
);

export default global;
