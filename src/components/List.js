import React, { useState, useEffect } from "react";
import { StyledItemList, StyledList } from "../styles/appStyles";
import Item from "../components/Item";
import NavBar from "../components/NavBar";

const List = () => {

  const limit = 100;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then(response => response.json())
      .then(json => {
        setData(json.results);
        // setCount(json.count);
      });

  });

  const offset = 0;

  const prepareItems = (offset) => {
    const items = [];
    // for (let index = offset; index < (offset + itemsPerPage); index++) {
    //   console.log(index);
    //   items.push(
    //     <StyledItemList rowItem>
    //       <Item data={data[index]}/>
    //     </StyledItemList>
    //   );
    // }

    return items;

  };

  return (
    <>
      <StyledList>
        <StyledItemList headerItem>
          <Item />
        </StyledItemList>
        {console.log("lalala")}
      </StyledList>
      <NavBar currentPage={currentPage} number={numberOfPages} />
    </>
  );
}

export default List;
