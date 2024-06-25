import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Header({ onWelcomeClick, onAboutClick, height }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [color, setColor] = useState({
    textColor: "text-white",
    bgColor: "",
    shadow: "",
  });
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  });

  useEffect(() => {
    if (scrollPosition < 600) {
      setColor({
        textColor: "text-white",
        bgColor: "",
        shadow: "",
      });
    } else {
      setColor({
        textColor: "text-black",
        bgColor: "bg-white",
        shadow: "shadow",
      });
    }
  }, [scrollPosition]);
  return (
    <div
      className={`w-full flex justify-center ${color.bgColor} ${color.shadow} top-0 fixed`}
    >
      <div className={`${color.textColor} w-[90%]`}>
        <div className="flex justify-between py-[20px]">
          <div className="text-[25px] font-bold">
            <button onClick={onWelcomeClick}>Minsik&#39;s Portfolio</button>
          </div>
          <div className="flex gap-[30px] text-[18px] font-semibold">
            <button onClick={onAboutClick}>About</button>
            <button>Skills</button>
            <button>Project</button>
            <button>Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
