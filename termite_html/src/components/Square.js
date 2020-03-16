import React from "react"
import styled from "styled-components"
import Circle from "./Circle"
import Distance from "./Distance"

const Container = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  background-color: #bdc3c7;
  position: relative;
  transition: 0.3s;
`

export default ({ W, L, R1, R2 }) => (
  <Container height={W} width={L}>
    <Distance width={L} top='-20px' left='50%'>
      {L}m (L)
    </Distance>
    <Distance width={W} top='50%' left='-20px' deg={-90}>
      {W}m (W)
    </Distance>
    <Distance width={L / 4} top='calc(100% - 10px)' left='calc(25% / 2)'>
      {L / 4}m (L/2)
    </Distance>
    <Distance width={L / 4} top='calc(100% - 10px)' left='87.5%'>
      {L / 4}m (L/2)
    </Distance>
    <Circle radius={R1} top='100%' left='25%' color='#f1c40f'></Circle>
    <Circle radius={R2} top='100%' left='75%'></Circle>
  </Container>
)
