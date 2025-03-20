import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";


export const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Pretendard';
        src: url('/font/Pretendard-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/font/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/font/Pretendard-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }


    body {
        font-family: 'Pretendard', sans-serif;
        font-weight: 400;
    }


    // border-box 초기화
    *,
    *:before,
    *:after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    // 공백 초기화
    body,
    button,
    dd,
    dl,
    dt,
    fieldset,
    form,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    input,
    legend,
    li,
    ol,
    p,
    select,
    table,
    td,
    textarea,
    th,
    ul,
    figure,
    figcaption {
        margin: 0;
        padding: 0;

    }


    // 링크 초기화
    a,
    a:hover,
    a:focus {
        color: inherit;
        text-decoration: none;
    }

    // 스타일 초기화
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: normal;
    }

    ul {
        list-style: none;
    }

    em,
    address {
        font-style: normal;
    }

    strong {
        font-weight: normal;
    }


    // 디자인 초기화
    input,
    textarea,
    button,
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 0;
        font-size: 16px;
        border: 0;
    }

    button:focus,
    button:active,
    input:focus,
    input:active,
    textarea:focus,
    textarea:active {
        outline: none;
        box-shadow: none;
    }


    @media screen and (min-width: 375px) and (max-width: 1439px) {
        #root {
            max-width: 100%;
        }
    }


    body {
        padding: 0 6.125rem 0 8.875rem;
        align-items: center;
        height: auto;
        min-height: 100vh;

    }

    button {
        cursor: pointer;
    }



`;
