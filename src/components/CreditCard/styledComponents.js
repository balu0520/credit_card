// Style your elements here
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
  align-items: flex-start;
`
export const ContainerOne = styled.div`
  background-color: #3b4b69;
  width: 50vw;
  min-height: 100vh;
  padding-top: 20px;
`
export const ContainerTwo = styled.div`
  background-color: #ffffff;
  width: 50vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: #ffffff;
  text-align: center;
  margin: 0;
`

export const Underline = styled.hr`
  color: #ffd773;
  background-color: #ffd773;
  text-align: center;
  border-top: 2px solid #ffd773;
  width: 140px;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  border-radius: 12px;
  box-shadow: #344e7a;
  height: 40vh;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
`
export const CardNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  margin-bottom: 10px;
`
export const CardHolderContainer = styled.div`
  margin-top: 10px;
`
export const CardHolderPara = styled.p`
  color: #d3d9e0;
  font-family: 'Roboto';
`
export const CardHolder = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`
export const PaymentCard = styled.div`
  box-shadow: 5px 5px 5px 5px #c3cad9;
  height: 40vh;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PaymentHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
`
export const CardNumberInput = styled.input`
  :focus {
    outline: none;
  }
  width: 300px;
  height: 35px;
  border: 1px solid #c3cad9;
  margin-bottom: 10px;
`
export const CardHolderInput = styled.input`
  :focus {
    outline: none;
  }
  width: 300px;
  height: 35px;
  border: 1px solid #c3cad9;
`
