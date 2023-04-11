import React from "react";
import styled from "styled-components";
import { CreatePaymentData } from "./createPaymentData";
import PaymentPortal from "../payment-portal/paymentPortal";
import { device } from "../../styles/main-styles";

const PaymentBody = () => {
  return (
    <Container>
      <CreatePaymentBox>
        <h1>Create Payment</h1>
        {CreatePaymentData?.map((item) => {
          return (
            <GraveDataContainer>
              <GraveLabels>{item.label}</GraveLabels>
              <GraveData>
                <GraveIcons>{item.icon}</GraveIcons>
                <GraveDataLabel>{item.data}</GraveDataLabel>
              </GraveData>
            </GraveDataContainer>
          );
        })}
      </CreatePaymentBox>
      <PaymentBox>
        <PaymentPortal />
      </PaymentBox>
    </Container>
  );
};

export default PaymentBody;
const GraveDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 0;
`;
const GraveLabels = styled.div`
  color: #000;
  opacity: 0.6;
  font-weight: 600;
  font-size: 1.1rem;
`;
const GraveData = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`;
const GraveIcons = styled.div`
  font-size: 1.3rem;
`;
const GraveDataLabel = styled.div`
  color: grey;
  font-weight: 400;
  font-size: 1.1rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 6rem;
  height: 100%;

  @media screen and ${device.tablet} {
    flex-direction: column;
    gap: 2rem;
  }
  @media screen and ${device.mobile} {
    flex-direction: column;
    gap: 2rem;
  }
`;
const CreatePaymentBox = styled.div`
  width: 20rem;
  h1 {
    color: green;
    margin-bottom: 1rem;
  }
`;
const PaymentBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;
