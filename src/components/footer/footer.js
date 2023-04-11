import React from "react";
import styled from "styled-components";
import { MainContainer, device } from "../../styles/main-styles";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <MainContainer className="footer-container-wrap">
        <ItemContainer>
          <h5>
            <AiOutlineCopyright className="react-icon-about" />
            2023 Company
          </h5>
        </ItemContainer>
        <ItemContainer className="footer-items-container">
          <Items className="selectOptions">About</Items>
          <Items className="selectOptions">Terms of Use</Items>
          <Items className="selectOptions">Contact</Items>
        </ItemContainer>
      </MainContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #5A5A5A;
  color: #fff;
  .footer-container-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .footer-items-container {
    @media screen and ${device.tablet} {
      display: none;
    }
    @media screen and ${device.mobile} {
      display: none;
    }
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h5 {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    .react-icon-about {
      font-size: 1.5rem;
    }
  }
  .react-icons {
    font-size: 1.3rem;
  }
  .headerIcons {
    margin-right: 0.2rem;
  }
  .selectOptions {
    cursor: pointer;
  }
`;
const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
