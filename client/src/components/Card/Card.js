import React from "react";
import { Tag } from "antd";
import classes from "./Card.module.css";

const Card = props => (
  <div className={classes.cardContainer}>
    <div className={classes.topRow}>
      <h1>{props.companyName}</h1>
      <p>{props.package}</p>
    </div>
    <div className={classes.secondRow}>
      <h3>{props.post}</h3>
      <p>{props.city}</p>
    </div>

    <p className={classes.content} style={{ margin: "16px 0" }}>
      {props.content}
    </p>
    <div>
      <Tag color="#28a745">Shortlisted</Tag>
    </div>
  </div>
);

export {Card};
