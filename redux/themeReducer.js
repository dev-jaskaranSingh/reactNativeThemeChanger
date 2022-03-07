import { darkTheme } from '../Theme';
import { SWITCH_THEME } from './themeActions';

const initialState = {
  theme: darkTheme,
};

const themeReducer = (state = initialState, action) => {
  console.log('@themeReducer : ',action.theme)
  switch (action.type) {
    case SWITCH_THEME:
      return {
        theme: action.theme,
      };
    default:
      return state;
  }
};

export default themeReducer;