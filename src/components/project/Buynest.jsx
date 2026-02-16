import buynest from "../../assets/buynest/buynest.gif";
function Buynest() {
  const github = () => {
    window.location.href = "https://github.com/ecommerce-kubernetes/ecommerce";
  };

  const site = () => {
    window.location.href = "https://api.buynest.cloud";
  };

  return (
    <div className="pt-[20px] px-[30px]">
      <h2 className="text-[30px] text-center font-semibold">Buynest</h2>
      <p className="text-center">
        대규모 트래픽과 확장성을 고려한 이커머스 MSA 플랫폼
      </p>
      <div className="desktop:hidden w-[100%] mt-2 image">
        <img src={buynest} />
      </div>
      <div className="flex gap-[50px] tablet:flex-col-reverse mobile:flex-col-reverse tablet:gap-[20px] mobile:gap-[10px] px-[40px] tablet:px-5 tablet:py-[20px] mobile:px-0 py-[50px]">
        <div className="w-[50%] tablet:w-full mobile:w-full image">
          <div className="mobile:hidden tablet:hidden">
            <img src={buynest} />
          </div>
          <ul className="list-disc text-[18px] mt-[50px] tablet:mt-[10px] mobile:mt-[5px] mobile:text-nowrap flex flex-col gap-2 pl-5">
            <li>
              <div className="flex gap-[10px]">
                <span>인원</span>:<span>1</span>
              </div>
            </li>
            <li>
              <div className="flex gap-[10px]">
                <span>기간</span>:<span>2025.12 ~ </span>
              </div>
            </li>
          </ul>
          <h2 className="text-[20px] mt-[10px]">역할 및 기여</h2>
          <div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col mobile:block gap-2">
                <span className="text-nowrap font-bold">Core API 개발 :</span>
                <span>
                  장바구니, 주문, 유저 등 도메인 로직 설계, 외부 결제(Toss API)
                  연동
                </span>
              </div>
              <div className="flex mobile:block gap-2">
                <span className="text-nowrap font-bold">
                  MSA 아키텍처 설계 :
                </span>
                <span>
                  7개의 마이크로서비스 도메인 분리, API Gateway 라우팅 및 Eureka
                  서비스 디스커버리 환경 구성
                </span>
              </div>
              <div className="flex mobile:block gap-2">
                <span className="text-nowrap font-bold">
                  인프라 및 CI/CD 구축 :
                </span>
                <span>
                  Docker Compose를 활용한 컨테이너 환경 구성 및 Jenkins, Ansible
                  기반의 배포 자동화 파이프라인 구축
                </span>
              </div>
              <div className="flex mobile:block gap-2">
                <span className="text-nowrap font-bold">
                  서비스 호출간 장애 방지 :
                </span>
                <span>
                  MSA 환경에서 발생하는 연쇄 장애를 방지하기 위해 서비스간 통신
                  구간에 Resilience4J를 도입하여 특정 서비스 지연시 Fallback
                  로직을 동작하도록 구성하여 전체 시스템의 가용성을 높임
                </span>
              </div>
            </div>
            <div className="mt-[20px] bg-gray-800 p-6 rounded-2xl border border-gray-700">
              <h3 className="text-[22px] font-bold text-blue-400 mb-4 border-b border-gray-700 pb-2">
                Troubleshooting & Learnings
              </h3>
              <ul className="list-disc ml-5 text-[15px] text-gray-300 space-y-3 leading-relaxed">
                <li>
                  <strong className="text-white">Facade 패턴 적용:</strong> 외부
                  API 호출부가 @Transactional 안에 묶여 있어 이를 퍼사드 패턴을
                  적용해 분리하여 DB 커넥션 점유 시간 단축 및 커넥션 풀 고갈
                  문제 해결
                </li>
                <li>
                  <strong className="text-white">비동기 EDA 도입:</strong>{" "}
                  주문시 동기 호출 Saga 패턴으로 인해 응답시간이 길어지는 문제를
                  Kafka를 활용한 EDA를 도입하여 주문시 즉시 응답을 반환하고 Saga
                  패턴은 비동기로 진행되어 API 응답 속도를 개선하고 서비스간의
                  의존성을 낮춤
                </li>
                <li>
                  <strong className="text-white">MSA 연쇄 장애 방지:</strong>{" "}
                  분산 환경으로 인해 API 호출시 의존 서비스의 장애로 인한
                  장애전파를 서비스간 통신(Feign Client) 구간에 서킷 브레이커를
                  적용하여 문제 발생시 Fallback을 호출하도록 하여 시스템
                  가용성을 높임
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[40%] tablet:w-full mobile:w-full">
          <h3 className="text-[20px] font-semibol py-[10px]">Description</h3>
          <p className="font-NotoSansKR_Light">
            MSA 기반으로 설계된 대규모 트래픽 이커머스 플랫폼 입니다 주문, 상품,
            장바구니, 유저 등 이커머스의 핵심 도메인을 독립적인 서비스로
            분리하여 시스템 확장성과 가용성을 극대화 하였습니다 단순 기능을
            구현하는것을 넘어, 분산 환경에서 발생하는 서비스 통신 지연, 데이터
            정합성 문제, 장애 전파 등을 고려해 전체 시스템 영향을 최소화 하도록
            구조를 구성하였습니다. <br />
            서비스간 동기 호출에 따른 병목과 장애 전파를 줄이기 위해 Kafka
            기반의 EDA 아키텍처를 도입하여 비동기 통신 구조를 구현하였고 주문
            생성시 재고 차감, 포인트 감소 등 로직이 독립적으로 수행되도록
            설계하여 시스템 확장성과 안정성을 높였습니다. <br />
            분산 환경에서 발생하는 데이터 정합성 문제를 해결하기 위해 Saga
            패턴을 적용하여 서비스간 트랜잭션 흐름을 관리 하였으며, 장애
            상황에서도 시스템이 일관된 상태를 유지할 수 있도록 보상 트랜잭션을
            설계하였습니다. <br />이 프로젝트를 통해 단순 기능 구현을 넘어 분산
            시스템 환경에서의 트랜잭션 관리, 서비스간 통신 구조 설계, 장애 대응
            전략 등 아키텍쳐 설계 경험을 쌓을 수 있었습니다.
          </p>
          <div className="mt-[10px]">
            <h3 className="text-[20px]">주요 기능</h3>
            <ul className="font-NotoSansKR_Light list-disc ml-5">
              <li>
                <div className="flex mobile:block">
                  <span className="text-nowrap">
                    <strong>주문 서비스 :</strong>
                  </span>
                  <span className="font-NotoSansKR_Light">
                    주문 도메인 을 담당하는 서비스, 장바구니 상품 추가, 주문
                    생성, 결제 승인 처리, 주문 조회 등의 핵심 비지니스 로직을
                    수행. Kafka 기반의 Saga 오케스트레이터 역할을 수행, 주문
                    생성 이후 재고 차감, 포인트 처리 등 트랜잭션 흐름을 이벤트
                    기반으로 조율, Saga 진행중 문제 발생시 보상 흐름을 수행하여
                    데이터 정합성을 유지하고 트랜잭션 흐름을 이벤트 기반으로
                    조율하도록 설계하여 서비스간의 결합도를 낮춤.
                  </span>
                </div>
              </li>
              <li>
                <div className="flex mobile:block">
                  <span className="text-nowrap">
                    <strong>상품 서비스 :</strong>
                  </span>
                  <span className="font-NotoSansKR_Light">
                    상품 도메인을 담당하는 서비스, 카테고리, 상품, 상품 옵션,
                    상품 변형 등 핵심 도메인을 관리, 또한 주문 서비스 등 다른
                    서비스와의 연동을 위해 Internal API를 제공, 서비스간의
                    결합도를 낮추기 위해 이벤트 기반 구조(Kafka)를 고려한 설계를
                    적용.
                  </span>
                </div>
              </li>
              <li>
                <div className="flex mobile:block">
                  <span className="text-nowrap">
                    <strong>유저 서비스 :</strong>
                  </span>
                  <span className="font-NotoSansKR_Light">
                    회원 도메인 을 담당하는 서비스. 회원가입, 로그인과 같은 인증
                    기능을 처리, JWT 기반의 인증/인가를 제공. 또한 주문
                    서비스와의 연동을 위한 Internal API를 제공, 주문 이벤트를
                    소비하여 포인트 적립 및 차감을 처리하는 Kafka Consumer
                    기반의 비동기 처리 로직 수행
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
                  <span className="text-nowrap">BackEnd :</span>
                  <span>
                    Java, Spring Boot, Spring Cloud, Spring Security, JPA,
                    Spring Data JPA, Querydsl Mysql
                  </span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span className="text-nowrap">Infra :</span>
                  <span>docker, kafka, ansible</span>
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
            <ul className="list-disc ml-5 flex flex-col gap-2">
              <li>
                <div>
                  <span>깃허브 :</span>
                  <a
                    className="underline text-blue-400 mobile:hidden"
                    href="https://github.com/ecommerce-kubernetes/ecommerce"
                  >
                    https://github.com/ecommerce-kubernetes/ecommerce
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
              <li>
                <div>
                  <span>사이트 :</span>
                  <a
                    className="underline text-blue-400 mobile:hidden"
                    href="https://api.buynest.cloud"
                  >
                    https://api.buynest.cloud
                  </a>
                  <button
                    type="button"
                    className="px-2 bg-[#495057] text-white hover:bg-[#343a40] tablet:hidden desktop:hidden rounded-md"
                    onClick={site}
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

export default Buynest;
