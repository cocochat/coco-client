import styled from 'styled-components';
export const FormButton = styled.button`
  border-color: none;
  border-width: 0;
  width: 100%;

  background: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.black};
  font-size: 1.1rem;
  text-transform: uppercase;
  padding: 20px 60px;
  border-radius: 6px;
  align-self: flex-start;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  position: relative;
  display: block;
  text-align: center;
  @media (min-width: 769px) {
    &:hover {
      &:after {
        transform: scale3d(17, 17, 1);
      }
    }
  }
  @media (min-width: 769px) {
    &:after {
      content: "";
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 100%;
      margin: -15px 0 0 1px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: ${props => props.theme.colors.white};
      transform-origin: 100% 50%;
      transform: scale3d(1, 2, 1);
      transition: transform 0.3s, opacity 0.3s;
      transition-timing-function: cubic-bezier(0.7, 0, 0.9, 1);
    }
  }
`;
