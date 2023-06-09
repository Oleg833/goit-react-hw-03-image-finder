import css from './Loader.module.css';
import { SpinnerRound } from 'spinners-react';

const Loader = () => {
  return (
    <div className={css.box}>
      <SpinnerRound size="100%" />
    </div>
  );
};
export default Loader;
