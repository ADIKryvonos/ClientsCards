import React from 'react';
import { BtnWrap, Button } from './LoadMore.styled';
import { Link, useLocation } from 'react-router-dom';

const LoadMore = ({ onClick }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <BtnWrap>
      <Link to={backLinkHref}>
        <Button type="button">Go back</Button>
      </Link>
      <Button onClick={onClick}>Load More</Button>
    </BtnWrap>
  );
};

export default LoadMore;
