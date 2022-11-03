import React from "react";
import { useMediaQuery } from "react-responsive";

type Props = {
  title: string;
  body: string;
};
function Card1(elem: Props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <li key={elem.title} className={`${
      isTabletOrMobile ? "py-8" : "py-6 flex "
    } `}>
      <div>
        <p
          className={`${
            isTabletOrMobile ? "text-2xl mb-2" : "text-lg  "
          }  leading-7 font-bold text-white`}
        >
          {elem.title}
        </p>
        <p   className={`${
            isTabletOrMobile ? "text-lg leading-7" : "text-xs leading-5 "
          }   text-box-body-text`}
           >{elem.body}</p>
      </div>
    </li>
  );
}

export default Card1;
