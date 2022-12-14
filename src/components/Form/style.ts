import styled from "styled-components";
import {device} from '../../styles/devices'

export const FormContainer = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`;
export const FormContent = styled.form`
    padding: 2rem 0;
`;
export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    align-items: center;
    min-height: calc(100vh - 87px);

    @media ${device.tablet}{
        gap: 2rem;
    }
    @media ${device.mobile}{
        grid-template-columns: repeat(1,1fr);
        min-height: inherit;
    }
`;
export const FormBox = styled.div`
    text-align: center;
    label{
        display: block;
        font-size: 1.5rem;
        font-weight: var(--font-bold);
        line-height: 2rem;

        @media ${device.tablet}{
            font-size: 1.1rem;
        }
    }

    select{
        width: 100%;
        padding: 1.5rem 2rem;
        background-color: transparent;
        border: 2px solid var(--border-select);
        border-radius: .5rem;
        color: var(--text-color);

        @media ${device.tablet}{
            padding: 1rem 1.5rem;
        }
    }
`;