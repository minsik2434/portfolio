import React from "react";
import github from "../assets/skills/github.png";
import instargram from "../assets/instargram.png";
import talk from "../assets/talk.png";
function Footer() {
  return (
    <div className="w-full bg-[#262626]">
      <div className="py-16 px-16 tablet:py-10 mobile:py-7">
        <div className="border-b-4 tablet:border-b-3 mobile:border-b-2 py-2 border-white">
          <span className="text-white font-bold text-[25px] tablet:text-[20px] mobile:text-[15px]">
            Minsik&apos;s Portfolio
          </span>
        </div>
        <div className="py-10 tablet:py-5 mobile:py-4">
          <ul className="flex items-center justify-center gap-10">
            <li className="bg-white p-1 rounded-xl">
              <a href="https://github.com/minsik2434">
                <img src={github} className="w-8" />
              </a>
            </li>
            <li className="bg-white p-1 rounded-xl">
              <a href="https://www.instagram.com/ms_choi2434">
                <img src={instargram} className="w-8" />
              </a>
            </li>
            <li className="bg-white p-1 rounded-xl">
              <a href="https://qr.kakao.com/talk/sVB59P43RPR2.x0gMGVlTIKVR3s-">
                <img src={talk} className="w-8" />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <span className="text-white tablet:text-[14px] mobile:text-[12px]">
            @choiminsik All rights reserved
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
