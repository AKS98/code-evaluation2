import styled from "styled-components";

const size = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
};
export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
};
export const MainContainer = styled.div`
  max-width: 85%;
  margin: 0 auto;

  @media screen and ${device.tablet} {
    max-width: 90%;
  }
  @media screen and ${device.mobile} {
    max-width: 95%;
  }
`;
