import styled from "styled-components";
import {device} from '../../styles/devices';

export const ThemeItem = styled.div`
    display: flex;
    align-items: center;

    label{
        display: flex;
        align-items: center;
        cursor: pointer;
        
        i{
            font-size: 1.1rem;
            margin-left: .2rem;
        }

        &:not(:last-child){
        margin-right: 1rem;

        @media ${device.mobile}{
            margin-right: .5rem;
        }
        }
    }

    input[type="radio"]{
        appearance: none;
        border: 2px solid #555;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        cursor: pointer;

        &:checked{
            background-color: var(--text-color);
        }
    }

`;