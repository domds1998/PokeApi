import React from "react";
import {ImageWrapper} from '../styles/appStyles';

const Image = (props) => {
    return (
        <ImageWrapper url={props.url} width={props.width} height={props.height} cover={props.cover}></ImageWrapper>
    );
}

export default Image;