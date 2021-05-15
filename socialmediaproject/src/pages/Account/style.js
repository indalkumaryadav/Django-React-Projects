import styled from "styled-components";
import {Container} from "@material/core"

export const ImageContainer = styled.img`
  width: 100%;
  @media screen and (max-width: 960px) {
    width: fit-content;
  }
`;
