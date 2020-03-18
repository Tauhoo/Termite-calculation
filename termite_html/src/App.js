import React, { Component } from "react"
import { InputNumber } from "antd"
import styled from "styled-components"
import Figure from "./components/Figure"
import Banner from "./components/Banner"
import { Slider } from "antd"

import "antd/dist/antd.css"

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #1d7170;
  box-sizing: border-box;
  padding: 20px;
  box-sizing: border-box;
`

const InputContainer = styled.div`
  width: 100%;
  color: white;
  display: grid;
  grid-template-columns: 220px 1fr;
`

const ConfigContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`

const Text = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`

const WorkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export default class extends Component {
  state = {
    W: 2,
    L: 3,
    R1: 1,
    R2: 1,
    scale: 150,
  }
  render() {
    return (
      <Container>
        <Banner></Banner>
        <br />
        <br />
        <WorkContainer>
          <Center>
            <ConfigContainer>
              <InputContainer>
                <Text>ความกว้างห้อง</Text>
                <InputNumber
                  placeholder='W'
                  onChange={value => this.setState({ W: value })}
                  defaultValue={2}
                  formatter={value => `${value}m`}
                  parser={value => value.replace("m", "")}
                ></InputNumber>
              </InputContainer>
              <InputContainer>
                <Text>ความยาวห้อง</Text>
                <InputNumber
                  placeholder='L'
                  onChange={value => this.setState({ L: value })}
                  defaultValue={3}
                  formatter={value => `${value}m`}
                  parser={value => value.replace("m", "")}
                ></InputNumber>
              </InputContainer>
              <InputContainer>
                <Text>ระยะจากเซนเซอร์ตัวซ้าย</Text>
                <InputNumber
                  placeholder='R1'
                  onChange={value => this.setState({ R1: value })}
                  defaultValue={1}
                  formatter={value => `${value}m`}
                  parser={value => value.replace("m", "")}
                ></InputNumber>
              </InputContainer>
              <InputContainer>
                <Text>ระยะจากเซนเซอร์ตัวขวา</Text>
                <InputNumber
                  placeholder='R2'
                  onChange={value => this.setState({ R2: value })}
                  defaultValue={1}
                  formatter={value => `${value}m`}
                  parser={value => value.replace("m", "")}
                ></InputNumber>
              </InputContainer>
              <InputContainer>
                <Text>ขนาดแสดงผล</Text>
                <Slider
                  min={10}
                  max={1000}
                  step={25}
                  defaultValue={150}
                  onChange={scale => this.setState({ scale })}
                  tipFormatter={value => `1m : ${value}px`}
                ></Slider>
              </InputContainer>
            </ConfigContainer>
          </Center>
          <Figure {...this.state}></Figure>
        </WorkContainer>
      </Container>
    )
  }
}
