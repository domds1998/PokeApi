import React, { Component } from "react"
import { Container, LeftBox, MiddleBox, RightBox, Name, Description, Header, Img} from "../styles/detailsStyles";
import { Button } from "../styles/appStyles";
import { PokeTable as Table } from "../components/Table";
import logoUrl from "../materials/logo.png";
import pokeUrl from "../materials/poke.png";
import Image from "../components/Image";

class Details extends Component {
    state = {
        pokemonId: 1,
        img: null
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.pokemonId, 10);
        if(id == NaN) id = parseInt(1);

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(json => {
          console.log(json.sprites.front_default)
            this.setState({
                pokemonId: id,
                img: json.sprites.other.dream_world.front_default
            });
        }).catch(err => console.log("Error in first Fetch: " + err));

    }

    render() {
        return (
            <>
                <Container>
                    <LeftBox>
                        <Table></Table>
                    </LeftBox>
                    <MiddleBox>
                        <Header>
                            <img alt="logo" src={logoUrl}></img>
                        </Header>
                            <Img src={this.state.img} width="80%"/> 
                        <Name>
                            001 Bullbasaur
                        </Name>
                    </MiddleBox>
                    <RightBox>
                        <Description>
                            Bulbasaur - Seed Pokémon
                            For some time after its birth, it grows by gaining nourishment from the seed on its back.
                            <p>
                                <br /><b>Typ:</b> tralala
                                <br /><b>Płeć:</b> tralala
                                <br /><b>Region:</b> tralala
                                <br /><b>Występowanie w Dziczy:</b> tralala
                                <br /><b>Możliwość złapania:</b> tralala
                                <br /><b>Trudność złapania:</b> tralala
                                <br /><b>Występowanie Shiny:</b> tralala
                                <br /><b>Dodawanie do kolekcji przez:</b> tralala
                            </p>
                        </Description>
                    </RightBox>
                </Container>
                <Button to="/" fixed bottom="4vh" left="40px"><b>&#60; Powrót</b></Button>
                <Button to={`/details/${(this.state.pokemonId+1)}`} fixed bottom="4vh" right="40px"><b>Następny &#62;</b></Button>
            </>
        );
    }
}

export default Details;