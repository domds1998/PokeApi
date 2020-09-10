import React, { Component } from "react";
import { StyledItemList, RowList } from "../styles/appStyles";
import { Link } from 'react-router-dom';

class Item extends Component {
    state = {
        isHovered: false
    }

    getContentForImg = (isHeader) => {
        if (isHeader) return this.props.data.img;
        else return <img src={this.props.data.img} width="20px" height="20px" alt="IMG"></img>;
    }

    toggleHover = () => {
        if (!this.props.isHeader) this.setState({ isHovered: !this.state.isHovered });
    }

    getContentForEvo = () => {
        if (!this.state.isHovered) return this.props.data.evo;
        else return <Link to={`/details/${this.props.data.id}`}>więcej &#62;</Link>
    }

    getListItems = () => {
        console.log(this.state.isHovered);
        return (
            <>
                <StyledItemList columnItem>{this.props.data.id}</StyledItemList>
                <StyledItemList columnItem>{this.getContentForImg(this.props.isHeader)}</StyledItemList>
                <StyledItemList columnItem isHovered={this.state.isHovered}>{this.props.data.name}</StyledItemList>
                <StyledItemList columnItem>{this.props.data.min}</StyledItemList>
                <StyledItemList columnItem>{this.props.data.type}</StyledItemList>
                <StyledItemList columnItem lowercase isHovered={this.state.isHovered}>{this.getContentForEvo()}</StyledItemList>
            </>
        );
    }

    render() {

        return (
            <RowList isHovered={this.state.isHovered} onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()}>
                {this.getListItems()}
            </RowList>
        );

    };

}

export default Item;