import styled from 'styled-components';
import theme from '../../styles/theme';

import backgroundHeaderMenu from '../../assets/images/background-header-home.png';

export const ContainerHome = styled.div`
  width: 100%;
  height: 100%;

  .header-home-container {
    width: 100%;
    height: 765px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background: url(${backgroundHeaderMenu});
    filter: contrast(110%);

    .header-home-container-first {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        #050626 0%,
        rgba(2, 2, 15, 0.381395) 21.83%,
        rgba(0, 1, 4, 0.0988803) 45.62%,
        rgba(0, 0, 0, 0) 57.12%
      );
    }
  }

  .header-home-footer {
    width: 100%;
    height: 22rem;
    display: flex;
    padding: 3rem 15rem 0px;
    align-items: flex-start;
    justify-content: space-between;
    background-color: ${theme.colors.primary};

    h1 {
      color: white;
      width: 60rem;
      font-size: 48px;
      margin-right: 30px;
    }

    p {
      width: 25rem;
      font-size: 14px;
      margin-top: 20px;
      margin-right: 120px;
    }
  }

  body {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .modal-container-services {
      width: 100%;
      height: 404px;
      display: flex;
      padding: 0px 15rem;
      align-items: center;
      justify-content: center;
    }

    .modal-container-first {
      width: 100%;
      height: 654px;
      display: flex;
      padding: 0px 15rem;
      .description-first {
        width: 60%;
        height: 100%;
        padding: 58px;
        background-color: white;

        h1 {
          width: 55%;
          margin-bottom: 58px;
          color: ${theme.colors.secondary};
        }

        .description-first-details {
          width: 80%;
          margin-bottom: 38px;

          p {
            margin-bottom: 30px;
          }
        }
      }

      .movie-first {
        width: 40%;
        height: 100%;
        display: flex;
        padding: 75px;
        align-items: center;
        justify-content: center;

        .movie-container {
          width: 100%;
          height: 100%;
          display: flex;
          margin-left: -145%;
          align-items: center;
          .button-play-movie-first {
            z-index: 1;
            width: 100px;
            height: 80px;
            border-radius: 100%;
            margin-right: -10%;
            box-shadow: 0px 22px 80px rgba(29, 27, 24, 0.07),
              0px 22.2437px 55.4997px rgba(29, 27, 24, 0.0771599),
              0px 23.2607px 48.4373px rgba(29, 27, 24, 0.0756864),
              0px 24.6609px 44.6163px rgba(29, 27, 24, 0.0644444),
              0px 25.9607px 41.3692px rgba(29, 27, 24, 0.0443511),
              0px 26.3799px 36.8572px rgba(29, 27, 24, 0.0210201),
              0px 24.0804px 28.1652px rgba(29, 27, 24, 0.00397918);
          }
          img {
            width: 33rem;
            height: auto;
          }
        }
      }
    }
    .modal-container-secondary {
      width: 100%;
      height: 600px;
      display: flex;

      padding: 0px 15rem;
      .product-secondary {
        width: 60%;
        height: 100%;
        img {
          width: 1000px;
          height: auto;
          margin-left: -30%;
        }
      }

      .description-secondary {
        width: 40%;
        height: 100%;
        display: flex;
        padding-top: 22%;
        align-items: center;
        flex-direction: column;
        justify-content: start;
        h1 {
          margin-bottom: 21px;
          color: ${theme.colors.tertiary};
        }
        p {
          margin-bottom: 35px;
        }
      }
    }

    .modal-container-tertiary {
      width: 100%;
      display: flex;
      height: 540px;
      margin-top: 150px;
      padding-left: 15rem;

      .description-tertiary {
        width: 55%;
        height: 100%;
        display: flex;
        padding: 122px 62px;
        flex-direction: column;
        background-color: ${theme.colors.primary};
        h1 {
          width: 60%;
          margin-bottom: 20px;
          color: ${theme.colors.tertiary};
        }
        p {
          width: 80%;
          color: white;
          margin-bottom: 30px;
        }
      }

      .body-carrousel-tertiary {
        width: 55%;
        display: flex;
        align-items: center;

        .button-carrousel-next {
          width: 100%;
          margin-top: 65%;
          margin-left: -15%;
        }
      }
    }
  }
`;
