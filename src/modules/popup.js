import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';
import { popupTypes } from '../constants/popupData';

const PUSH_POPUP = 'popup/PUSH_POPUP';
const POP_POPUP = 'popup/POP_POPUP';
const OPEN_ALERT = 'popup/OPEN_ALERT';
const OPEN_CONFIRM = 'popup/OPEN_CONFIRM';

const pushPopup = createAction(PUSH_POPUP);
const popPopup = createAction(POP_POPUP);

export const openAlert = createAction(OPEN_ALERT);
export const openConfirm = createAction(OPEN_CONFIRM);
export const closePopup = id => (dispatch) => {
  delete window.popupCallback[id];
  dispatch(popPopup(id));
};
export const openPopup = payload => dispatch => new Promise((resolve) => {
  const id = popupTypes[payload.type || payload];
  window.popupCallback = {
    [id]: () => {
      resolve();
      dispatch(closePopup(id));
    },
  };
  dispatch(pushPopup(payload));
});
export const alert = message => dispatch => new Promise((resolve) => {
  const id = popupTypes.ALERT;
  window.popupCallback = {
    [id]: () => {
      resolve();
      dispatch(closePopup(id));
    },
  };
  dispatch(openAlert({ id, message }));
});
export const confirm = message => dispatch => new Promise((resolve) => {
  const id = popupTypes.CONFIRM;
  window.popupCallback = {
    [id]: (result) => {
      resolve(result);
      dispatch(closePopup(id));
    },
  };
  dispatch(openConfirm({ id, message }));
});

const initialState = {
  openedPopups: [],
};

export default handleActions({
  [PUSH_POPUP]: (state, action) => produce(state, (draft) => {
    const type = action.payload.type || action.payload;
    draft.openedPopups.push({
      type,
      id: type,
      data: action.payload.data,
    });
  }),
  [POP_POPUP]: (state, action) => produce(state, (draft) => {
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
