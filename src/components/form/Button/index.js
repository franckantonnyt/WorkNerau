import React from 'react';

import { ContainerButton } from './styles';

const Button = ({
  textButton,
  colorButton,
  borderButton,
  paddingButton,
  backgroundButton,
  borderRadiusButton,
}) => {
  return (
    <ContainerButton
      colorButton={colorButton}
      borderButton={borderButton}
      paddingButton={paddingButton}
      backgroundButton={backgroundButton}
      borderRadiusButton={borderRadiusButton}
    >
      {textButton}
    </ContainerButton>
  );
};

export default Button;
