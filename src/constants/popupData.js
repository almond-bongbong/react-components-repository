import React from 'react';
import * as popups from '../components/Popup';

export const popupTypes = {
  SAMPLE: 'SAMPLE',
  ALERT: 'ALERT',
  CONFIRM: 'CONFIRM',
};

export const getPopupComponent = ({ id, type, data }) => {
  let popupComponent;

  switch (type) {
    case popupTypes.SAMPLE: popupComponent = <popups.Sample id={id} data={data} />; break;
    case popupTypes.ALERT: popupComponent = <popups.Alert id={id} data={data} />; break;
    case popupTypes.CONFIRM: popupComponent = <popups.Confirm id={id} data={data} />; break;
    default: popupComponent = '선택된 모달 팝업이 없습니다.';
  }

  return popupComponent;
};
