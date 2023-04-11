import React from "react";
import { MainContainer, device } from "../../styles/main-styles";
import styled from "styled-components";
import Header from "../header/header";
import Footer from "../footer/footer";

const MainLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContainer className="mainLayout-container-box">
        {children}
      </MainContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default MainLayout;

const LayoutContainer = styled.div`
  height: 100vh;
  .mainLayout-container-box {
    height: calc(100vh - 8rem);
    padding: 1rem 0;
    overflow: hidden;
    @media screen and ${device.tablet} {
      height: max-content;
    }
    @media screen and ${device.mobile} {
      height: max-content;
    }
  }
  .header {
    height: 4rem;
  }
  .about {
    height: 4rem;
  }
`;
