import styled from "styled-components";
import {device} from '../../styles/devices'

export const IpamContainer = styled.div`
    max-width: 680px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
`;

export const IpamContent = styled.div`
    padding: 4rem 0;

    @media ${device.mobile}{
        padding: 2rem 0;
    }

    h1,
    p{
        text-align: center;
    }

    h1{
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: var(--font-bold);
        margin-bottom: 1rem;

        @media ${device.mobile}{
            font-size: 1.2rem;
            line-height: 1.7;
            margin-bottom: .8rem;
        }
    }

    p{
        font-size: 1rem;
        font-weight: var(--font-normal);
        line-height: 1.5rem;
    }

    span{
        display: block;
    }
`;

export const FormContent = styled.form`
    margin-top: 3rem;

    @media ${device.mobile}{
        margin-top: 2rem;
    }
`;

export const FormBox = styled.div`
    text-align: center;
    margin-bottom: 2rem;

    label{
        display: block;
        font-size: 1.2rem;
        font-weight: var(--font-bold);
        line-height: 2rem;
        margin-bottom: 1rem;

        @media ${device.tablet}{
            margin-bottom: 0.5rem;
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

        option{
            color: var(--text-color);
            background-color: var(--bg-color);
        }
    }
`;