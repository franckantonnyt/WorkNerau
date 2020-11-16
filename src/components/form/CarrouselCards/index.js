import React from 'react';

import Button from '../Button';

import { ContainerCarrouselCards } from './styles';

const CarrouselCards = ({ imageCard, descriptionCard, headerCard }) => {
  return (
    <ContainerCarrouselCards>
      <img src={imageCard} alt='logo card' />
      <div className='footer-card-carrousel'>
        <h1>{headerCard}</h1>
        <p>{descriptionCard}</p>
      </div>
      <Button
        paddingButton='20px'
        borderRadiusButton='0%'
        backgroundButton='transparent'
      />
    </ContainerCarrouselCards>
  );
};

export default CarrouselCards;
