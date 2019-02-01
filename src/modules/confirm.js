import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

const CONFIRM_OPEN = 'confirm/CONFIRM_OPEN';
const CONFIRM_CLOSE = 'confirm/CONFIRM_CLOSE';

export const confirmOpen = createAction(CONFIRM_OPEN);
export const confirmClose = createAction(CONFIRM_CLOSE);
export const confirmMessage = message => dispatch => new Promise((resolve) => {
  dispatch(confirmOpen({
    message,
    callback: (result) => {
      resolve(result);
      dispatch(confirmClose());
    },
  }));
});

const initialState = {
  show: false,
  message: null,
  callback: null,
};

export default handleActions({
  [CONFIRM_OPEN]: (state, action) => produce(state, (draft) => {
    draft.show = true;
    draft.message = action.payload.message;
    draft.callback = action.payload.callback;
  }),
  [CONFIRM_CLOSE]: state => produce(state, (draft) => {
    draft.show = false;
    draft.message = null;
    draft.callback = null;
  }),
}, initialState);
