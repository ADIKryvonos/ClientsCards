import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export const Button = styled.button`
  width: 100px;
  height: 35px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  line-height: calc(16 / 18);
  cursor: pointer;
  color: #373737;
  padding: 0;
  background-color: #ebd8ff;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :active {
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    color: white;
  }
`;
