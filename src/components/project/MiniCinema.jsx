import React from "react";
import ImgSwiper from "../ImgSwiper";
import main from "../../assets/minicinema/main.png";
import detail from "../../assets/minicinema/detail.png";
import reserve from "../../assets/minicinema/reserve.png";
import seat from "../../assets/minicinema/seat.png";
import reservation from "../../assets/minicinema/reservation.png";
import payment from "../../assets/minicinema/payment.png";
import search from "../../assets/minicinema/search.png";
function MiniCinema() {
  const imageSrcs = [main, detail, reserve, seat, payment, reservation, search];
  return (
    <div className="pt-[20px] px-[30px]">
      <h2 className="text-[30px] text-center font-semibold">Mini Cinema</h2>
      <p className="text-center">영화 좌석 예매 사이트</p>
      <div className="desktop:hidden w-[100%] mt-2 image">
        <ImgSwiper imageSrcs={imageSrcs} />
      </div>
      <div className="flex gap-[50px] tablet:flex-col-reverse mobile:flex-col-reverse tablet:gap-[20px] mobile:gap-[10px] px-[40px] tablet:px-5 tablet:py-[20px] mobile:px-0 py-[50px]">
        <div className="w-[50%] image tablet:w-full mobile:w-full">
          <div className="mobile:hidden tablet:hidden">
            <ImgSwiper imageSrcs={imageSrcs} />
          </div>
          <ul className="list-disc text-[18px] mobile:text-[14px] mt-[50px] tablet:mt-[10px] mobile:mt-[5px] mobile:text-nowrap flex flex-col gap-2 pl-5">
            <li>
              <div className="flex gap-[10px]">
                <span>기간</span>:<span>2024.03 ~ 2024.4</span>
              </div>
            </li>
          </ul>
          <h2 className="text-[20px] mt-[10px]">역할 및 기여</h2>
          <div className="flex flex-col gap-1">
            <div className="flex mobile:block gap-2">
              <span className="text-nowrap font-bold">기획</span> :
              <span>
                프로젝트 목적과 개요, 기대효과, 대상 사용자 설정, 화면 설계
              </span>
            </div>
            <div className="flex mobile:block gap-2">
              <span className="text-nowrap font-bold">데이터베이스 설계</span> :
              <span>
                데이터베이스 모델링, MySql을 이용해 데이터베이스 구축, TMDB
                API를 이용해 데이터베이스 데이터베이스 구축
              </span>
            </div>
            <div className="flex mobile:block gap-2">
              <span className="text-nowrap font-bold">핵심 로직 구현</span> :
              <span>
                사용자 정보 데이터 관련 로직(저장,수정), 영화 조회 로직, 좌석
                예약 , 예매, 결제 회원 결제내역, 멤버쉽등 핵심 로직 구현
              </span>
            </div>
            <div className="flex mobile:block gap-2">
              <span className="text-nowrap font-bold">화면 구현</span> :
              <span>thymeleaf를 사용하여 화면 구현</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[40%] tablet:w-full mobile:w-full">
          <h3 className="text-[20px] font-semibol py-[10px]">Description</h3>
          <p className="font-NotoSansKR_Light">
            영화 좌석 예약 사이트 입니다 <br />
            사용자는 로그인을 통해 영화 예매, 좌석선택, 멤버쉽 혜택등을 받을 수
            있고 영화 평점, 줄거리 등 영화에 대한 정보를 검색 또는 영화 페이지의
            장르별 영화에 따라 영화에 대한 정보를 조회할 수 있습니다
            <br />
            TMDB의 API를 사용하여 영화 관련 데이터를 이용하였고 spring MVC를
            사용해 SSR 구조로 개발하였습니다 뷰 템플릿은 thymeleaf를 사용해
            화면을 개발하였습니다 <br />
            MySQL을 사용해 데이터베이스를 구축하였고 JPA를 사용해 CRUD 와 핵심
            로직을 구현하였습니다
          </p>
          <div className="mt-[10px]">
            <h3 className="text-[20px]">주요기능</h3>
            <ul className="font-NotoSansKR_Light list-disc ml-5">
              <li>
                <div className="flex mobile:block">
                  <span className="text-nowrap">회원 관리 :</span>
                  <span className="font-NotoSansKR_Light">
                    회원가입, 로그인, 마이페이지, 예약내역 조회, 회원 정보 수정,
                    멤버쉽 혜택 확인
                  </span>
                </div>
              </li>
              <li>
                <div className="flex mobile:block">
                  <span className="text-nowrap">영화 :</span>
                  <span className="font-NotoSansKR_Light">
                    영화 제목으로 검색, 영화 장르별 조회, 최신 개봉순 조회, 인기
                    영화 조회, 영화 줄거리,평점 등 영화 관련 정보 조회
                  </span>
                </div>
              </li>
              <li>
                <div className="flex mobile:block">
                  <span className="text-nowrap">예매 :</span>
                  <span className="font-NotoSansKR_Light">
                    예매 가능한 영화 예매, 좌석 선택, 멤버쉽 혜택을 통한 할인,
                    예약된 좌석 표기
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="py-[10px] border-b-2">
            <h3 className="text-[20px]">사용 기술</h3>
            <ul className="ml-5 list-disc">
              <li>
                <div className="flex">
                  <span>
                    Java, Spring boot, Spring data JPA, JPA, MySql, thymeleaf
                  </span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span className="text-nowrap">ETC :</span>
                  <span>Github, Git</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="py-[10px]">
            <ul className="list-disc ml-5">
              <li>
                <div className="flex text-nowrap">
                  <span>깃허브 : </span>
                  <a
                    className="underline text-blue-400 mobile:hidden"
                    href="https://github.com/minsik2434/minicinema"
                  >
                    https://github.com/minsik2434/minicinema
                  </a>
                  <button
                    type="button"
                    className="px-2 bg-[#495057] text-white hover:bg-[#343a40] tablet:hidden desktop:hidden rounded-md"
                  >
                    바로가기
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniCinema;
