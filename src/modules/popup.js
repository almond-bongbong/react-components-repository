import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';
import { popupTypes } from '../constants/popupData';

const OPEN_POPUP = 'popup/OPEN_POPUP';
const CLOSE_POPUP = 'popup/CLOSE_POPUP';
const OPEN_ALERT = 'popup/OPEN_ALERT';
const OPEN_CONFIRM = 'popup/OPEN_CONFIRM';

export const openPopup = createAction(OPEN_POPUP);
export const closePopup = createAction(CLOSE_POPUP);
export const openAlert = createAction(OPEN_ALERT);
export const openConfirm = createAction(OPEN_CONFIRM);
export const alert = message => dispatch => new Promise((resolve) => {
  const id = popupTypes.ALERT;
  dispatch(openAlert({
    id,
    message,
    callback: () => {
      resolve();
      dispatch(closePopup(id));
    },
  }));
});
export const confirm = message => dispatch => new Promise((resolve) => {
  const id = popupTypes.CONFIRM;
  dispatch(openConfirm({
    id,
    message,
    callback: (result) => {
      resolve(result);
      dispatch(closePopup(id));
    },
  }));
});

const initialState = {
  openedPopups: [],
};

export default handleActions({
  [OPEN_POPUP]: (state, action) => produce(state, (draft) => {
    const type = action.payload.type || action.payload;
    draft.openedPopups.push({
      type,
      id: type,
      data: action.payload.data,
    });
  }),
  [CLOSE_POPUP]: (state, action) => produce(state, (draft) => {
    const id = action.payload;
    draft.openedPopups.splice(draft.openedPopups.findIndex(item => item.id === id, 1));
  }),
  [OPEN_ALERT]: (state, action) => produce(state, (draft) => {
    draft.openedPopups.push({
      id: action.payload.id,
      type: popupTypes.ALERT,
      data: action.payload,
    });
  }),
  [OPEN_CONFIRM]: (state, action) => produce(state, (draft) => {
    draft.openedPopups.push({
      id: action.payload.id,
      type: popupTypes.CONFIRM,
      data: action.payload,
    });
  }),
}, initialState);
