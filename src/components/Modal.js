import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Background = styled.div`
  position: fixed;
  background-color: rgb(29, 51, 42, 0.5);
  top: 0;
  width: 100vw;
  height: 100vh;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 10vh;
  left: 10vw;
  width: 80vw;
  height: 80vh;

  .leftButton {
    position: absolute;
    top: 50%;
    left: 5%;
    z-index: 999;
    border-radius: 50px;
    background-color: transparent;
    border: transparent;
    color: white;
    cursor: pointer;
  }

  .rightButton {
    position: absolute;
    top: 50%;
    right: 5%;
    z-index: 999;
    border-radius: 50px;
    background-color: transparent;
    border: transparent;
    color: white;
    cursor: pointer;
  }
`;
const ImageContainer = styled.img`
  position: relative;
  width: 80vw;
  height: 80vh;
`;
const Index = styled.div`
  color: white;
  font-size: 30px;
`;

const Modal = ({ setModalOpened, photo, imageIndex, setImageIndex }) => {
  const goPrevious = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(photo.length - 1);
    }
  };

  const goNext = () => {
    if (photo.length - 1 > imageIndex) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };
  window.onkeydown = e => {
    console.log(e.key);
    if (e.key === 'Escape') {
      setModalOpened(false);
    }
    if (e.key === 'ArrowRight') {
      goNext();
    }
    if (e.key === 'ArrowLeft') {
      goPrevious();
    }
  };
  return (
    <Background onClick={() => setModalOpened(false)}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <button className="leftButton" onClick={() => goPrevious()}>
          <AiOutlineArrowLeft size="50" />
        </button>
        <button className="rightButton" onClick={() => goNext()}>
          <AiOutlineArrowRight size="50" />
        </button>
        <ImageContainer src={photo[imageIndex]} />
        <Index>
          {imageIndex + 1}/{photo.length}
        </Index>
      </ModalContainer>
    </Background>
  );
};

Modal.propTypes = {
  setModalOpened: PropTypes.func,
  backgroundHeight: PropTypes.number,
  photo: PropTypes.any,
  imageIndex: PropTypes.number,
  setImageIndex: PropTypes.func,
};

export default Modal;
