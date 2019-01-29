import { css } from 'styled-components';

export const red = '#da032c';
export const blue = '#64b5f6';
export const green = '#438844';

export const hidden = css`
  overflow: hidden;
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
`;

export const alignX = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const alignY = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const alignXY = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
