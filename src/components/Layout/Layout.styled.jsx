import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  gap: 25px;
  justify-content: center;
  flex-direction: column;
  padding: 25px 15px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 15px;
  border-bottom: 1px solid black;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  > nav {
    display: flex;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    background-color: #5cd3a8;
  }
`;
