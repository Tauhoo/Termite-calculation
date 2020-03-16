import React from "react"
import styled from "styled-components"
import Square from "./Square"

const Container = styled.div`
  height: 400px;
  width: 100%;
  overflow: scroll;
  border-style: solid;
  @media (max-width: 760px) {
    margin-top: 30px;
  }
  border-color: white;
  border-radius: 10px;
  background-color: white;
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: white;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #2c3e50;
    border-radius: 20px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #16a085;
  }
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
