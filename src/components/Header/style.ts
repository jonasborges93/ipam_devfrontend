import styled from "styled-components";
import {device} from '../../styles/devices'

export const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`;

export const HeaderComponent = styled.header`
    padding: 1.5rem 0;
    box-shadow: 0 1px 8px rgba(0,0,0,0.15);
    background-color: var(--header-color);
`;
export const HeaderFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        font-size: 2rem;

        @media ${device.tablet}{
            font-size: 1.5rem;
        }
        @media ${device.mobile}{
            font-size: 1.1rem;
        }
    }
`;

