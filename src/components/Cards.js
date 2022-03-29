import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Software Products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Aims at reducing storage content coming from surveillance '
              label='Fraction VSumm'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='events rarely occur as compared to normal activities'
              label='Fraction Anomaly'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='complete end to end automation of invoice, to shorten the payment life cycle receivable timelines'
              label='Resume Service Automation'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='The task of detecting objects from a video as opposed to images.'
              label='Object Detetcion'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Makes your workflow smoother, your accounts payable team more agile, and fosters better relationships with business partners.'
              label='Invoice Automation'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
