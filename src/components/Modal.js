import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { images } from '../pages/Main';

const Background = styled.div`
  position: absolute;
  background-color: rgb(29, 51, 42, 0.5);
  width: 300vw;
  height: ${props =>
    props.backgroundHeight ? `${props.backgroundHeight}vh` : null};
`;

const ModalContainer = styled.img`
  position: fixed;
  top: 10vh;
  left: 10vw;
  width: 80vw;
  height: 80vh;
  background-color: white;
`;

const Modal = ({ setModalOpened, backgroundHeight, imageIndex }) => {
  console.log(images[0].split('/')[3].split('.')[0]);
  console.log(images[imageIndex].split('/')[3].split('.')[0]);
  return (
    <Background
      onClick={() => setModalOpened(false)}
      backgroundHeight={backgroundHeight}
    >
      <ModalContainer
        src={
          process.env.PUBLIC_URL +
          `./Images/${images[imageIndex].split('/')[3].split('.')[0]}.jpg`
        }
      />
    </Background>
  );
};

Modal.propTypes = {
  setModalOpened: PropTypes.func,
  backgroundHeight: PropTypes.number,
  imageIndex: PropTypes.number,
};

export default Modal;
