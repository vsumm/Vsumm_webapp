import { render } from '@testing-library/react';
import React from 'react';
import reactRouterDom from 'react-router-dom';
import '../../App.css';
import LandingPage from '../Videoplayer/LandingPage';

class products extends React.Component {
  render(){
  return (
  <div><h1 className='products'>Object Detection</h1>
  {/* <LandingPage /> */}

  </div>
  );
  }
}

export default products;