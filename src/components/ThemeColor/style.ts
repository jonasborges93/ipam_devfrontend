import styled from "styled-components";

export const ThemeItem = styled.div`
    
    label {
        width: 55px;
        height: 24px;
        position: relative;
        display: block;
        background-color: #ebebeb;
        border-radius: 200px;
        box-shadow: inset 0px 5px 15px rgba(0,0,0,0.4), inset 0px -5px 15px rgba(255,255,255,0.4);
        cursor: pointer;
        transition: .3s all;

        &::after{
            content: "";
            width: 24px;
            height: 24px;
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: 50%;
            box-shadow: 0 5px 10px rgba(0,0,0,0.2);
            background-color: #d8860b;
            transition: .3s all;
        }

        &:hover::after{
            width: 30px;
        }

        i {
            font-size: 1rem;
            position: absolute;
            top: 1px;
            z-index: 10;
            transition: all .3s;

            &.uil.uil-sun{
                left: 3px;
                color: #fff;
            }
            &.uil.uil-moon{
                left: 51px;
                color: #7e7e7e;
                transform: translateX(-100%);
            }
        }
    }

    input{
        width: 0;
        height: 0;
        visibility: hidden;
        display: none;

        &:checked + label{
            background-color: #242424;

            &:after{
            left: 55px;
            transform: translateX(-100%);
            background-color: #3a3a3a;
            }
        }
    }

`;