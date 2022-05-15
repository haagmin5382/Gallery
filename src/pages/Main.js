import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Images = styled.img`
  width: 100%;
  height: 40vh;
  cursor: pointer;
`;
const importAllImages = image => {
  return image.keys().map(image);
};
export const images = importAllImages(
  require.context('../../public/Images', false, /\.(png|jpe?g|svg)$/),
);

const Main = () => {
  const [ModalOpened, setModalOpened] = useState(false);

  const [imageIndex, setImageIndex] = useState(0);

  return (
    <ImagesContainer>
      {images.map((image, idx) => {
        return (
          <Images
            key={idx}
            src={
              process.env.PUBLIC_URL +
              `./Images/${image.split('/')[3].split('.')[0]}.jpg`
            }
            onClick={() => {
              setModalOpened(!ModalOpened);
              setImageIndex(idx);
            }}
          />
        );
      })}
      {ModalOpened ? (
        <Modal
          setModalOpened={setModalOpened}
          backgroundHeight={40 * Math.ceil(images.length / 3)}
          imageIndex={imageIndex}
        />
      ) : null}
    </ImagesContainer>
  );
};

export default Main;
