import React, { useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { BiHelpCircle, BiDollar, BiDockTop } from "react-icons/bi";
import { CgMicrosoft } from "react-icons/cg";
import { GiGraveFlowers } from "react-icons/gi";

import { MainContainer, device } from "../../styles/main-styles";

const Header = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const handleOptionClick = (selectedOption) => {
    setSelectedMenu(selectedOption);
  };
  return (
    <Container>
      <MainContainer className="header-items-wrap-container">
        <ItemContainer>
          <h3>
            <GiGraveFlowers className="header-image" />
            Grave Sites Managment
          </h3>
        </ItemContainer>
        <ItemContainer className="header-items-container">
          <Items
            className="selectOptions"
            onClick={() => handleOptionClick(0)}
            selectedOption={selectedMenu === 0 ? true : false}
          >
            <CgMicrosoft className="react-icons headerIcons" />
            Maintain
          </Items>
          <Items
            className="selectOptions"
            onClick={() => handleOptionClick(1)}
            selectedOption={selectedMenu === 1 ? true : false}
          >
            <BiDollar className="react-icons headerIcons" />
            Payments
          </Items>
          <Items
            className="selectOptions"
            onClick={() => handleOptionClick(2)}
            selectedOption={selectedMenu === 2 ? true : false}
          >
            <BiDockTop className="react-icons headerIcons" />
            Reports
          </Items>
        </ItemContainer>
        <ItemContainer className="header-items-container">
          <Items>
            <BsSearch className="react-icons" />
          </Items>
          <Items>
            <AiOutlineSetting className="react-icons" />
          </Items>
          <Items>
            <BiHelpCircle className="react-icons" />
          </Items>
          <Items>
            <UserImage />
            <UserData>
              <UserName>John Snow</UserName>
              <UserCredential>Muncipality Officer</UserCredential>
            </UserData>
          </Items>
        </ItemContainer>
      </MainContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #000;
  color: #fff;
  height: 4rem;
  .header-items-wrap-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: 100%;
  }
  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .header-image {
    color: green;
    font-size: 1.5rem;
  }
  .header-items-container {
    @media screen and ${device.tablet} {
      display: none;
    }
    @media screen and ${device.laptop} {
      display: none;
    }
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  gap: 0.7rem;
  .react-icons {
    font-size: 1.3rem;
  }
  .headerIcons {
    margin-right: 0.2rem;
  }
  .selectOptions {
    cursor: pointer;
    &:hover {
      background-color: #5a5a5a;
      border-radius: 1.6rem;
    }
  }
`;
const Items = styled.div`
  display: flex;
  padding: 0.5rem 0.8rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;

  background-color: ${(props) => (props.selectedOption ? "#5a5a5a" : "")};
  border-radius: ${(props) => (props.selectedOption ? "1.6rem" : "")};
`;
const UserImage = styled.div`
  padding: 1.3rem 1.3rem;
  position: relative;
  background-color: green;
  border-radius: 50%;
  margin-right: 0.5rem;
  &:before {
    position: absolute;
    content: "JS";
    left: 0.8rem;
    top: 0.8rem;
  }
`;
const UserData = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserName = styled.div`
  font-size: 1rem;
`;
const UserCredential = styled.div`
  font-size: 0.8rem;
  color: #ccc;
`;
