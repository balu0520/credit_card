// Write your code here
import {useState} from 'react'
import {
  BackgroundContainer,
  ContainerOne,
  ContainerTwo,
  Heading,
  Underline,
  CardContainer,
  Card,
  CardNumber,
  CardHolderContainer,
  CardHolderPara,
  CardHolder,
  PaymentCard,
  PaymentHeading,
  CardNumberInput,
  CardHolderInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardHolder = event => {
    const value = event.target.value.toUpperCase()
    setCardHolder(value)
  }

  return (
    <BackgroundContainer>
      <ContainerOne>
        <Heading>CREDIT CARD</Heading>
        <Underline />
        <CardContainer>
          <Card data-testid="creditCard">
            <CardNumber>{cardNumber}</CardNumber>
            <CardHolderContainer>
              <CardHolderPara>CARDHOLDER NAME</CardHolderPara>
              <CardHolder>{cardHolder}</CardHolder>
            </CardHolderContainer>
          </Card>
        </CardContainer>
      </ContainerOne>
      <ContainerTwo>
        <PaymentCard>
          <PaymentHeading>Payment Method</PaymentHeading>
          <CardNumberInput
            type="text"
            placeholder="Card Number"
            onChange={onChangeCardNumber}
            value={cardNumber}
          />
          <CardHolderInput
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeCardHolder}
            value={cardHolder}
          />
        </PaymentCard>
      </ContainerTwo>
    </BackgroundContainer>
  )
}

export default CreditCard
