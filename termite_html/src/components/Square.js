import React from "react"
import styled from "styled-components"
import Circle from "./Circle"
import Distance from "./Distance"
import Point from "./Point"

import { Tooltip } from "antd"

const Container = styled.div`
  height: ${({ height, scale }) => height * scale}px;
  width: ${({ width, scale }) => width * scale}px;
  background-color: #bdc3c7;
  position: relative;
  transition: 0.3s;
`
const calculate_cut_point = (W, L, R1, R2) => {
  const distance = L / 2
  if (R1 + R2 < distance) return null
  let x = (R1 ** 2 - R2 ** 2 + distance ** 2) / L
  let y = Math.sqrt(R1 ** 2 - x ** 2)
  if (isNaN(x) || isNaN(y)) return null
  return { x, y }
}

export default ({ W, L, R1, R2, scale }) => {
  const ccp = calculate_cut_point(W, L, R1, R2)
  console.log(ccp)

  return (
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
        {L / 4}m (L/4)
      </Distance>
      <Distance width={(L / 4) * scale} top='calc(100% - 10px)' left='87.5%'>
        {L / 4}m (L/4)
      </Distance>
      <Tooltip title={`(0.000m, 0.000m)`}>
        <Point radius={5} scale={scale} top={`0px`} left={`0px)`}></Point>
      </Tooltip>
      {ccp === null ? null : (
        <>
          <Tooltip
            title={`(${(ccp.x + L / 4).toFixed(3)}m, ${(
              -1 *
              (L - ccp.y)
            ).toFixed(3)}m)`}
          >
            <Point
              radius={5}
              scale={scale}
              top={`calc(100% + ${1 - ccp.y}px * ${scale})`}
              left={`calc(25% + ${ccp.x}px * ${scale})`}
            ></Point>
          </Tooltip>
          <Tooltip
            title={`(${(ccp.x + L / 4).toFixed(3)}m, ${(
              -1 *
              (L + ccp.y)
            ).toFixed(3)}m)`}
          >
            <Point
              radius={5}
              scale={scale}
              top={`calc(100% + ${ccp.y + 1}px * ${scale})`}
              left={`calc(25% + ${ccp.x}px * ${scale})`}
            ></Point>
          </Tooltip>
        </>
      )}
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
}
