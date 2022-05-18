import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

const Header = () => {
  return (
    <header>
      <Title>Photo Gallery</Title>
    </header>
  );
};

export default Header;
