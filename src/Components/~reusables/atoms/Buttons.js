import styled from 'styled-components';
import { blue } from '../variables/colors';

const Button = styled.button`
  background-color: ${blue};
  color: white;


  &:hover {
      color: white;
  }
`;

export default Button;
