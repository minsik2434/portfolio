import React from "react";
import hwaseong from "../assets/Hwaseong.jpg";
import profile from "../assets/profile.jpg";
import useTypingAnnimation from "../hooks/useTypingAnnimation";
import { forwardRef } from "react";
const Welcome = forwardRef((props, ref) => {
  const { animeFinishFlag: firstFlag, TypingTextDiv: Greet } =
    useTypingAnnimation("안녕하세요", 200);
  const { TypingTextDiv: Introduce } = useTypingAnnimation(
    "개발자 최민식 포트폴리오 입니다",
    100,
    firstFlag
  );

  return (
    <div
      ref={ref}
      className="h-[100vh] bg-blend-darken bg-black bg-opacity-70"
      style={{
        backgroundImage: `url(${hwaseong})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center pt-[8rem]">
        <img src={profile} className="w-[20rem] rounded-full" />
        <div className="flex flex-col items-center mt-[80px]">
          <Greet />
          <Introduce />
        </div>
      </div>
    </div>
  );
});
Welcome.displayName = "Welcome";
export default Welcome;
