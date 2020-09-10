import React, { Component } from "react"
import { Container, LeftBox, MiddleBox, RightBox, Name, Description } from "../styles/detailsStyles";
import { Header, Button } from "../styles/appStyles";
import { PokeTable as Table } from "../components/Table";
import logoUrl from "../materials/logo.png";
import pokeUrl from "../materials/poke.png";
import Image from "../components/Image";

class Details extends Component {
    state = {}
    render() {
        return (
            <>
                <Container>
                    <LeftBox>
                        <Table></Table>
                    </LeftBox>
                    <MiddleBox>
                        <Header>
                            {/* <Image url={logoUrl} width="70%" height="150px" /> */}
                            <img alt="logo" src={logoUrl}></img>
                        </Header>
                        {/* <Image url={pokeUrl} width="100%" height="60vh" /> */}
                        <img alt="image" src={pokeUrl}></img>
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
                <Button to="/details" fixed bottom="4vh" right="40px"><b>Następny &#62;</b></Button>
            </>
        );
    }
}

export default Details;