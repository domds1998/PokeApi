import React, { Component } from "react"
import { Container, LeftBox, MiddleBox, RightBox, Name, Description, Header, Img} from "../styles/detailsStyles";
import { Button } from "../styles/appStyles";
import { PokeTable as Table } from "../components/Table";
import logoUrl from "../materials/logo.png";

class Details extends Component {
    state = {
        pokemonId: parseInt(this.props.match.params.pokemonId,10),
        data: {}
    }

    componentDidMount(){
        this.getDataFromApi(this.props.match.params.pokemonId);
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
            this.getDataFromApi(nextProps.match.params.pokemonId);
            this.setState({pokemonId: parseInt(nextProps.match.params.pokemonId,10)});
        }
     }

    getDataFromApi = (pokemonId) => {
        Promise.all([
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response => response.json()),
            fetch(`https://pokeapi.co/api/v2/location-area/${pokemonId}`).then(response => response.json())
          ]).then(value => {
            this.setState({data: {
                name: value[0].name,
                id: value[0].id,
                img: value[0].sprites.other.dream_world.front_default,
                typ: value[0].types[0].type.name,
                location: value[1].location.name
            }});
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
                            <Img src={this.state.data.img} width="80%"/> 
                        <Name>
                            {this.state.data.id} {this.state.data.name}
                        </Name>
                    </MiddleBox>
                    <RightBox>
                        <Description>
                            <b>{this.state.data.name}</b> - Seed Pokémon
                            For some time after its birth, it grows by gaining nourishment from the seed on its back.
                            <p>
                                <br /><b>Typ:</b> {this.state.data.typ}
                                <br /><b>Płeć:</b> ?
                                <br /><b>Region:</b> {this.state.data.location}
                                <br /><b>Występowanie w Dziczy:</b> ?
                                <br /><b>Możliwość złapania:</b> ?
                                <br /><b>Trudność złapania:</b> ?
                                <br /><b>Występowanie Shiny:</b> ?
                                <br /><b>Dodawanie do kolekcji przez:</b> ?
                            </p>
                        </Description>
                    </RightBox>
                </Container>
                <Button to="/" fixed bottom="4vh" left="40px"><b>&#60; Powrót</b></Button>
                <Button to={`/details/${parseInt((this.state.pokemonId+1),10)}`}  fixed bottom="4vh" right="40px"><b>Następny &#62;</b></Button>
            </>
        );
    }
}

export default Details;