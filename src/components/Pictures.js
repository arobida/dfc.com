import React from 'react';
import styled from 'react-emotion';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Img from 'gatsby-image';
import enchilada from '../images/enchilada.jpg';
import gauc from '../images/gauc.jpg';
import impanada from '../images/impanada.jpg';
import mac from '../images/mac.jpg';
import pasta from '../images/pasta.jpg';
import sauce from '../images/sauce.jpg';

const Wrapper = styled.div`
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

export default class Pictures extends React.Component {
  render() {
    return (
      <Wrapper>
        <CarouselProvider naturalSlideWidth={90} naturalSlideHeight={120} totalSlides={6} isPlaying touchEnabled>
          <Slider style={{ borderRadius: `10px` }}>
            <Slide index={0}>
              <img src={enchilada} style={{ width: '100%', height: 'auto' }} />
            </Slide>
            <Slide index={1}>
              <img src={gauc} style={{ width: '100%', height: 'auto' }} />
            </Slide>
            <Slide index={2}>
              <img src={impanada} style={{ width: '100%', height: 'auto' }} />
            </Slide>
            <Slide index={3}>
              <img src={mac} style={{ width: '100%', height: 'auto' }} />
            </Slide>
            <Slide index={4}>
              <img src={pasta} style={{ width: '100%', height: 'auto' }} />
            </Slide>
            <Slide index={5}>
              <img src={sauce} style={{ width: '100%', height: 'auto' }} />
            </Slide>
          </Slider>
          <Dot slide={0} />
          <Dot slide={1} />
          <Dot slide={2} />
          <Dot slide={3} />
          <Dot slide={4} />
          <Dot slide={5} />
        </CarouselProvider>
      </Wrapper>
    );
  }
}
