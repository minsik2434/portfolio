import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Hbtn_b from "../assets/h_btn_b.png";
function Header({
  onWelcomeClick,
  onAboutClick,
  onSkillsClick,
  onProjectsClick,
  onContactClick,
  height,
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const headerRef = useRef(null);
  const [color, setColor] = useState({
    textColor: "text-white",
    bgColor: "",
    shadow: "",
  });

  const [hBtnState, setHbtnState] = useState(false);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const onHbtnClick = () => {
    if (hBtnState === false) {
      setHbtnState(true);
    } else {
      setHbtnState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  });

  useEffect(() => {
    if (
      scrollPosition <
      height - headerRef.current.getBoundingClientRect().height
    ) {
      setColor({
        textColor: "text-white",
        bgColor: "",
        shadow: "",
      });
    } else {
      setColor({
        textColor: "text-black",
        bgColor: "bg-white",
        shadow: "shadow shadow-neutral-400",
      });
    }
  }, [height, scrollPosition]);
  return (
    <div className="w-full top-0 fixed z-10">
      <div
        ref={headerRef}
        className={`flex justify-center ${color.bgColor} ${color.shadow} tablet:bg-white mobile:bg-white`}
      >
        <div
          className={`${color.textColor} w-[90%] tablet:text-black mobile:text-black`}
        >
          <div className="flex justify-between py-[18px]">
            <div className="text-[1.5rem] font-bold">
              <button onClick={onWelcomeClick}>Minsik&#39;s Portfolio</button>
            </div>
            <div className="flex gap-[30px] text-[18px] font-semibold mobile:hidden tablet:hidden">
              <button className="hover:text-[#adb5bd]" onClick={onAboutClick}>
                About
              </button>
              <button className="hover:text-[#adb5bd]" onClick={onSkillsClick}>
                Skills
              </button>
              <button
                className="hover:text-[#adb5bd]"
                onClick={onProjectsClick}
              >
                Project
              </button>
              <button className="hover:text-[#adb5bd]" onClick={onContactClick}>
                Contact
              </button>
            </div>
            <div className="hidden mobile:block tablet:block">
              <button type="button" onClick={onHbtnClick}>
                <img src={Hbtn_b} className="w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {hBtnState === true && (
        <div className="px-10 pb-5 bg-white">
          <ul className="flex flex-col gap-5 font-semibold">
            <li>
              <button className="hover:text-[#adb5bd]" onClick={onAboutClick}>
                About
              </button>
            </li>
            <li>
              <button className="hover:text-[#adb5bd]" onClick={onSkillsClick}>
                Skills
              </button>
            </li>
            <li>
              <button
                className="hover:text-[#adb5bd]"
                onClick={onProjectsClick}
              >
                Project
              </button>
            </li>
            <li>
              <button className="hover:text-[#adb5bd]" onClick={onContactClick}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
