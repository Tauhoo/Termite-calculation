import React from "react"
import styled from "styled-components"
import Distance from "./Distance"

const Container = styled.div`
  height: ${({ radius }) => radius * 2}px;
  width: ${({ radius }) => radius * 2}px;
  background-color: ${({ color }) => color};
  opacity: 0.5;
  border-radius: 50%;
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: translate(-50%, -50%);
  z-index: 999;
  transition: 0.3s;
`

export default ({ radius, top, left, color, scale }) => {
  const real_radius = radius * scale
  /*const distance_from_1m = 0
  if(radius > 1){
    distance_from_1m = 
  }else{

  }*/
  return (
    <Container
      radius={radius * scale}
      top={top}
      left={left}
      color={color || "#9b59b6"}
    >
      <Distance width={real_radius} top='75%' left='50%' deg={-90}>
        {radius}m
      </Distance>
      <Distance
        width={scale}
        top={`calc(50% - ${scale / 2}px)`}
        left='50%'
        deg={-90}
      >
        1m
      </Distance>
    </Container>
  )
}
