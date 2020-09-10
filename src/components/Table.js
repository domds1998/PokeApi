import React from "react";
import {Table, Th, Td} from "../styles/detailsStyles";

export const PokeTable = (props) => (
<Table>
  <thead>
      <Th colSpan="2">Przyrosty</Th>
  </thead>
  <tbody>
    <tr>
      <Td>Atak</Td>
      <Td>+3</Td>
    </tr>
    <tr>
      <Td>Obrona</Td>
      <Td>+3</Td>
    </tr>
    <tr>
      <Td>Sp. Atak</Td>
      <Td>+4</Td>
    </tr>
    <tr>
      <Td>Sp. Obrona</Td>
      <Td>+4</Td>
    </tr>
    <tr>
      <Td>Życie</Td>
      <Td>+4</Td>
    </tr>
  </tbody>
</Table>
  );
