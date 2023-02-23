import React from 'react';
import image from './Background.png';

const ImageWithGradient = () => {
  const styles = {
    width: '100%',
    height: '500px',
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent), url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (<div style={styles}></div>);
};

export default ImageWithGradient;