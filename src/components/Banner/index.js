import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
//   VideoBg,
//   HeroContent,
//   HeroH1,
//   HeroP,
//   HeroBtnWrapper,
//   ArrowForward,
//   ArrowRight,
} from './BannerElements';
import { Button } from '../ButtonElements';
import video from '../../videos/banner-video.mp4';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        
      <VideoBg autoPlay loop muted id='video'>
        <source
          src={video}
          type="video/mp4"
        />
      </VideoBg>
      </HeroBg>
      {/* <HeroContent>
        <HeroH1>My Homepage</HeroH1>
        <HeroP>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent> */}
    </HeroContainer>
  );
};

export default HeroSection;
