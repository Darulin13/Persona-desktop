import styled from "styled-components";
export const Container = styled.section`
  width: 100%;
  background-color: black;
  height: 750vh;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const Firstmain = styled.section`
  background-image: url(${(props) => props.back});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  height: 170vh;
  width: 100%;
  align-items: end;

  h1 {
    color: #cfb53b;
    font-size: 40px;
    text-align: center;
    transform: rotate(350deg);
  }
  div {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 170vh;
    align-items: center;
  }
  img {
    width: 100%;
  }
  button {
    transform: rotate(350deg);
    font-size: 70px;
    border: none;
    background-color: transparent;
    width: 100%;
    text-align: center;
    color: #cfb53b;
  }
`;
export const Secondmain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 100px;
  height: 100vh;
  width: 100%;
  align-items: center;
  img {
    width: 80%;
  }
`;
export const Trailers = styled.section`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h1 {
    color: white;

    font-size: 40px;
  }

  picture {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  iframe {
    width: 25%;
    height: 185px;
    border: outset #cfb53b;
  }
`;
export const Buynow = styled.section`
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;

  .buy {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 30%;
    align-items: center;
    border: solid green;
    img {
      width: 80%;
    }
  }
  .standard {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
    border: solid green;
    img {
      width: 40%;
    }
  }
  img {
    width: 70%;
    border: red solid;
  }
  div {
    border: blue solid;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
  }
`;
export const Quadro = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: solid white;

  transform: rotate(5deg);
  article {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border: solid red;
    height: 40vh;
  }
  button {
    border: outset #cfb53b;
    width: 40%;
    height: 10vh;
    background-color: black;
    font-size: 20px;
    color: white;
  }
`;
export const Newsletter = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    transform: rotate(3deg);
    border: solid 14px #cfb53b;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60vh;
  }
  input {
    
    height: 6vh;
    width: 70%;
  }
  p {
    width: 70%;
    color: white;
    font-size: 12px;
  }
  h2 {
    font-size: 23px;
    color: white;
    width: 70%;
  }
  button {
    height: 6vh;
    width: 60%;
    background-color: #cfb53b;
    border:outset white;
    font-size: 16px;
  }
  }
`;

export const Games = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  button {
    color: white;
    background-color: #cfb53d;
    border: black double;
  }
  article {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  div {
    width: 20%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  img:hover {
    border: outset #cfb53b;
  }
  img {
    height: 40vh;
    width: 50%;
  }
  p {
    color: white;
  }

  h1 {
    align-items: center;
    color: white;

    font-size: 40px;
  }
  picture {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;
