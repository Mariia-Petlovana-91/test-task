import { useMediaQuery } from 'react-responsive';

import imgTablet from '../../img/tablet.webp';

import css from './ResponsiveImage.module.css';

const ResponsiveImage = () => {
  const isTablet = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isTablet && (
        <img className={css.imgTablet} src={imgTablet} alt="Tablet image" />
      )}
    </>
  );
};

export default ResponsiveImage;
