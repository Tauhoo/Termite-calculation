import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  height: ${({ radius, scale }) => radius * 2}px;
  width: ${({ radius, scale }) => radius * 2}px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: black;
  z-index: 1200;
  transition: 0.3s;
  &:hover {
    transform: translate(-50%, -50%) scale(2);
  }
`
export default Container
