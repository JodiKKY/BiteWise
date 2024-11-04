import React from 'react'

  const Card = ({ image, title, description }) => {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {image && (
          <img 
            src={image}
            alt={""} 
            className='rounded-t-lg h-48 w-full object-cover'
          />
        )}
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
      </div>
    );
  };
  
  export default Card;