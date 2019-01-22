import React from 'react';
import GlobalStyle from './Style/GlobalStyle';

const Wrapper = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default Wrapper;
