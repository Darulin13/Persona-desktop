import React from "react";
import * as S from "./styles";

import { graphql, useStaticQuery } from "gatsby";

export function Main() {
  const data = useStaticQuery(graphql`
    query {
      persona {
        mains {
          background {
            url
          }
          button
          learn
          other
          logo {
            url
          }
          persona1 {
            url
          }
          persona2 {
            url
          }
          persona3 {
            url
          }
          persona4 {
            url
          }
          title
          title2
          titlepers1
          titlepers2
          titlepers3
          titlepers4
          trailer
          button2
          button3
          button4
          button5
          button6
          button7
          button8
          buynow {
            url
          }
          changing {
            url
          }
          standard {
            url
          }

          newtitle1
          newtitle2
          newtitle3

          img2 {
            url
          }
          img {
            url
          }
          trailers {
            url
          }
          available {
            url
          }
        }
      }
    }
  `);

  const {
    background,
    button,
    learn,
    other,
    logo,
    persona1,
    persona2,
    persona3,
    persona4,
    title,
    title2,
    titlepers1,
    titlepers2,
    titlepers3,
    titlepers4,
    trailer,
    button2,
    button3,
    button4,
    button5,
    button6,
    button7,
    button8,
    buynow,
    changing,
    standard,

    newtitle1,
    newtitle2,
    newtitle3,

    img2,
    img,
    trailers,
    available
  } = data.persona.mains[0];
  console.log("Main", data);

  return (
    <S.Container>
      <S.Firstmain back={background.url}>
        <div>
          <img src={logo.url} alt=" logo " />
          <img src={changing.url} alt=" Changing" />
          <button>{button}</button>
        </div>
      </S.Firstmain>
      <S.Secondmain>
        <img src={img.url} alt=" img " />
      </S.Secondmain>

      <S.Trailers>
        <picture>
          <h1>{trailer}</h1>
        </picture>

        <div>
          <iframe
            src="https://www.youtube.com/embed/wTp_q76UWBo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/XdyH3qHq1eA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/RP-mvJE9EQM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </S.Trailers>
      <S.Buynow>
        <S.Background back={img2.url}>
          <div class="buynow">
            <img src={buynow.url} alt=" buynow " />
          </div>
          <div class="standard">
            <img src={standard.url} alt=" standard " />
          </div>
        </S.Background>
        <S.Quadro>
          <article>
            <button>{button3}</button>
            <button>{button4}</button>
            <button>{button5}</button>
            <button>{button6}</button>
            <button>{button7}</button>
            <button>{button8}</button>
          </article>
        </S.Quadro>
      </S.Buynow>

      <S.Newsletter>
        <div>
          <h2>{newtitle1}</h2>
          <input />
          <p>{newtitle2}</p>
          <p>{newtitle3}</p>
          <button>{button2}</button>
        </div>
      </S.Newsletter>

      <S.Games>
        <picture>
          <h1>{other}</h1>
        </picture>
        <article>
          <div>
            <img src={persona1.url} alt=" persona 1" />
            <p>{titlepers1}</p>
            <button>{learn}</button>
          </div>
          <div>
            <img src={persona2.url} alt=" persona 2" />
            <p>{titlepers2}</p>
            <button>{learn}</button>
          </div>
          <div>
            <img src={persona3.url} alt=" persona 3" />
            <p>{titlepers3}</p>
            <button>{learn}</button>
          </div>
          <div>
            <img src={persona4.url} alt=" persona 4" />
            <p>{titlepers4}</p>
            <button>{learn}</button>
          </div>
        </article>
      </S.Games>
    </S.Container>
  );
}
