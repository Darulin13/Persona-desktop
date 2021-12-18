import React from "react";
import * as S from "./styles";

import { graphql, useStaticQuery } from "gatsby";

export function Header() {
  const data = useStaticQuery(graphql`
    query {
      persona {
        headers {
          character
          media
          phantom
          purchase
          school
          dlc
        }
      }
    }
  `);
  const {
    character,
    media,
    phantom,
    purchase,
    school,
    dlc
  } = data.persona.headers[0];
  console.log("Header", data);
  return (
    <S.Container>
      <ul>
        <li>{character}</li>
        <li>{media}</li>
        <li>{phantom}</li>
        <li>{purchase}</li>
        <li>{school}</li>
        <li>{dlc}</li>
      </ul>
    </S.Container>
  );
}
