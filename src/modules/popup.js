import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

const OPEN_POPUP = 'popup/OPEN_POPUP';
const CLOSE_POPUP = 'popup/CLOSE_POPUP';
const OPEN_ALERT = 'popup/OPEN_ALERT';
const OPEN_CONFIRM = 'popup/OPEN_CONFIRM';

export const openPopup = createAction(OPEN_POPUP);
export const closePopup = createAction(CLOSE_POPUP);
export const openAlert = createAction(OPEN_ALERT);
export const openConfirm = createAction(OPEN_CONFIRM);

const initialState = {
  show: false,
  type: null,
  data: null,
};

export default handleActions({
  [OPEN_POPUP]: (state, action) => produce(state, (draft) => {
    draft.show = true;
    draft.type = action.payload.type;
    draft.data = action.payload.data;
  }),
  [CLOSE_POPUP]: state => produce(state, (draft) => {
    draft.show = false;
  }),
}, initialState);
