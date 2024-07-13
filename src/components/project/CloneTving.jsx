import React from "react";
import onBoarding1 from "../../assets/clonetving/onBoarding1.png";
import onBoarding2 from "../../assets/clonetving/onBoarding2.png";
import login from "../../assets/clonetving/login.png";
import login2 from "../../assets/clonetving/login2.png";
import profile from "../../assets/clonetving/profile.png";
import profileEdit from "../../assets/clonetving/profileEdit.png";
import content from "../../assets/clonetving/content.png";
import search from "../../assets/clonetving/search.png";

import ImgSwiper from "../ImgSwiper";
function CloneTving() {
  const imageSrcs = [
    onBoarding1,
    onBoarding2,
    login,
    login2,
    profile,
    profileEdit,
    content,
    search,
  ];
  return (
    <div className="pt-[20px] px-[30px]">
      <h2 className="text-[30px] text-center font-semibold">Clone-Tving</h2>
      <p className="text-center">OTT Tving 클론코딩 사이트</p>
      <div className="flex gap-[50px] px-[40px] py-[50px]">
        <div className="w-[50%] h-full image">
          <ImgSwiper imageSrcs={imageSrcs} />
          <div className="flex flex-col gap-2">
            <ul className="list-disc text-[18px] mt-[50px] flex flex-col gap-2 pl-5">
              <li>
                <div className="flex gap-[10px]">
                  <span>인원</span>:<span>4</span>
                </div>
              </li>
              <li>
                <div className="flex gap-[10px]">
                  <span>기간</span>:<sapn>2023.12 ~ 2024.04</sapn>
                </div>
              </li>
            </ul>
            <h2 className="text-[20px] mt-[10px]">역할 및 기여</h2>
            <div className="flex gap-2">
              <span className="text-nowrap">데이터베이스 설계</span> :
              <span>데이터베이스 모델링, MySQL을 사용해 데이터베이스 구축</span>
            </div>
            <div className="flex gap-2">
              <span className="text-nowrap">API 구현</span> :
              <span>
                프로필 CRUD 로직 구현, 콘텐츠 관련 로직 구현, 장르 조회 로직
                구현, 쿼리 성능 최적화
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[40%]">
          <h3 className="text-[20px] font-semibol py-[10px]">Description</h3>
          <p className="font-NotoSansKR_Light">
            학습 목적으로 OTT Tving 사이트 클론 코딩으로 구현한 웹 페이지
            입니다. <br />
            TMDB 사이트의 API를 이용해 데이터베이스를 구성하였고 OTT Tving
            사이트의 테마별 컨텐츠 조회나 인기있는 컨텐츠 조회, 프로필 관리 등을
            구현하였고 컨텐츠별 리뷰와 평점 등을 남기는 추가 기능을
            구현하였습니다 <br />
            MySql을 사용해 데이터베이스를 구축하였고 Amazon EC2를 이용해 백엔드
            서버 배포, vercel을 사용해 프론트엔드 서버 배포하였습니다 <br />
            깃허브와 깃을 통해 버전관리와 일정관리를 하여 효율적으로
            협업하였습니다
          </p>
          <div className="mt-[10px]">
            <h3 className="text-[20px]">주요기능</h3>
            <ul className="font-NotoSansKR_Light list-disc ml-5">
              <li>
                <div className="flex">
                  <span className="text-nowrap">회원 관리 :</span>
                  <span>로그인, 로그아웃, 회원 등록</span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span className="text-nowrap">프로필 :</span>
                  <span>프로필 등록, 프로필 수정, 프로필 삭제</span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span className="text-nowrap">콘텐츠 :</span>
                  <span>
                    최신순, 인기순 정렬, 장르별 콘텐츠 조회, 콘텐츠 타입별 조회,
                    검색어를 통해 콘텐츠 제목 조회, 콘텐츠 장르와 콘텐츠 소개글
                    등 상세 정보 조회, 조회수 증가
                  </span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span className="text-nowrap">평가 :</span>
                  <span>한줄평 등록, 평점 등록, 수정, 삭제</span>
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
                    Querydsl, Mysql Amazon EC2, Amazon S3, Redis
                  </span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span className="text-nowrap">ETC :</span>
                  <span>Github, Git, Vercel</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="py-[10px]">
            <ul className="list-disc ml-5">
              <li>
                <div>
                  <span>사이트 URL : </span>
                  <a
                    className="underline text-blue-400"
                    href="https://devmate-fe.vercel.app"
                  >
                    https://clone-tving.vercel.app
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <span>프론드엔드 깃허브 : </span>
                  <a
                    className="underline text-blue-400"
                    href="https://github.com/hoyeonjigi/CloneTving"
                  >
                    https://github.com/hoyeonjigi/CloneTving
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <span className="text-nowrap">백엔드 깃허브 : </span>
                  <a
                    className="underline text-blue-400"
                    href="https://github.com/hoyeonjigi/CloneTving_BackEnd"
                  >
                    https://github.com/hoyeonjigi/CloneTving_BackEnd
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

export default CloneTving;