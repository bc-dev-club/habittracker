import * as types from "types";
import { Link } from "react-router-dom";
import { CSSProperties } from "react";

const Styles: { [key: string]: CSSProperties } = {
  link: {
    display: "block",
    padding: "35px 25px",
    color: "inherit",
    textDecoration: "none",
    border: "1px solid #AAAAAA",
    borderTop: "none",
    backgroundColor: "#FFFFFF",
    boxSizing: "border-box",
  },
};

type Props = {
  goal: types.Goal;
  isFirst: boolean;
};

export const GoalItem = ({ goal, isFirst }: Props) => {
  const borderTopStyle = { borderTop: isFirst ? "1px solid #AAAAAA" : "none" };

  return (
    <Link
      to={`/goals/${goal.id}`}
      style={{ ...Styles.link, ...borderTopStyle }}
    >
      {goal.title}
    </Link>
  );
};
