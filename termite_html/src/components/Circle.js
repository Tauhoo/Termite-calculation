import React from "react"
import styled from "styled-components"
import Distance from "./Distance"

const Container = styled.div`
  height: ${({ radius }) => radius * 2}px;
  width: ${({ radius }) => radius * 2}px;
  background-color: ${({ color }) => color};
  opacity: 0.7;
  border-radius: 50%;
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: translate(-50%, -50%);
`

export default ({ radius, top, left, color }) => (
  <Container radius={radius} top={top} left={left} color={color || "#9b59b6"}>
    <Distance width={radius} top='75%' left='50%' deg={-90}>
      {radius}m
    </Distance>
  </Container>
)
