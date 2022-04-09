import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import videos from "../videos/video-1.mp4"

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={videos} />
      <h1>Fraction Analytics </h1>
      <p>we offer you a smart security services</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Secure Now <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
