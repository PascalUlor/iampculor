import styled from 'styled-components';
import { red, mobileMAxWidth, tabletMaxWidth, white, smallSpace, heading4 } from '../variables'

export const Navbar = styled.nav`
height: 50px;
background: ${red};
display: none;
.fa-bars {
        font-size: ${heading4};
        position: absolute;
        right: ${smallSpace};
        top: ${smallSpace};
        color: ${white};
        display: block;
        cursor: pointer;
        z-index: 5;

        @media (max-width: ${tabletMaxWidth}) {
            display: flex;
        }
    }

@media (max-width: ${tabletMaxWidth}) {
            display: flex;
        }

@media (max-width: ${mobileMAxWidth}) {
    display: flex;
    width: 100%;
    }
`;