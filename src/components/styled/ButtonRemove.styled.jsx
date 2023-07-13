import { styled } from "styled-components";

export const StyledButtonRemove = styled.div`
  background-color: red;
  color: white;
  width: 48px;
  height: 100%;
  font-size: 30px;
  float: left;
  opacity: ${(props) => (props.hover ? 0.8 : 0)};
  text-align: center;
  padding-top: 1.5%;
`;
