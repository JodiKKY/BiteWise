import React from 'react';
import Card from '../components/Card/Card';
import Pic from '../assets/1.png';

const Restaurants = () => {
  const cardsData = [
    { title: 'Honeysuckle Restaurant ', description: 'This is one card', image: Pic },
    
  ];

  return (
    <div className='flex flex-wrap justify-center'>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image} // Pass the image prop here
        />
      ))}
    </div>
  );
};

export default Restaurants;