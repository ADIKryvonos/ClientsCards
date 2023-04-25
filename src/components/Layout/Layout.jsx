import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Link, Main, Nav } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </Nav>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
