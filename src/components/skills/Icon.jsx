import React from "react";

function Icon({ img, name }) {
  return (
    <div className="flex desktop:flex-col tablet:flex-col mobile:gap-8 justify-center items-center">
      <div
        className="rounded-[40px] w-[110px] tablet:w-[70px] mobile:w-[50px] shadow-lg shadow-neutral-400
     bg-[#f8f9fa] hover:-translate-y-3 hover:transition-all duration-200"
      >
        <img src={img} />
      </div>
      <span className="text-center mt-[20px] text-[18px] tablet:text-[14px] mobile:text-[10px] font-semibold">
        {name}
      </span>
    </div>
  );
}

export default Icon;
