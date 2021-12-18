import styled from "styled-components";
export const Container = styled.section`
  width: 100%;
  background-color: black;
  height: 10vh;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  border: solid;
  ul {
    display: flex;
    flex-direction: row;
    color: white;
    list-style: none;
    justify-content: space-evenly;
    font-size: 25px;
  }
  li:hover {
    color: #cfb53b;
  }
  li {
  }
`;
