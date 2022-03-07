import { lightTheme } from '../Theme';
import { SWITCH_THEME } from './themeActions';

const initialState = {
  theme: lightTheme,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};

export default themeReducer;