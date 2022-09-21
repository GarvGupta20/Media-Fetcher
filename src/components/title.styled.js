//jshint esversion:6
import styled from "styled-components";

export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;

  .heading {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }

  .pa {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;
