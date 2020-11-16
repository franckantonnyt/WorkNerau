import styled from 'styled-components';

export const ContainerCardImages = styled.div`
  width: 415px;
  height: 404px;
  margin-top: -25%;
  background-color: white;

  img {
    width: 100%;
    height: 72%;
    object-fit: cover;
  }
  .footer-card {
    width: 100%;
    height: 28%;
    display: flex;
    padding: 0px 20px 26px;
    .container-icon-card {
      width: 100px;
      height: 100px;
      display: flex;
      margin-right: 16px;
      align-items: center;
      border-radius: 100%;
      justify-content: center;
      margin-top: -16%;
      background-color: ${(props) => props.backgroundIconCard};
      img {
        width: 50%;
        height: auto;
      }
    }
    p {
      width: 60%;
      font-size: 14px;
      padding-top: 10px;
    }
  }
`;
