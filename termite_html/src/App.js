import React, { Component } from "react"
import styled from "styled-components"
import Square from "./components/Square"
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #1d7170;
  padding: 200px;
  box-sizing: border-box;
`

export default class extends Component {
  render() {
    return (
      <Container>
        <Square W={100} L={300} R1={100} R2={80}></Square>
      </Container>
    )
  }
}
