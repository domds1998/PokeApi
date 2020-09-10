import React from "react";
import {StyledItemList, RowList} from "../styles/appStyles"

const Item = (props) => {
    return (
        <RowList>
            {/* <StyledItemList columnItem>{props.data.name}</StyledItemList> */}
            <StyledItemList columnItem>sasa</StyledItemList>
            <StyledItemList columnItem>sasa</StyledItemList>
            <StyledItemList columnItem>sasaas</StyledItemList>
            <StyledItemList columnItem>sasaas</StyledItemList>
            <StyledItemList columnItem>sasaas</StyledItemList>
        </RowList>
    );
}

export default Item;