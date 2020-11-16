import React from 'react';

import { ContainerCardImages } from './styles';

const CardImages = ({
  imageCard,
  descriptionCard,
  iconCard,
  backgroundIconCard,
}) => {
  return (
    <ContainerCardImages backgroundIconCard={backgroundIconCard}>
      <img src={imageCard} alt='logo card' />
      <div className='footer-card'>
        <div className='container-icon-card'>
          <img src={iconCard} alt='icone card' className='icon-card' />
        </div>
        <p>{descriptionCard}</p>
      </div>
    </ContainerCardImages>
  );
};

export default CardImages;
