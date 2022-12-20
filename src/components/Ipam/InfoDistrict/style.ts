import styled from "styled-components";
import { device } from "../../../styles/devices";

export const InfoDistricArticle = styled.article`    
    padding: 2rem 1.5rem;
    border-radius: .5rem;
    border: 2px solid var(--border-select);

    strong{
        @media ${device.mobile}{
            display: block;
            margin-bottom: .4rem;
        }
    }

    .paragraph{
        &--big{
            font-size: 1.2rem;
            line-height: 1.7rem;
            font-weight: var(--font-bold);
            text-align: center;
            margin-bottom: 1.5rem;

            @media ${device.tablet}{
                font-size: 1.1rem;
                line-height: 1.6rem;
            }
        }
    }
`;

export const InfoDistrictLine = styled.div`
    &:not(:last-child){
        margin-bottom: 1rem;
    }

    p{
        text-align: center;
    }
`;

export const InfoDistrictError = styled.div`
    width: 80%;
    margin: 0 auto;

    @media ${device.mobile}{
        width: 100%;
    }

    p{  
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: var(--font-normal);
        text-align: center;
    }
`