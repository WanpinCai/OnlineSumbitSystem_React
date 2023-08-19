import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Amazing FACTORIES!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden factories of good value and good price of China'
              label='Value'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Get more information of the factories product processing'
              label='Car Lighting'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set material of the product in factorial'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Lighting color of the factorial'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Experience of our factories tour'
              label='Adrenaline'
              path='/get-quote'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
