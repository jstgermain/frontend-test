import React, { Component } from "react";
import "./Card.scss";

export default class Card extends Component {
  render() {
    const {
      className,
      cardlID,
      title,
      image,
      defaultImage,
      text,
    } = this.props;

    return (
      <div className={"card " + className} id={cardlID && cardlID + "-card"}>
        <div className="card--title">{title}</div>
        <div className="card--content">
          <div className="card--content-image"><img src={image} onError={defaultImage} /></div>
          <div className="card--content-text">{text}</div>
        </div>
      </div>
    );
  }
}
