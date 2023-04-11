import { TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Button from "../button/button";
import { IoMdAddCircleOutline } from "react-icons/io";
import { device } from "../../styles/main-styles";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";

const PaymentPortal = () => {
  return (
    <Container>
      <h2>Payment Details</h2>
      <PaymentDetailsBox>
        <GridItemsContainer>
          <label>Receipt Number</label>
          <TextField id="filled-basic" label="" variant="standard" />
        </GridItemsContainer>
        <GridItemsContainer>
          <label>Transaction ID</label>
          <TextField id="filled-basic" label="" variant="standard" />
        </GridItemsContainer>
        <GridItemsContainer>
          <label>Amount</label>
          <TextField id="filled-basic" label="" variant="standard" />
        </GridItemsContainer>
        <GridItemsContainer>
          <label>Date Paid</label>
          {/* <TextField id="filled-basic" label="" variant="standard" /> */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              className="date-picker-container"
            />
          </LocalizationProvider>
        </GridItemsContainer>
        <GridItemsContainer>
          <label>Payment Type</label>
          <TextField id="filled-basic" label="" variant="standard" />
        </GridItemsContainer>
        <GridItemsContainer>
          <label>Payor</label>
          <TextField id="filled-basic" label="" variant="standard" />
        </GridItemsContainer>
        <GridItemsContainer className="grid-column-span-2 description-box-payment-multline">
          <label>Description</label>
          <TextField multiline rows={4} variant="standard" />
        </GridItemsContainer>
      </PaymentDetailsBox>
      <ButtonContainer>
        <Button type={"submit"}>Submit</Button>
        <Button type={"cancel"}>Cancel</Button>
        <AddNew>
          <IoMdAddCircleOutline className="addicon-payment-portal" />
          Add Another Payment
        </AddNew>
      </ButtonContainer>
    </Container>
  );
};

export default PaymentPortal;
const Container = styled.div`
  width: max(50rem, 60%);
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 1rem;
  height: 100%;
  h2 {
    font-weight: 600;
    opacity: 0.7;
    height: 3rem;
  }
`;
const PaymentDetailsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
  padding-bottom: 4rem;
  border-bottom: solid 1px #ccc;
  max-height: calc(100% - 10rem);
  overflow-y: auto;
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  .description-box-payment-multline {
    .MuiFilledInput-root {
      height: max-content;
    }
  }
  @media screen and ${device.laptop} {
    display: block;
  }
`;
const GridItemsContainer = styled.div`
  .MuiTextField-root {
    width: 100%;
    border: solid 1px #ccc;
  }
  .MuiInputBase-input {
    height: 2.2rem;
  }
  .date-picker-container {
    .MuiInputBase-root {
      height: 2.75rem;
    }
    .MuiTextField-root {
      border: none;
    }
  }
  @media screen and ${device.laptop} {
    margin-bottom: 1rem;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  gap: 1.5rem;
  position: relative;
  height: 3rem;
`;
const AddNew = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  opacity: 0.7;
  .addicon-payment-portal {
    font-size: 1rem;
  }
  cursor: pointer;
`;
