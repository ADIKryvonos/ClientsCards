import styled from 'styled-components';

export const UserWrap = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  flex-direction: column;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Line = styled.div`
  position: absolute;
  top: 214px;
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const ImgWrap = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  background-color: #ebd8ff;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 178px;
  left: 150px;
`;

export const Img = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const Ul = styled.ul`
  padding: 284px 0 0 0;
  margin: 0;
  gap: 16px;
  display: flex;
  flex-direction: column;
`;

export const Li = styled.li`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  color: #ebd8ff;
  display: flex;
  justify-content: center;
`;

export const PicturWrap = styled.img`
  width: 308px;
  height: 168px;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 36px;
  left: 92px;

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
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: ${complitedStatus => {
    switch (complitedStatus.props) {
      case false:
        return '#ebd8ff';

      case true:
        return '#5CD3A8';

      default:
        return '#ebd8ff';
    }
  }};
`;
