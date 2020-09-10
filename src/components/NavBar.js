import React, { Component } from "react";
import {NavBarList, NavBarItem} from "../styles/appStyles";

class NavBar extends Component {
    state = {}
    render() { 
        return (
            <NavBarList>
                <NavBarItem>1</NavBarItem>
                <NavBarItem>2</NavBarItem>
                <NavBarItem>3</NavBarItem>
                <NavBarItem>4</NavBarItem>
                <NavBarItem>5</NavBarItem>
                <NavBarItem>6</NavBarItem>
            </NavBarList>
        );
    }
}
 
export default NavBar;