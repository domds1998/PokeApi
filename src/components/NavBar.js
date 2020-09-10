import React, { Component } from "react";
import {NavBarList, NavBarItem} from "../styles/appStyles";

class NavBar extends Component {
    state = {
        currentPage: 1
    }



    prepareNavBar = () => {
        const items = [];

        for(let index = 1; index <= this.props.numberOfPages; index++){
            let isCurrent = (index == this.state.currentPage);
            items.push(
                <NavBarItem key={index} isCurrent={isCurrent} onClick={() => {
                    this.props.handlePage(index); 
                    this.setState({currentPage: index});
                }}>{index}</NavBarItem>
            );
        }

        return items;
    }

    render() { 
        return (
            <NavBarList>
                {this.prepareNavBar()}
            </NavBarList>
        );
    }
}
 
export default NavBar;