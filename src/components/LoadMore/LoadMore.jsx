import React from 'react';
import { BtnWrap, Button } from './LoadMore.styled';

const LoadMore = ({ onClick }) => {
  return (
    <BtnWrap>
      <Button onClick={onClick}>Load More</Button>
    </BtnWrap>
  );
};

export default LoadMore;
