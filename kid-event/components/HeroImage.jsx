import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Dates from './Dates';

const HeroImage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ['hero-image.jpg', 'hero-image2.jpg', 'hero-image3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <Box
      sx={{
        height: '600px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${images.length * 100}%`,
          height: '100%',
          display: 'flex',
          transition: 'transform 1.5s',
          transform: `translateX(-${activeIndex * (100 / images.length)}%)`,
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              width: `${100 / images.length}%`,
              height: '100%',
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(images/${image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: '24px',
              }}
            />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <Typography variant="h5" color="white">
          Welcome to
        </Typography>
        <Typography variant="h1" color="white">
          Kid Events
        </Typography>
        <Typography variant="h5" color="white">
          Find your next activities
        </Typography>
        <Dates/>
      </Box>
    </Box>
  );
};

export default HeroImage;
