import styled, { css, createGlobalStyle } from "styled-components";
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: #1a5cb0;
    font-size: 1.1vw;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
  }
`;

export const StyledItemList = styled.li`
  list-style-type: none;
  width: 100%;
  padding: 0;
  text-align: center;

  ${(props) =>
    props.rowItem &&
    css`
      background-color: #f4f4f4;
      margin-top: 2px;
      display: flex;
      line-height: 100%;

      :hover {
        background-color: #1a5cb0;
      }
    `}

  ${(props) =>
    props.headerItem &&
    css`
      background-color: yellow;
      font-weight: bold;
    `}

    ${(props) =>
    props.columnItem &&
    css`
        height: 45px;
        flex-grow: 1;
        flex-basis: 0;
        padding: 0;
        line-height: 45px;
        
    @media (max-width: 768px) {
      margin: 5px;
    }
    `}

    ${(props) => (props.isHovered && !props.isHeader) &&
      css`
          color: yellow;
    `}
`;

export const RowList = styled.ul`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
`;

export const StyledList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  margin: 0;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ImageBox = styled.div`
  width: 50vw;
  height: auto;
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100vw;
    min-height: 0px;
    height: 20vh;
    padding: 0;
    margin: 0;
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  background-image: url(${(props) => props.url});
  min-height: ${props => props.height || "100%"};
  width: ${props => props.width || "100%"};
  margin: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${props => props.cover ? "cover" : "contain"};
  padding: 0;
`;


export const Main = styled.div`
  width: 50vw;
  min-height: 100vh;
  height: auto;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100vw;
    height: auto;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 20%;
  }
`;

export const NavBarList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const NavBarItem = styled.li`
  list-style-type: none;
  margin: 0px 5px 0px 0px;
  padding: 0;
  height: 2.5em;
  width: 2.5em;
  text-align: center;
  line-height: 2.5em;
  background-color: yellow;
  font-weight: bold;
  color: #1a5cb0;

  ${(props) =>
    props.isCurrent &&
    css`
    background-color: #1a5cb0;
    color: yellow;
    `}

  :hover {
    background-color: #1a5cb0;
    color: yellow;
  }
`;

export const Button = styled(Link)`
  padding: 10px;
  background-color: yellow;
  text-decoration: none;

  ${(props) =>
    props.fixed &&
    css`
    position: fixed;
    bottom: ${props.bottom};
    top: ${props.top};
    left: ${props.left};
    right: ${props.right};
    `}

    :hover {
      background-color: #1a5cb0;
      color: yellow;
    }
`;

export const ClearLink = styled(Link)`
  text-decoration: none;
  color: yellow;
  text-transform: lowercase;
`;
