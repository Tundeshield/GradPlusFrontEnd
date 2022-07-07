import React from "react";
import styled from "styled-components";

const Page = ({ children }) => <StyledPage>{children}</StyledPage>;

const StyledPage = styled.div`
  min-height: 100vh;
  max-width: 1700px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
`;
export default Page;
