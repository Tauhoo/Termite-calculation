import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1px 1fr max-content 1fr 1px;
  align-items: center;
  width: ${({ width }) => width}px;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  position: absolute;
  transform: translate(-50%, -50%) rotate(${({ deg }) => deg}deg);
  z-index: 1000;
`

const VerticalLine = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`
const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`

const Text = styled.div`
  padding: 0px 5px;
  font-size: 0.7rem;
`

export default ({ width, children, top, left, deg }) => (
  <Container width={width} top={top} left={left} deg={deg || 0}>
    <VerticalLine></VerticalLine>
    <HorizontalLine></HorizontalLine>
    <Text>{children}</Text>
    <HorizontalLine></HorizontalLine>
    <VerticalLine></VerticalLine>
  </Container>
)
