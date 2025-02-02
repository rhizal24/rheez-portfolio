"use client";
import { useState } from "react";
import Animation from "../components/ScrollAnimation.js";

const Education = [
  {
    range: "August 2023 - Now",
    from: "Gadjah Mada University",
    major: "Bachelor of Engineering - BE, Information Engineering",
    url: "https://ugm.ac.id/id/",
  },
  {
    range: "July 2020 - July 2023",
    from: "SMA Negeri 1 Berau",
    major: "High School DIploma, Matemathics and Naturan Science (MIPA)",
    url: "https://sman1berau.sch.id/info/",
  },
];

const Experience = [
  {
    range: "Jan 2024 - Now",
    company: "FindIT!",
    status: "Contract",
    position: "Staff of Videography and Editing, Multimedia Division",
    url: "https://www.find-it.id/",
  },
  {
    range: "Aug 2024 - Nov 2024",
    company: "Open House DTETI 2024",
    status: "Contract",
    position: "Coordinator of DDD Division",
    url: "https://www.instagram.com/openhouseteti/",
  },
  {
    range: "Jul 2024 - Nov 2024",
    company: "Teti Lab Skill 2024",
    status: "Contract",
    position: "Staff of Videography and Editing,Multimedia Division",
    url: "https://www.instagram.com/tetilabskill/",
  },
  {
    range: "Jan 2024 - Nov 2024",
    company: "KMTETI",
    status: "Contract",
    position: "Staff of Public Relations",
    url: "https://kmteti.ft.ugm.ac.id/",
  },
  {
    range: "Oct 2023 - Nov 2023",
    company: "KPU KMTETI 2023",
    status: "Contract",
    position: "Coordinator of Design and Documentation Division",
    url: "https://www.instagram.com/kpu.kmteti/",
  },
  {
    range: "Aug 2023 - Nov 2023",
    company: "ENFORIAN 2023",
    status: "Contract",
    position: "Staff of Videography and Editing, Multimedia Division ",
    url: "https://www.instagram.com/enforianugm/",
  },
];

export default function EduXExp() {
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll ? Experience : Experience.slice(0, 2);
  const hiddenExperienceCount = Experience.length - visibleExperiences.length;

  return (
    <section id="education">
      <div className="container transition-all duration-600 ease-in-out">
        <div className="xl:items-start w-full flex flex-col xl:flex-row justify-center items-center py-20 pb-[88px] md:py-32 md:pb-[148px] gap-10">
          <div className="xl:w-[50%] flex flex-col justify-center items-center gap-8 transition-all duration-700 ease-in-out">
            <Animation delay={0}>
              <h2 className="xl:text-left lg:text-[45px] xl:text-[48px] bg-gradient-to-br from-normal to-light text-transparent bg-clip-text transition-all duration-700 ease-in-out ">
                My Education
              </h2>
            </Animation>
            <div className="flex flex-wrap gap-6 md:gap-8 justify-center items-center">
              {Education.map((item, index) => {
                return (
                  <Animation delay={0.4} key={index}>
                    <div
                      key={index}
                      className="lg:rounded-[15px] hover:scale-105 2xl:w-[565px] xl:w-[510px] lg:px-5 lg:py-4 lg:w-[500px] bg-normal/25 rounded-[12px] border-normal border-2 md:w-[410px] w-[340px] flex flex-col py-3 px-4 justify-center items-start transition-all duration-700 ease-in-out"
                    >
                      <h3 className="xl:text-[22px] lg:text-[20px] text-[14px] font-semibold text-normal transition-all duration-300 ease-in-out">
                        {item.range}
                      </h3>
                      <a
                        className="text-[22px] font-semibold xl:text-[29px] lg:text-[27px] transition-all duration-300 ease-in-out cursor-pointer hover:text-light-hover hover:underline active:scale-95 active:text-light-active"
                        href={item.url}
                        target="_blank"
                      >
                        {item.from}
                      </a>
                      <p className="xl:text-[14px] lg:text-[13px] text-[10px] font-thin transition-all duration-300 ease-in-out ">
                        {item.major}
                      </p>
                    </div>
                  </Animation>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-8 xl:w-[50%] justify-center items-center">
            <Animation delay={0.9}>
              <h2 className="lg:text-[45px] xl:text-[48px] bg-gradient-to-tl from-normal to-light text-transparent bg-clip-text transition-all duration-700 ease-in-out">
                My Experience
              </h2>
            </Animation>

            <div className="flex flex-wrap gap-6 md:gap-8 justify-center items-center">
              {visibleExperiences.map((item, index) => {
                return (
                  <Animation delay={1.1} key={index}>
                    <div className="lg:rounded-[15px] 2xl:w-[565px] xl:w-[510px] lg:px-5 lg:py-4 lg:w-[500px] bg-normal/25 rounded-[12px] border-normal border-2 w-[340px] md:w-[410px] flex flex-col py-3 px-4 justify-center items-start transition-all duration-700 ease-in-out hover:scale-105">
                      <h3 className="xl:text-[22px] lg:text-[20px] text-[14px] font-semibold text-normal transition-all duration-300 ease-in-out">
                        {item.range}
                      </h3>
                      <a
                        className="text-[22px] font-semibold xl:text-[29px] lg:text-[27px] transition-all duration-300 ease-in-out cursor-pointer hover:text-light-hover hover:underline active:scale-95 active:text-light-active"
                        target="_blank"
                        href={item.url}
                      >
                        {item.company}
                      </a>
                      <p className="xl:text-[14px] lg:text-[13px] text-[10px] font-thin transition-all duration-300 ease-in-out">
                        {item.status} - {item.position}
                      </p>
                    </div>
                  </Animation>
                );
              })}
            </div>
            <Animation delay={1.4}>
              {Experience.length > 2 && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="hover:text-light hover:underline hover:scale-105 bg-gradient-to-tl from-light to-normal-active bg-clip-text text-transparent px-6 py-2 rounded-lg transition-all duration-300 active:scale-95 lg:text-[18px]"
                >
                  {showAll
                    ? "See Less"
                    : `See More...(${hiddenExperienceCount})`}
                </button>
              )}
            </Animation>
          </div>
        </div>
      </div>
    </section>
  );
}
