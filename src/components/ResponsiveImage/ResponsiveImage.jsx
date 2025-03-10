import { useMediaQuery } from 'react-responsive';
import imgMobile from '../../img/mobile.webp';
import imgTablet from '../../img/tablet.webp';

const ResponsiveImage = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 });

  return (
    <>
      {isMobile && <img src={imgMobile} alt="Mobile" />}
      {isTablet && <img src={imgTablet} alt="Tablet" />}
    </>
  );
};

export default ResponsiveImage;
