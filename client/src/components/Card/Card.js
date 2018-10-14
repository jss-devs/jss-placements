import React from "react";
import { Tag } from "antd";
import classes from "./Card.module.css";

const Card = props => (
  <div className={classes.cardContainer}>
  <section class={classes.card}>
    <main>
      <h1>
        {props.companyName}
      </h1>
      <h4>{props.post}</h4>
    </main>
    <aside>
      <p>
        {props.package}
      </p>
      <p>
        {props.city}
      </p>
    </aside>
    <p>
      {props.content}
    </p>
    <span className={classes.tags}>
      <Tag className={classes.antTag} color="#28a745">Shortlisted</Tag>
    </span>
  </section>
    {/*<div className={classes.topRow}>
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
    <div className={classes.tags}>
      <Tag className={classes.antTag} color="#28a745">Shortlisted</Tag>
</div>*/}
  </div>
);

export {Card};
