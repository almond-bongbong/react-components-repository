import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

const ALERT_OPEN = 'alert/ALERT_OPEN';
const ALERT_CLOSE = 'alert/ALERT_CLOSE';

export const alertOpen = createAction(ALERT_OPEN);
export const alertClose = createAction(ALERT_CLOSE);

const initialState = {
  show: false,
  message: null,
};

export default handleActions({
  [ALERT_OPEN]: (state, action) => produce(state, (draft) => {
    draft.show = true;
    draft.message = action.payload;
  }),
  [ALERT_CLOSE]: state => produce(state, (draft) => {
    draft.show = false;
  }),
}, initialState);
