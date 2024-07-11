import React from "react";
import Button from "./Button";

const list = [
  "all",
  "gaming",
  "songs",
  "live",
  "cricket",
  "SOccer",
  "News",
  "Lionel messi",
  "barcelona",
  "Football",
  "COding",
  "Web Development",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((btn) => {
        return <Button name={btn} key={btn} />;
      })}
    </div>
  );
};

export default ButtonList;
