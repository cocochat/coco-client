import styled, {css} from 'styled-components';

export const Label = styled.label`
  font-family: 'Gotham';
  font-size: 11px;
  color: ${props => props.theme.colors.black};
  letter-spacing: 1px;
  line-height: 18px;
  text-transform: uppercase;
  font-weight: bold;
`;
