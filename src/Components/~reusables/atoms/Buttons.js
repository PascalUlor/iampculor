import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { red, white } from '../variables/colors';

export const Button = styled.button`
  background-color: ${red};
  color: white;


  &:hover {
      color: white;
  }
`;

export const LinkButton = styled(Link)`
         font-size: 1rem;
         padding: 0.3em 1em;
         color: white;
         border: 1px solid transparent;
         border-radius: 5px;
         outline: none;
         background: ${red};
         white-space: nowrap;


         &:hover {
           color: white;
         }
       `;

export const SubmitButton = styled(Link)`
font-size: 1rem;
padding: 0.3em 1em;
color: ${white};
border: 1px solid transparent;
border-radius: 5px;
outline: none;
background: ${red};
white-space: nowrap;
text-decoration: none;

&:hover {
  color: rgba(255, 255, 255, 0.6);
}
`;

