import { render } from '@testing-library/react';
import React from 'react';
import reactRouterDom from 'react-router-dom';
import '../../App.css';
import Fraction from '../object_detection/App';


class products extends React.Component {
  render(){
  return (
  <div>
    
    <h1 className='products'>object_detection</h1>

  
  <Fraction/>
  

  </div>
  );
  }
}

export default products;