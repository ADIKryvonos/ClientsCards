import styled from 'styled-components';

export const Button = styled.button`
  width: 196px;
  height: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  cursor: pointer;
  color: #373737;
  padding: 0;
  background-color: #ebd8ff;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    color: white;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;
