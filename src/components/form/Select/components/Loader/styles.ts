import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 24px;
    width: 24px;
    position: relative;
    margin: 0 auto;

    @-webkit-keyframes rotate {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes rotate {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
        }
    }
    @-webkit-keyframes color {
        0% {
            stroke: #353f47;
        }
        40% {
            stroke: #353f47;
        }
        66% {
            stroke: #353f47;
        }
        80%,
        90% {
            stroke: #353f47;
        }
    }
    @keyframes color {
        0% {
            stroke: #353f47;
        }
        40% {
            stroke: #353f47;
        }
        66% {
            stroke: #353f47;
        }
        80%,
        90% {
            stroke: #353f47;
        }
    }
`;

export const SvgLoader = styled.svg`
    -webkit-animation: rotate 2s linear infinite;
    animation: rotate 2s linear infinite;
    height: 100%;
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto;
`;

export const CircleLoader = styled.circle`
    stroke-dasharray: 150, 200;
    stroke-dashoffset: -10;
    -webkit-animation:
        dash 1.5s ease-in-out infinite,
        color 6s ease-in-out infinite;
    animation:
        dash 1.5s ease-in-out infinite,
        color 6s ease-in-out infinite;
    stroke-linecap: round;
`;
