import React from "react";
import my from "../assets/my.jpg";
import telePhone from "../assets/telephone.png";
import email from "../assets/email.png";
import name from "../assets/name.png";
import birth from "../assets/birth.png";
import grade from "../assets/grade.png";
import github from "../assets/skills/github.png";
import { forwardRef } from "react";
const About = forwardRef((props, ref) => {
  const githubLink = () => {
    window.location.href = "https://github.com/minsik2434"; // 이동하고자 하는 URL로 변경
  };

  return (
    <div
      className="py-[78px] px-[50px] tablet:px-[30px] mobile:px-[30px]"
      ref={ref}
    >
      <h2 className="px-[30px] text-[2.5rem] border-t-[2px] border-black pt-[10px] text-center font-bold">
        About
      </h2>
      <div className="flex tablet:flex-col mobile:flex-col mt-3">
        <div className="flex desktop:flex-col mobile:flex-col w-[40%] mobile:w-full tablet:w-full items-center bg-[#89b2e9] py-[40px] rounded-tl-[10px] rounded-bl-[10px] rounded-br-[70px] shadow-xl">
          <img
            src={my}
            className="w-[50%] tablet:w-[30%] mobile:w-[50%] tablet:ml-10 rounded-full"
          ></img>
          <div className="grid grid-cols-[10%_60%] gap-x-[20px] gap-y-[20px] tablet:gap-y-[13px] justify-center px-[10px] mobile:px-0 w-[80%] mt-[20px] text-[1rem] font-semibold">
            <img src={name} className="w-[35px]" /> <span>최민식</span>
            <img src={birth} className="w-[35px]" /> <span>1999-12-25</span>
            <img src={email} className="w-[35px]" />
            <span>minsik2434@gmail.com</span>
            <img src={telePhone} className="w-[35px]" />
            <span>010-2434-4402</span>
            <img src={grade} className="w-[35px]" />
            <span>한신대학교 컴퓨터공학부 졸업</span>
            <img src={github} className="w-[35px]" />
            <button
              className="bg-[#1263ce] rounded-lg hover:bg-[#4b89dc]"
              onClick={githubLink}
            >
              GITHUB
            </button>
          </div>
        </div>
        <div className="w-[60%] tablet:w-full mobile:w-full">
          <div className="px-[100px] pt-[80px] tablet:pt-[50px] mobile:pt-[20px] tablet:px-5 mobile:px-0">
            <h2 className="text-[30px] tablet:text-[25px] mobile:text-[20px] tablet:text-center mobile:text-center font-NotoSansKR_Light text-[#4b89dc]">
              업무에 대한 책임감과 팀과의 협력을 중심으로
            </h2>
            <div className="text-[20px] pt-[35px] tablet:text-[18px] mobile:text-[14px] px-10">
              <p>
                안녕하세요 책임감 있게 주어진 일을 완수하고 팀과의 협력으로
                목표를 달성하는 개발자 최민식 입니다.
              </p>
              <p>
                저는 웹 백엔드에 관련된 다양한 기술들을 학습하고 응용하여 여러
                프로젝트를 진행한 경험이 있습니다.
              </p>
              <p>
                문제 해결에 대해 적극적으로 나서는 자세를 가지고 있고 또한 팀의
                일원으로 협력과 소통의 중요성을 깊이 이해하고 있습니다. 이를
                통해 팀의 목표를 함께 달성하는것을 최우선으로 생각합니다. 팀
                프로젝트를 진행할때는 부여된 과제에 대해 책임감있게 완료하는 데
                집중하였고 이를 통해 팀과의 소통과 협력 능력을 키울 수
                있었습니다
              </p>
              <p>
                이러한 경험을 바탕으로 목표에 대해 끊임없이 학습하고 노력하며
                주어진 일을 책임감 있게 해결하는 개발자가 되겠습니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
About.displayName = "About";
export default About;
