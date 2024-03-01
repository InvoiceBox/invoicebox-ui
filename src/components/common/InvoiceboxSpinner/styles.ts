import styled, { keyframes } from 'styled-components';

const leftEyeKeyframe = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.42);
  }
`;

const rightEyeKeyframe = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.78);
  }
`;

export const Wrapper = styled.div<{ $width: string }>`
    width: ${({ $width }) => $width};

    & #left-eye {
        animation: 0.5s ease-in-out infinite alternate ${leftEyeKeyframe};
        transform-origin: 17px 28px;
    }

    & #right-eye {
        animation: 0.5s ease-in-out infinite alternate ${rightEyeKeyframe};
        transform-origin: 76px 18px;
    }
`;
