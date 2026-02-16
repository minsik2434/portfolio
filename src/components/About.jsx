import React from "react";
import my from "../assets/my.jpg";
import telePhone from "../assets/telephone.png";
import email from "../assets/email.png";
import name from "../assets/name.png";
import birth from "../assets/birth.png";
import grade from "../assets/grade.png";
import github from "../assets/skills/github.png";
import blog from "../assets/Blog.png";
import { forwardRef } from "react";
const About = forwardRef((props, ref) => {
  const githubLink = () => {
    window.location.href = "https://github.com/minsik2434";
  };

  const devBlogLink = () => {
    window.location.href = "https://velog.io/@minsik2434/posts";
  };
  return (
    <div
      className="py-[78px] px-[50px] tablet:px-[30px] mobile:px-[30px]"
      ref={ref}
    >
      <h2 className="px-[30px] text-[40px] tablet:text-[30px] mobile:text-[25px] border-t-[2px] border-black pt-[10px] text-center font-bold">
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
            <img src={blog} className="w-[35px]" />
            <button
              className="bg-[#1263ce] rounded-lg hover:bg-[#4b89dc]"
              onClick={devBlogLink}
            >
              Blog
            </button>
          </div>
        </div>
        <div className="w-[60%] tablet:w-full mobile:w-full">
          <div className="px-[100px] tablet:pt-[50px] mobile:pt-[20px] tablet:px-5 mobile:px-0">
            <h2 className="px-10 text-[30px] tablet:text-[25px] mobile:text-[20px] font-NotoSansKR_Light text-[#4b89dc]">
              코드 품질과 리팩터링
            </h2>
            <div className="text-[20px] pt-[10px] tablet:pt-[20px] mobile:pt-[15px] tablet:text-[18px] mobile:text-[14px] px-10">
              <p>
                단순히 기능이 동작하는 것에 만족하지 않고 유지보수성을 높이기
                위해 디자인 패턴을 고민하고, 지속적인 리팩터링을 통해 읽기 좋은
                효율적인 코드를 작성하기 위해 끊임없이 노력합니다.
              </p>
            </div>
            <h2 className="px-10 text-[30px] pt-[10px] tablet:text-[25px] mobile:text-[20px] font-NotoSansKR_Light text-[#4b89dc]">
              확장성 있는 아키텍처
            </h2>
            <div className="text-[20px] pt-[10px] tablet:pt-[20px] mobile:pt-[15px] tablet:text-[18px] mobile:text-[14px] px-10">
              <p>
                시스템 확장에 대비하여 유연하게 대처할 수 있는 시스템 구조를
                설계하는데 관심을 가지고 있으며, 확장에 유연한 구조를 프로젝트에
                적용하기 위해 고민합니다.
              </p>
            </div>
            <h2 className="px-10 text-[30px] pt-[10px] tablet:text-[25px] mobile:text-[20px] font-NotoSansKR_Light text-[#4b89dc]">
              인프라와 배포 자동화
            </h2>
            <div className="text-[20px] pt-[10px] tablet:pt-[20px] mobile:pt-[15px] tablet:text-[18px] mobile:text-[14px] px-10">
              <p>
                애플리케이션 로직 개발 뿐만 아니라 Linux 환경에서의 서버 운영과
                Jenkins 등을 활용한 배포 파이프라인(CI/CD)를 구축 등 서비스의
                전체적인 흐름을 이해하고 주도적으로 다룰 수 있도록 노력합니다.
              </p>
            </div>
            <h2 className="px-10 text-[30px] pt-[10px] tablet:text-[25px] mobile:text-[20px] font-NotoSansKR_Light text-[#4b89dc]">
              주도적인 문제 해결과 협업
            </h2>
            <div className="text-[20px] pt-[10px] tablet:pt-[20px] mobile:pt-[15px] tablet:text-[18px] mobile:text-[14px] px-10">
              <p>
                주어진 과제에 대해 끝까지 책임지고 완수하는 끈기로 문제를
                해결하고, 팀 프로젝트시 적극적인 기술적 소통을 통해 팀원들과
                함께 더 나은 문제 해결 방법을 찾아가는 과정을 중요시 생각합니다.
              </p>
            </div>
            <h2 className="px-10 text-[30px] pt-[10px] tablet:text-[25px] mobile:text-[20px] font-NotoSansKR_Light text-[#4b89dc] border-t border-gray-200 mt-[30px]">
              Awards
            </h2>
            <div className="text-[20px] pt-[15px] tablet:pt-[20px] mobile:pt-[15px] tablet:text-[18px] mobile:text-[14px] px-10">
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#4b89dc] mt-1">🏆</span>
                  <div>
                    <strong className="block text-gray-800">
                      종합설계 경진대회 은상
                    </strong>
                    <span className="text-[16px] mobile:text-[13px] text-gray-500">
                      2023.11.23 | 한신대학교 AI SW 대학장
                    </span>
                    <p className="text-[16px] mobile:text-[13px] text-gray-600 mt-1">
                      SW교육센터에서 주관하는 창의적 종합설계 경진대회에 제작
                      출품한 작품의 창의성과 우수성으로 은상을 수상
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4b89dc] mt-1">🏆</span>
                  <div>
                    <strong className="block text-gray-800">
                      하계 졸업논문 경진대회 동상
                    </strong>
                    <span className="text-[16px] mobile:text-[13px] text-gray-500">
                      2023.7.4 | 한국 디지털콘텐츠 학회
                    </span>
                    <p className="text-[16px] mobile:text-[13px] text-gray-600 mt-1">
                      대학생 논문 경진 대회에서 발표된 논문 중에서 동상 논문으로
                      선정되어 동상을 수상
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
About.displayName = "About";
export default About;
