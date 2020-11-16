import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: auto;
  height: auto;
  cursor: pointer;
  font-family: 'Commissioner', sans-serif;
  padding: ${(props) =>
    props.paddingButton ? props.paddingButton : '16px 26px'};
  background-color: ${(props) => props.backgroundButton};
  color: ${(props) => (props.colorButton ? props.colorButton : 'white')};
  border: ${(props) => (props.borderButton ? props.borderButton : 'none')};
  border-radius: ${(props) =>
    props.borderRadiusButton ? props.borderRadiusButton : '40px'};
`;
