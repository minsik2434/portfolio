import React from "react";
import main from "../../assets/devmate/main.png";
import login from "../../assets/devmate/login.png";
import signup from "../../assets/devmate/signup.png";
import board from "../../assets/devmate/board.png";
import board2 from "../../assets/devmate/board2.png";
import boardDetail from "../../assets/devmate/boardDetail.png";
import profile from "../../assets/devmate/profile.png";
import ImgSwiper from "../ImgSwiper";
function DevMate() {
  const imageSrcs = [main, login, signup, board, board2, boardDetail, profile];
  return (
    <div className="bg-white pt-[20px] rounded-3xl border border-gray-100">
      <h2 className="text-[30px] text-center font-semibold">DevMate</h2>
      <p className="text-center">개발자 커뮤니티 사이트</p>
      <div className="flex gap-[50px] px-[40px] py-[50px]">
        <div className="w-[50%] h-full image">
          <ImgSwiper imageSrcs={imageSrcs} />
        </div>
        <div className="flex flex-col w-[40%]">
          <h3 className="text-[20px] font-semibol py-[10px]">Description</h3>
          <p className="font-NotoSansKR_Light">
            개발자들이 자유롭게 의사소통하고 필요한 지식을 얻고 멘토찾기,
            멘티모집, 스터디 참여등 커뮤니티 활동을 위한 사이트 입니다 개발자를
            위한 사이트이므로 게시글을 마크다운으로 작성할 수 있도록 하였고
            접근성을 높이기 위해 반응형으로 제작해 모바일환경 UI 제공됩니다.{" "}
            <br />
            MySql을 이용해 데이터베이스를 구성하였고 API 백엔드 서버는 Amazon
            EC2를 이용해 배포하였고, 웹 사이트 FrontEnd 서버는 Vercel을 이용해
            배포하였습니다. <br />
            백엔드 서버는 Spring 프레임워크를 이용해 구현하였으며 ORM은 JPA를
            사용해 핵심 로직을 구현하였습니다 <br />
            프론트엔드 서버는 리액트를 사용해 구현하였으며 Zustand를 사용해 전역
            상태 관리를 통해 체계적으로 상태 관리 하였습니다
          </p>
          <div className="mt-[10px]">
            <h3 className="text-[20px]">주요기능</h3>
            <ul className="font-NotoSansKR_Light list-disc ml-5">
              <li>
                <div className="flex">
                  <span className="text-nowrap">회원 관리 :</span>
                  <span>
                    로그인, 로그아웃, 회원 등록, 회원 정보 수정, 게시한글,
                    댓글단글, 좋아요한 글 조회
                  </span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span className="text-nowrap">게시판 :</span>
                  <span>정렬, 카테고리별 조회, 검색, 태그별 조회</span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span className="text-nowrap">게시글 :</span>
                  <span>등록, 수정, 삭제, 좋아요, 조회수, 댓글</span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span className="text-nowrap">댓글 :</span>
                  <span>등록, 수정, 삭제</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="py-[10px] border-b-2">
            <h3 className="text-[20px]">사용 기술</h3>
            <ul className="ml-5 list-disc">
              <li>
                <div className="flex">
                  <span className="text-nowrap">FrontEnd :</span>
                  <span>React, ReactRouter, HTML, Tailwind, Zustand, Vite</span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span className="text-nowrap">BackEnd :</span>
                  <span>
                    Java, Spring Boot, Spring Security, JPA, Spring Data JPA,
                    Querydsl Mysql Amazon EC2, Amazon S3
                  </span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span className="text-nowrap">ETC :</span>
                  <span>Github, Git, Vercel, Pinpoint</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="py-[10px]">
            <ul className="list-disc ml-5">
              <li>
                <div>
                  {" "}
                  <span>사이트 URL : </span>
                  <a
                    className="underline text-blue-400"
                    href="https://devmate-fe.vercel.app"
                  >
                    https://devmate-fe.vercel.app
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <span>프론드엔드 깃허브 : </span>
                  <a
                    className="underline text-blue-400"
                    href="https://github.com/minsik2434/DevMateFE"
                  >
                    https://github.com/minsik2434/DevMateFE
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <span>백엔드 깃허브 : </span>
                  <a
                    className="underline text-blue-400"
                    href="https://github.com/minsik2434/DevMateBE"
                  >
                    https://github.com/minsik2434/DevMateBE
                  </a>
                </div>
              </li>
              <li>
                <div className="flex  text-nowrap">
                  <span>프로젝트 기획 : </span>
                  <a
                    className="underline text-blue-400"
                    href="https://www.notion.so/DevMate-cd8e323d3c744ad8a3659973e7e77274"
                  >
                    기획 노션
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevMate;
