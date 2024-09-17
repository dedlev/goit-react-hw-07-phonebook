import { RotatingLines } from 'react-loader-spinner';
import { SpinnerWrapper } from './Spinnerstyled';

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <RotatingLines
        visible={true}
        height="48"
        width="48"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </SpinnerWrapper>
  );
};
