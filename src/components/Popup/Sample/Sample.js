import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../Button/Button';
import ButtonGroup from '../../ButtonGroup/ButtonGroup';
import * as popupActions from '../../../modules/popup';

const SamplePopupStyle = styled.div`
  width: 500px;
`;

const Sample = ({ data, PopupActions }) => (
  <SamplePopupStyle>
    <h2>{data}</h2>
    <br />
    <p>
      Lorem ipsum dolor sit amet,
      <br />
      <br />
      consectetur adipisicing elit.
      <br />
      Aliquid asperiores dicta dolorum ducimus
      <br />
      exercitationem expedita harum hic illo,
      <br />
      inventore laboriosam nostrum repellendus
      <br />
      reprehenderit soluta,
      <br />
      <br />
      velit, vero. Animi culpa id mollitia!
      <br />
      Lorem ipsum dolor sit amet,
      <br />
      <br />
      consectetur adipisicing elit.
      <br />
      Aliquid asperiores dicta dolorum ducimus exercitationem expedita harum hic illo,
      <br />
      inventore laboriosam nostrum repellendus reprehenderit soluta,
      <br />
      velit, vero. Animi culpa id mollitia!
      <br />
      Lorem ipsum dolor sit amet,
      <br />
      <br />
      consectetur adipisicing elit.
      <br />
      <br />
      Aliquid asperiores dicta dolorum ducimus exercitationem expedita harum hic illo,
      <br />
      inventore laboriosam nostrum repellendus reprehenderit soluta,
      <br />
      <br />
      <br />
      velit, vero. Animi culpa id mollitia!
      <br />
      Lorem ipsum dolor sit amet,
      <br />
      consectetur adipisicing elit.
      <br />
      Aliquid asperiores dicta dolorum ducimus
      <br />
      exercitationem expedita harum hic illo,
      <br />
      <br />
      inventore laboriosam nostrum repellendus reprehenderit soluta,
      <br />
      velit, vero. Animi culpa id mollitia!
      <br />
      Lorem ipsum dolor sit amet,
      <br />
      consectetur adipisicing elit.
      <br />
      Aliquid asperiores dicta dolorum ducimus
      <br />
      exercitationem expedita harum hic illo,
      <br />
      inventore laboriosam nostrum repellendus reprehenderit soluta,
      <br />
      velit, vero. Animi culpa id mollitia!
      <br />
      <br />
      Lorem ipsum dolor sit amet,
      <br />
      consectetur adipisicing elit.
      <br />
      <br />
      Aliquid asperiores dicta dolorum ducimus
      <br />
      exercitationem expedita harum hic illo,
      <br />
      inventore laboriosam nostrum repellendus reprehenderit soluta,
      <br />
      velit, vero. Animi culpa id mollitia!
      <br />
      Lorem ipsum dolor sit amet,
      <br />
      consectetur adipisicing elit.
      <br />
      Aliquid asperiores dicta dolorum ducimus
      <br />
      <br />
      <br />
      exercitationem expedita harum hic illo,
      <br />
      inventore laboriosam nostrum repellendus reprehenderit soluta,
      <br />
      velit, vero. Animi culpa id mollitia!
      <br />
    </p>
    <br />
    <ButtonGroup>
      <Button theme="blue" onClick={() => PopupActions.alert('hello!')}>Alert</Button>
      <Button theme="blue" onClick={() => PopupActions.confirm('really?')}>Confirm</Button>
    </ButtonGroup>
  </SamplePopupStyle>
);

Sample.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  PopupActions: PropTypes.shape({}),
};

Sample.defaultProps = {
  data: 'default data',
  PopupActions: undefined,
};

export default connect(
  null,
  dispatch => ({
    PopupActions: bindActionCreators(popupActions, dispatch),
  }),
)(Sample);
