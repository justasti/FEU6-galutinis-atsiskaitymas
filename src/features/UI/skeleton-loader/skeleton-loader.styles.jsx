import styled from 'styled-components'

export const Skeleton = styled.div`
  width: ${({ $width }) => $width}vw;
  height: 20px;
  background-color: #ddd;
  animation: 1.2s pulse infinite cubic-bezier(0.4, 0, 0.6, 1);
  ${({ type }) =>
    type === 'round' &&
    `
    width: 40px;
    height: 40px;
    border-radius: 50%;
  `}
  @keyframes pulse {
    50% {
      background-color: #fff;
    }
  }
`
