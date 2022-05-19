import React, { useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { useState } from 'react';

const GalleryContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ImageRegister = styled.label`
  width: 98%;
  height: 39vh;
  margin-left: 1%;
  border: 2px dotted black;
  border-radius: 20px;
  text-align: center;
  line-height: 39vh;
  font-size: 30px;
  cursor: pointer;
`;

const ImagesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  img {
    width: 100%;
    height: 40vh;
    cursor: pointer;
    border-radius: 10px;
  }
  span {
    position: absolute; // 이미지 위에 span 태그로 된 텍스트가 올라가게 된다.
    top: 1%;
    right: 1%;
    color: gray;
    font-size: 30px;
    cursor: pointer;
  }
`;
const importAllImages = image => {
  return image.keys().map(image);
};
export const images = importAllImages(
  require.context('../../public/Images', false, /\.(png|jpe?g|svg)$/),
);

const Gallery = () => {
  const [ModalOpened, setModalOpened] = useState(false); // 모달을 열고 닫는 state

  const [imageIndex, setImageIndex] = useState(0); // 이미지의 index값을 변경하는 state

  const [img, setImg] = useState(
    images.map(image => {
      return (
        process.env.PUBLIC_URL +
        `./Images/${image.split('/')[3].split('.')[0]}.jpg`
      );
    }),
  ); // 이미지 주소의 배열
  const handleImg = e => {
    setImg([URL.createObjectURL(e.target.files[0]), ...img]);
  }; // 사진 추가

  const deleteImg = index => {
    setImg([...img.slice(0, index), ...img.slice(index + 1, img.length)]);
  }; // 사진 삭제
  useEffect(() => {
    const imgs = document.querySelectorAll('.photo');
    const lazyImageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          const bound = lazyImage.getBoundingClientRect();
          // console.log(lazyImage.src);
          console.log(lazyImage.dataset.src);
          // console.log(bound);
          setTimeout(() => {
            if (bound.top <= window.innerHeight && bound.bottom >= 0) {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove('photo');
              lazyImageObserver.unobserve(lazyImage);
            }
          }, 500);
        }
      });
    });
    imgs.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }, []);

  return (
    <div>
      <GalleryContainer>
        <ImageRegister>
          <BsPlusCircleDotted size="50" />
          <input
            accept="image/*"
            onChange={handleImg}
            style={{ display: 'none' }}
            type="file"
          />
        </ImageRegister>

        {img.length === 0
          ? null
          : img.map((el, idx) => {
              return (
                <ImagesContainer key={idx}>
                  <img
                    className="photo"
                    data-src={el}
                    onClick={() => {
                      setModalOpened(!ModalOpened);
                      setImageIndex(idx);
                    }}
                  />
                  <span
                    onClick={() => {
                      deleteImg(idx);
                    }}
                  >
                    &times;
                  </span>
                </ImagesContainer>
              );
            })}
        {ModalOpened ? (
          <Modal
            setModalOpened={setModalOpened}
            setImageIndex={setImageIndex}
            imageIndex={imageIndex}
            img={img}
          />
        ) : null}
      </GalleryContainer>
    </div>
  );
};

export default Gallery;
