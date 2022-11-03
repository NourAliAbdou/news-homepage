import { Images } from "../constants";
import React from "react";
import { useMediaQuery } from "react-responsive";

import { appStyle } from "../styles";
import Card2 from "./cards/section2.card";
const people = [
  {
    id: "01",
    title: "Reviving Retro PCs",
    body: "What happens when old PCs are given modern upgrades?",
    image: Images.retro,
  },
  {
    id: "02",

    title: "Top 10 Laptops of 2022",
    body: "Our best nicks for various needs and budgets.",
    image: Images.laptops,
  },
  {
    id: "03",

    title: "The Growth of Gaming",
    body: "How the pandemic has sparked fresh opportunities.",
    image: Images.gaming,
  },
];
function TestC2() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div
      className={isTabletOrMobile ? "w-full" : "flex flex-row w-full mt-8"}
    >
      {people.map((person) => (
        <Card2
          id={person.id}
          image={person.image}
          title={person.title}
          body={person.body}
        />
      ))}
    </div>
  );
}

export default TestC2;
