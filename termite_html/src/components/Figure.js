import React from "react"
import styled from "styled-components"
import Square from "./Square"

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
`

const FigureContainer = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ({ W, L, R1, R2 }) => {
  const max_radius = Math.max(R1, R2)
  const container_height = Math.max(W, max_radius) + max_radius
  const container_width =
    L +
    Math.max(R1 - L / 4, 0, R2 - (L * 3) / 4) +
    Math.max(R1 - (L * 3) / 4, 0, R2 - L / 4)
  return (
    <Container>
      <FigureContainer
        height={container_height * 2}
        width={container_width * 2}
      >
        <Square W={W} L={L} R1={R1} R2={R2}></Square>
      </FigureContainer>
    </Container>
  )
}
