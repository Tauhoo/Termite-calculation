import React from "react"
import styled from "styled-components"
import Circle from "./Circle"
import Distance from "./Distance"

const Container = styled.div`
  height: ${({ height, scale }) => height * scale}px;
  width: ${({ width, scale }) => width * scale}px;
  background-color: #bdc3c7;
  position: relative;
  transition: 0.3s;
`

export default ({ W, L, R1, R2, scale }) => (
  <Container height={W} width={L} scale={scale}>
    <Distance width={L * scale} top='-20px' left='50%'>
      {L}m (L)
    </Distance>
    <Distance width={W * scale} top='50%' left='-20px' deg={-90}>
      {W}m (W)
    </Distance>
    <Distance
      width={(L / 4) * scale}
      top='calc(100% - 10px)'
      left='calc(25% / 2)'
    >
      {L / 4}m (L/2)
    </Distance>
    <Distance width={(L / 4) * scale} top='calc(100% - 10px)' left='87.5%'>
      {L / 4}m (L/2)
    </Distance>
    <Circle
      radius={R1}
      scale={scale}
      top={`calc(100% + 1px * ${scale})`}
      left='25%'
      color='#f1c40f'
    ></Circle>
    <Circle
      radius={R2}
      scale={scale}
      top={`calc(100% + 1px * ${scale})`}
      left='75%'
    ></Circle>
  </Container>
)