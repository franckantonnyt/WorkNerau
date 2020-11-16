import styled from 'styled-components';

import theme from '../../../styles/theme';

export const ContainerCarrouselCards = styled.div`
  width: 800px;
  height: 400px;
  margin-top: -40%;
  margin-left: -10%;
  margin-right: 100px;
  background-color: white;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .footer-card-carrousel {
    width: 100%;
    height: 28%;
    display: flex;
    flex-direction: column;

    h1 {
      padding: 10px;
      font-size: 19px;
      line-height: 23px;
      color: ${theme.colors.primary};
    }

    p {
      width: 100%;
      font-size: 12px;
      padding: 0px 20px;
      line-height: 22px;
    }
  }
`;
