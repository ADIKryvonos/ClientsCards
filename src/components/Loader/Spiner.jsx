import { Oval } from 'react-loader-spinner';

export const Spiner = () => {
  return (
    <Oval
      height={100}
      width={100}
      color="#5CD3A8"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#ebd8ff"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
