import React, { Component } from "react";
import logoUrl from "../materials/logo.png";
import pokeUrl from "../materials/poke.png";
import Image from "../components/Image";
import {
    GlobalStyle,
    Container,
    ImageBox,
    Main,
    Header,
} from "../styles/appStyles";
import List from "../components/List";

class Home extends Component {
    state = {};
    render() {
        return (
            <>
                <GlobalStyle />
                <Container>
                    <ImageBox>
                        <Image url={pokeUrl} cover />
                    </ImageBox>
                    <Main>
                        <Header>
                            <Image url={logoUrl} width="400px" height="150px" />
                        </Header>
                        <List />
                    </Main>
                </Container>
            </>
        );
    }
}

export default Home;
