import React, { Component } from "react";
import { StyledItemList, StyledList } from "../styles/appStyles";
import Item from "../components/Item";
import NavBar from "../components/NavBar";

class List
  extends Component {
  state = {
    itemsPerPage: 10,
    data: [],
    limit: 100,
    numberOfPages: 0,
    offset: 0,
    header: {
      id: "Id",
      img: "Pokemon",
      name: "Name",
      min: "Min.lvl",
      type: "Type",
      evo: "Evolution"
    }
  }

  componentDidMount() {
    const jsonData = [];

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.state.limit}`)
      .then(response => response.json())
      .then(json => {
        json.results.map(item => {
          fetch(item.url)
            .then(response => response.json())
            .then((details) => {
              jsonData.push({
                id: details.id,
                img: details.sprites.other.dream_world.front_default,
                name: item.name,
                min: "?",
                type: details.types[0].type.name,
                evo: "?"
              });
              if(jsonData.length === this.state.limit) {
                jsonData.sort((a,b) => a.id - b.id);
                this.setState({ data: jsonData, numberOfPages: Math.round(this.state.limit/this.state.itemsPerPage)});
              }
            }).catch(err => console.log("Error in second Fetch: " + err));;
        });
      }).catch(err => console.log("Error in first Fetch: " + err));;
  }

  handlePage = (page) => {
    this.setState({
      currentPage: page,
      offset: (page-1)*this.state.itemsPerPage
    });
  }

  onMouseEnter = (key) => {
    console.log(key);
  }


  render() {

    const prepareItems = () => {
      if (this.state.data.length > 0) {
        const items = [];
        let currentKey = 0;
        for (let index = this.state.offset; index < (this.state.offset + this.state.itemsPerPage) && index < this.state.limit; index++) {
          items.push(
            <StyledItemList key={currentKey} rowItem>
              <Item data={this.state.data[index]} mouseEnter={this.onMouseEnter} />
            </StyledItemList>
          );
          currentKey++;
        }

        return items;
      }
      return "Loading...";
    }

    return (
      <>
        <StyledList>
          <StyledItemList headerItem>
            <Item data={this.state.header} isHeader />
          </StyledItemList>
          {prepareItems()}
        </StyledList>
        <NavBar numberOfPages={this.state.numberOfPages} handlePage={this.handlePage}/>
      </>
    );
  }
}


export default List;
