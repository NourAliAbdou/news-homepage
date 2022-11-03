const appStyle = {
  title: "text-3xl font-bold",
  animation:
    "transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110   duration-300",
  readMore: (isTabletOrMobile) =>
    `${
      isTabletOrMobile
        ? "text-sm px-9 py-4 tracking-tightest_mob"
        : "text-xs px-8 py-3 tracking-tightest"
    } font-bold bg-[#F15D50] text-white   tracking-tightest uppercase w-fit`,
};
export default appStyle;
