import { styled } from "styled-components";

export const StyledButtonRemove = styled.div`
  background-color: red;
  color: white;
  width: 48px;
  height: 100%;
  font-size: 30px;
  float: left;
  opacity: ${(props) => props.hover};
  text-align: center;
  padding-top: 1.5%;
`;
