import { appStyle } from "../styles";
import React from "react";
import { useMediaQuery } from "react-responsive";

import { Images } from "../constants";
import Card1 from "./cards/section1.card";

function Section1() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
const renderReadMore =()=> <a href="mailto:nour.ali.abdou@gmail.com">
<div className={`${appStyle.animation} ${ appStyle.readMore(isTabletOrMobile)}`}>
  READ MORE
</div>
</a>
  return (
    <div className={`${isTabletOrMobile ? "" :"flex flex-row  "}`}>
      <div className={`${isTabletOrMobile ? "" : "w-[82%]"}`}>
        <img
          // className="w-[70%]"
          src={isTabletOrMobile ? Images.mobileCover :Images.desktopCover}
          alt="Nordic Giant Profile Pic"
        />
        <div
          className={`${isTabletOrMobile ? "" : "grid grid-cols-2 "}`} //space-x-3.5
        >
          <h1 className={`${isTabletOrMobile ? "mr-5 ":"  w-4/5 "} mt-5 text-5xl font-bold text-title-text   `}>
            The Bright Future of Web 3.0?
          </h1>
          <div className={`${isTabletOrMobile ? " ":"  pl-6"}`}>
            <p className={`${isTabletOrMobile ? "text-lg leading-7":"text-xs leading-5 mr-5"}   my-8 text-body-text  `}>
              We dive into the next evolution of the web that cams to out the
              nower of the nattorms hack into the hands of the people. But is it
              reallv fulfilling its promise?
            </p>

           {renderReadMore()}
          </div>
        </div>
      </div>
      <div className={`${isTabletOrMobile ? "" : "w-[38%]"}`}>
        <div className={`${isTabletOrMobile ? "pt-7 my-16" : " ml-7 py-7"} box-content bg-box-bg px-6 `}>
          <p className={`${isTabletOrMobile ? "mb-2 text-4xl " : "text-3xl "} font-bold text-[#F7AB55]`}>New</p>
          <ul className="divide-y divide-box-body-text">
            {list.map((elem) => (
              <Card1 title={elem.title} body={elem.body} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section1;

const list = [
  {
    title: "Hydrogen VS Electric Cars",
    body: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of Al Artistry",
    body: "What are the possible adverse effects of on-demand Al image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    body: "Private funding by VC firms is down 50% YoY We take a lonk at what that means",
  },
];
