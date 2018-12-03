import React from 'react';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Img from "gatsby-image"
import enchilada from '../images/enchilada.jpg';
import gauc from '../images/gauc.jpg';
import impanada from '../images/impanada.jpg';
import mac from '../images/mac.jpg';
import pasta from '../images/pasta.jpg';
import sauce from '../images/sauce.jpg';

export default class Pictures extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={6}
		isPlaying={true}
		touchEnabled={true}
      >
        <Slider>
          <Slide index={0}><img src={enchilada}/></Slide>
          <Slide index={1}><img src={gauc}/></Slide>
          <Slide index={2}><img src={impanada}/></Slide>
		  <Slide index={3}><img src={mac}/></Slide>
		  <Slide index={4}><img src={pasta}/></Slide>
		  <Slide index={5}><img src={sauce}/></Slide>
        </Slider>
		<Dot slide={0} />
		<Dot slide={1} />
		<Dot slide={2} />
		<Dot slide={3} />
		<Dot slide={4} />
		<Dot slide={5} />
      </CarouselProvider>
    );
  }
}