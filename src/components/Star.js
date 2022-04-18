import React from "react";
import star from "../images/star.png"
import starFilled from "../images/star-filled.png"

export default class Star extends React.Component {
    render() {
        let starIcon = this.props.isFilled ? starFilled : star

        return (
            <img src={starIcon}
            alt="star icon" 
            className="card-star" 
            onClick={this.props.handleClick}
        />
        )
    }
}
