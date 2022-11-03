import { appStyle } from "../../styles";
import React from "react";
import { useMediaQuery } from "react-responsive";

type Props = {
  id: string;
  title: string;
  body: string;
  image: string;
};
function Card2(person: Props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div
      key={person.id}
      className={`${appStyle.animation} ${
        isTabletOrMobile ? "py-4 flex " : "py-4 px-3 flex w-1/3 mx-4"
      }`}
    >
      <img
        className={isTabletOrMobile ? "h-36 w-28" : " w-20"}
        src={person.image}
        alt=""
      />
      <div className={`grid grid-row-3 content-between ml-3 ${
            isTabletOrMobile ? "pl-3" : ""
          }`} >
        <p
          className={`font-bold text-id-grey ${
            isTabletOrMobile ? "text-3xl" : "text-2xl"
          }`}
        >
          {person.id}
        </p>
        <p  className={`font-bold text-gray-900 ${
            isTabletOrMobile ? "text-2xl" : "text-sm"
          }`}>{person.title}</p>
        <p className={` text-[#A6A3A8] ${
            isTabletOrMobile ? "text-lg" : "text-xs"
          }`}>{person.body}</p>
      </div>
    </div>
  );
}

export default Card2;
