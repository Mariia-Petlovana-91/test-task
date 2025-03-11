import { useMediaQuery } from 'react-responsive';

import imgTablet from '../../img/tablet.webp';

const ResponsiveImage = () => {
  const isTablet = useMediaQuery({ maxWidth: 767 });

  return <>{isTablet && <img src={imgTablet} alt="Tablet image" />}</>;
};

export default ResponsiveImage;
