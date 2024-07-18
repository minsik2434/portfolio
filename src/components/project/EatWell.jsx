import React from "react";
import ImgSwiper from "../ImgSwiper";
import init1 from "../../assets/EatWell/init1.png";
import init2 from "../../assets/EatWell/init2.png";
import main from "../../assets/EatWell/main.png";
import picture from "../../assets/EatWell/picture.png";
import record from "../../assets/EatWell/record.png";
import search from "../../assets/EatWell/search.png";
import record2 from "../../assets/EatWell/record2.png";
import calendar from "../../assets/EatWell/calendar.png";
import statistic from "../../assets/EatWell/statistics.png";
import timeline from "../../assets/EatWell/timeline.png";
import barcode from "../../assets/EatWell/barcode.png";
function EatWell() {
  const notion = () => {
    window.location.href =
      "https://flower-name-0b3.notion.site/ffcaa57ca30f4e3d9d06e8410d9d245f";
  };

  const github = () => {
    window.location.href = "https://github.com/minsik2434/hs_CapstoneDesign";
  };
  const imageSrcs = [
    init1,
    init2,
    main,
    search,
    barcode,
    record,
    picture,
    record2,
    calendar,
    statistic,
    timeline,
  ];
  return (
    <div className="pt-[20px] px-[30px]">
      <h2 className="text-[30px] text-center font-semibold">잘먹고 살자</h2>
      <p className="text-center">개인맞춤형 식단 영양 분석 앱</p>
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
                <span>인원</span>:<span>4</span>
              </div>
            </li>
            <li>
              <div className="flex gap-[10px]">
                <span>기간</span>:<span>2023.05 ~ 2024.10</span>
              </div>
            </li>
          </ul>
          <h2 className="text-[20px] mt-[10px]">역할 및 기여</h2>
          <div className="flex flex-col gap-1">
            <div className="flex mobile:block gap-2">
              <span className="text-nowrap font-bold">기획</span> :
              <span>
                프로젝트 목적과 개요, 기대효과, 대상 사용자, SWOT 분석, 유사 앱
                비교, 요구사항 분석 등 전반적인 프로젝트를 기획
              </span>
            </div>
            <div className="flex mobile:block gap-2">
              <span className="text-nowrap font-bold">데이터베이스 설계</span> :
              <span>
                데이터베이스 모델링, SQLite를 이용해 데이터베이스 구축, 공공
                API(한국식품안전관리인증원_HACCP 제품이미지 및 포장지표기정보
                바코드연계제품정보 식품의약품안전처 공공데이터)을 이용해
                데이터베이스 구성
              </span>
            </div>
            <div className="flex mobile:block gap-2">
              <span className="text-nowrap font-bold">공공 API 파싱</span> :
              <span>
                공공 API(한국식품안전관리인증원_HACCP 제품이미지 및
                포장지표기정보 바코드연계제품정보 식품의약품안전처 공공데이터)을
                이용해 데이터 파싱
              </span>
            </div>
            <div className="flex mobile:block gap-2">
              <span className="text-nowrap font-bold">CNN 모델 학습</span> :
              <span>
                Python과 Tensorflow를 사용해 MobileNetV2 모델을 AI-Hub의 한식
                데이터셋을 이용해 모델 학습
              </span>
            </div>
            <div className="flex mobile:block gap-2">
              <span className="text-nowrap font-bold">핵심 로직 구현</span> :
              <span>
                사용자 정보 데이터 관련 로직(저장,수정), 사용자 식단 저장,수정
                월별 통계, 사진 인식 등 핵심 로직 구현
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[40%] tablet:w-full mobile:w-full">
          <h3 className="text-[20px] font-semibol py-[10px]">Description</h3>
          <p className="font-NotoSansKR_Light">
            최근 건강을 관리하는 인구가 증가하고 있고, 음식마다 영양 정보를
            확인하는 사람이 늘어나고 있어 그에 따른 식단 관리를 필요합니다.
            다이어트 외에도 알레르기를 가진 사람, 고혈압, 당뇨병, 심혈관계 질환
            등 지병이 있는 사용자에게도 특정 영양 성분에 대한 정보가 필요하며
            이에 따른 음식의 상세 정보도 필요로 합니다. 하지만 현재 앱들을
            보았을 때 위와 같은 문제를 해결하기에는 부족한 부분이 있어
            개인맞춤형 식단 영양 분석 앱을 개발하였습니다
            <br /> 바코드 인식, 사진인식 기능으로 식단 기록의 편의성일 높이고
            사용자의 프로필을 작성하여서 개인에 따른 맞춤형 식단 관리를
            제공합니다 또한 기존의 앱들이 제공하는 음식의 영양성분 정보 외의
            성분들과 상세 성분들도 제공합니다
          </p>
          <div className="mt-[10px]">
            <h3 className="text-[20px]">주요기능</h3>
            <ul className="font-NotoSansKR_Light list-disc ml-5">
              <li>
                <div className="flex mobile:block">
                  <span className="text-nowrap">사용자 정보관리 :</span>
                  <span className="font-NotoSansKR_Light">
                    성별, 키, 몸무게, 나이, 활동량을 계산해 사용자 권장 칼로리
                    계산 및 제공. 알레르기, 지병을 설정
                  </span>
                </div>
              </li>
              <li>
                <div className="flex mobile:block">
                  <span className="text-nowrap">식단(메인) :</span>
                  <span className="font-NotoSansKR_Light">
                    당일 섭취 영양소 현황 확인(탄,단,지,당류,나트륨 등등), 당일
                    섭취 식단 기록 확인(아침,점심,저녁)
                  </span>
                </div>
              </li>
              <li>
                <div className="flex mobile:block">
                  <span className="text-nowrap">기록하기 :</span>
                  <span className="font-NotoSansKR_Light">
                    바코드 스캔, 사진인식, 검색, 음식 상세 정보 제공, 날짜와
                    시간을 선택해 식단 기록, 사용자 맞춤 알레르기 유발 성분 표시
                  </span>
                </div>
              </li>
              <li>
                <div className="flex mobile:block">
                  <span className="text-nowrap">달력 :</span>
                  <span className="font-NotoSansKR_Light">
                    권장 칼로리보다 많은 칼로리 섭취 날짜 표기, 특정 날짜에
                    섭취한 음식 기록 확인
                  </span>
                </div>
              </li>
              <li>
                <div className="flex mobile:block">
                  <span className="text-nowrap">통계 :</span>
                  <span className="font-NotoSansKR_Light">
                    주에 제일 많이 먹은 음식 정보 제공, 그래프로 일,주,월별
                    영양성분 통계 제공, 전주 통계와 비교해 정보를 제공
                  </span>
                </div>
              </li>
              <li>
                <div className="flex mobile:block">
                  <span className="text-nowrap">마이페이지 :</span>
                  <span className="font-NotoSansKR_Light">
                    사용자 정보 재설정, 타임라인, 알람
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
                  <span>Java, AndroidStudio, SQLite, TensorFlow, Python</span>
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
                <div>
                  <span>시연 영상 : </span>
                  <a
                    className="underline text-blue-400 mobile:hidden"
                    href="https://devmate-fe.vercel.app"
                  >
                    https://devmate-fe.vercel.app
                  </a>
                  <button
                    type="button"
                    className="px-2 bg-[#495057] text-white hover:bg-[#343a40] tablet:hidden desktop:hidden rounded-md"
                  >
                    바로가기
                  </button>
                </div>
              </li>
              <li>
                <div className="flex  text-nowrap">
                  <span>프로젝트 기획 및 상세정보 : </span>
                  <a
                    className="underline text-blue-400 mobile:hidden"
                    href="https://flower-name-0b3.notion.site/ffcaa57ca30f4e3d9d06e8410d9d245f"
                  >
                    기획 노션
                  </a>
                  <button
                    type="button"
                    className="px-2 bg-[#495057] text-white hover:bg-[#343a40] tablet:hidden desktop:hidden rounded-md"
                    onClick={notion}
                  >
                    바로가기
                  </button>
                </div>
              </li>
              <li>
                <div className="flex  text-nowrap">
                  <span>깃허브 : </span>
                  <a
                    className="underline text-blue-400 mobile:hidden"
                    href="https://github.com/minsik2434/hs_CapstoneDesign"
                  >
                    https://github.com/minsik2434/hs_CapstoneDesign
                  </a>
                  <button
                    type="button"
                    className="px-2 bg-[#495057] text-white hover:bg-[#343a40] tablet:hidden desktop:hidden rounded-md"
                    onClick={github}
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

export default EatWell;
