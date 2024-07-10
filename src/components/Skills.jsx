import React from "react";
import { forwardRef } from "react";
import Icon from "./skills/Icon";
import Java from "../assets/skills/java.png";
import Spring from "../assets/skills/spring.png";
import SpringBoot from "../assets/skills/springboot.png";
import SpringDataJpa from "../assets/skills/springdatajpa.png";
import Jpa from "../assets/skills/jpa.png";
import Querydsl from "../assets/skills/querydsl.png";
import MySql from "../assets/skills/mysql.png";
import Ec2 from "../assets/skills/ec2.png";
import S3 from "../assets/skills/s3.png";
import Html from "../assets/skills/html.png";
import Css from "../assets/skills/css.png";
import Tailwind from "../assets/skills/tailwind.png";
import react from "../assets/skills/react.png";
import thymeleaf from "../assets/skills/thymeleaf.png";
import SpringSecurity from "../assets/skills/springsecurity.png";
import Git from "../assets/skills/git.png";
import Github from "../assets/skills/github.png";
const Skills = forwardRef((props, ref) => {
  return (
    <div className="bg-[#f6f6fe]">
      <div className="pt-[78px] px-[50px]" ref={ref}>
        <h2 className="pl-[30px] text-[40px] border-t-[2px] border-black pt-[10px] text-center font-bold">
          Skills
        </h2>
        <div>
          <div className="py-[50px] px-[30px] w-full flex flex-col gap-[50px]">
            <div className="px-[50px] py-[20px] bg-white rounded-[70px]">
              <h3 className="text-[25px] font-semibold">Back-End</h3>
              <div className="flex items-center gap-12 mt-[30px] flex-wrap">
                <Icon img={Java} name="JAVA" />
                <Icon img={Spring} name="Spring" />
                <Icon img={SpringBoot} name="Spring Boot" />
                <Icon img={SpringSecurity} name="Spring Security" />
                <Icon img={SpringDataJpa} name="Spring Data JPA" />
                <Icon img={Jpa} name="JPA" />
                <Icon img={Querydsl} name="QueryDsl" />
                <Icon img={MySql} name="MySql" />
              </div>
            </div>
            <div className="px-[50px] py-[20px] bg-white rounded-[70px]">
              <h3 className="text-[25px] font-semibold">Cloud</h3>
              <div className="flex items-center gap-12 mt-[30px] flex-wrap">
                <Icon img={Ec2} name="EC2" />
                <Icon img={S3} name="S3" />
              </div>
            </div>
            <div className="px-[50px] py-[20px] bg-white rounded-[70px]">
              <h3 className="text-[25px] font-semibold">Front-End</h3>
              <div className="flex items-center gap-12 mt-[30px] flex-wrap">
                <Icon img={Html} name="HTML" />
                <Icon img={Css} name="CSS" />
                <Icon img={Tailwind} name="Tailwind" />
                <Icon img={react} name="React" />
                <Icon img={thymeleaf} name="thymeleaf" />
              </div>
            </div>
            <div className="px-[50px] py-[20px] bg-white rounded-[70px]">
              <h3 className="text-[25px] font-semibold">ETC</h3>
              <div className="flex items-center gap-12 mt-[30px] flex-wrap">
                <Icon img={Git} name="Git" />
                <Icon img={Github} name="Github" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
Skills.displayName = "Skills";
export default Skills;
