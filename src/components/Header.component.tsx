import React, { useState } from "react";
import { headerStyle } from "../styles";
import { Images } from "../constants";
import { useMediaQuery } from "react-responsive";

const menuItems = ["Home", "New", "Popular", "Trending", "Categories"];
const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [openMenu, setOpenMenu] = useState(false);

  const renderMenuButton = () => (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className={headerStyle.navMenuButton}
      aria-controls="navbar-default"
      aria-expanded="false"
      onClick={() => setOpenMenu(true)}
    >
      <span className="sr-only">Open main menu</span>
      <img src={Images.Menu} className=" h-5" alt="Flowbite Logo" />
    </button>
  );
  const renderCloseMenuButton = () => (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className={`mb-16 mt-9 mx-6 ${headerStyle.navMenuButton}`}
      aria-controls="navbar-default"
      aria-expanded="false"
      onClick={() => setOpenMenu(false)}
    >
      <span className="sr-only">Open main menu</span>
      <img src={Images.MenuClose} className=" h-9" alt="Flowbite Logo" />
    </button>
  );
  const renderMenuList = () => (
    <div className="justify-end items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="justify-end relative w-2/3    ">
        <div className="shadow-lg h-screen relative bg-white outline-none focus:outline-none">
          <div className="flex md:hidden  justify-end">{renderCloseMenuButton()}</div>
          <div className=" md:hidden w-full ">
            {menuItems.map((name) => (
              <a
                href="#"
                className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out"
              >
                <span className={`${headerStyle.navListText} text-lg`}>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  const renderNavList = () => (
    <div className={headerStyle.navListBox} id="navbar-default">
      <ul className={headerStyle.navList}>
        {menuItems.map((name) => (
          <li>
            <a href="#" className={headerStyle.navListText} aria-current="page">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  const renderModalTestComponent = () => (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Modal Title</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setOpenMenu(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                I always felt like I could do anything. That’s the main thing
                people are controlled by! Thoughts- their perception of
                themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you won’t do
                anything. I was taught I could do everything.
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpenMenu(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
  const renderNavBar = () => (
    <nav className={headerStyle.nav}>
      <div className={headerStyle.navBox}>
        <a
          href="https://www.linkedin.com/in/nour-abdou/"
          className="flex items-center"
        >
          <img src={Images.Logo} className="mr-3 h-6  " alt="Flowbite Logo" />
        </a>

        {isTabletOrMobile ? renderMenuButton() : renderNavList()}
      </div>
      {openMenu && renderMenuList()}
    </nav>
  );
  return <div id="home">{renderNavBar()}</div>;
};

export default Header;
