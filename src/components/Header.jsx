import React from "react";

function Header() {
  return (
    <div className="text-white top-0 fixed w-[90%]">
      <div className="flex justify-between py-[20px]">
        <div className="text-[25px] font-bold">
          <button>Minsik&#39;s Portfolio</button>
        </div>
        <div className="flex gap-[30px] text-[18px] font-bold text-gray-400">
          <button>About</button>
          <button>Skils</button>
          <button>Project</button>
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
