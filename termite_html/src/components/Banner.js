import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 10px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
  box-sizing: border-box;
`
const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    * {
      text-align: center;
    }
  }
  width: 100%;
`

const SubTextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  color: white;
  @media (max-width: 600px) {
    justify-items: center;
  }
  grid-gap: 10px;
`

export default () => (
  <Container>
    <ContainerLogo>
      <img src='./logo.png' alt='' height='300px' />
    </ContainerLogo>
    <TextContainer>
      <h1 style={{ color: "white" }}>Termite Calculating Program</h1>
      <h2 style={{ color: "white" }}>โปรแกรมคำนวณตำแหน่งปลวก</h2>
      <br></br>
      <SubTextContainer>
        <div>
          <p>Department of Mechanical Engineering </p>
          <p>Faculty of Engineering, Karsetsart University</p>
        </div>
        <div>
          <p>ภาควิชาเครื่องกล</p>
          <p>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์</p>
        </div>
      </SubTextContainer>
    </TextContainer>
  </Container>
)
