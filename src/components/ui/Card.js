import classes from "./Card.module.css";

function Card(props) {
  // every component received the "children" prop by default. "children" holds all of the JSX content that's between the opening and closing tag of this component where it's used.
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
