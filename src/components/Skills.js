import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiFigma,
  SiDavinciresolve,
  SiJavascript,
} from "react-icons/si";
import CountUp from "./CountUp/CountUp";
import Animation from "../components/ScrollAnimation.js";

const Categories = [
  {
    icon: (
      <SiAdobeaftereffects className="xl:w-[70px] xl:h-[70px] md:w-[50px] md:h-[50px] w-12 h-12 fill-normal" />
    ),
    level: "100%",
    softwareName: "After Effects",
  },
  {
    icon: (
      <SiAdobepremierepro className="xl:w-[70px] xl:h-[70px] md:w-[50px] md:h-[50px] w-12 h-12 fill-normal" />
    ),
    level: "100%",
    softwareName: "Premier Pro",
  },
  {
    icon: (
      <SiDavinciresolve className="xl:w-[70px] xl:h-[70px] md:w-[50px] md:h-[50px] w-12 h-12 fill-normal" />
    ),
    level: "90%",
    softwareName: "Davinci Resolve",
  },
  {
    icon: (
      <SiFigma className="xl:w-[70px] xl:h-[70px] md:w-[50px] md:h-[50px] w-12 h-12 fill-normal" />
    ),
    level: "98%",
    softwareName: "Figma",
  },
  {
    icon: (
      <SiAdobeillustrator className="xl:w-[70px] xl:h-[70px] md:w-[50px] md:h-[50px] w-12 h-12 fill-normal" />
    ),
    level: "90%",
    softwareName: "Adobe Illustrator",
  },
  {
    icon: (
      <SiAdobephotoshop className="xl:w-[70px] xl:h-[70px] md:w-[50px] md:h-[50px] w-12 h-12 fill-normal" />
    ),
    level: "80%",
    softwareName: "Photoshop",
  },
  {
    icon: (
      <SiJavascript className="xl:w-[70px] xl:h-[70px] md:w-[50px] md:h-[50px] w-12 h-12 fill-normal" />
    ),
    level: "80%",
    softwareName: "JavaScript",
  },
  // {
  //   icon: <SiAdobeaftereffects />,
  //   level: "75%",
  //   softwareName: "C++",
  // },
];

export default function Skills() {
  return (
    // <div className="md:px-[80px] lg:px-[120px] xl:px-[140px] font-just-sans w-full flex pt-[40px] pb-[60px] flex-col justify-center items-center text-light bg-[#191919] px-[30px] gap-[40px]">
    //   <div className="flex flex-col justify-center items-center">
    //     <h1 className="md:text-[35px] bg-gradient-to-br from-normal to-light text-transparent bg-clip-text">
    //       My Skills
    //     </h1>
    //     <h2 className="md:text-[15px] text-center w-[80%]">
    //       Below are the skills and expertise that I have and have developed to
    //       date through the experience that I have.
    //     </h2>
    //   </div>
    //   <div className="flex flex-wrap gap-[15px] justify-center items-center">
    //     {Categories.map((category, index) => {
    //       return (
    //         <div
    //           className="md:w-[160px] md:h-[180px] md:text-[12px] text-[9px] flex flex-col justify-center items-center bg-normal bg-opacity-20 w-[120px] h-[140px] rounded-[10px] gap-2 border-[1px] border-opacity-20 border-normal"
    //           key={index}
    //         >
    //           <div>{category.icon}</div>
    //           <div>
    //             <CountUp
    //               from={0}
    //               to={category.level}
    //               separator=","
    //               direction="up"
    //               duration={1}
    //               className="count-up-text"
    //             />
    //             %
    //           </div>
    //           <div className="text-normal">{category.softwareName}</div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <section className="bg-[#2f2f2f]/40" id="skills">
      <div className="container transition-all duration-600 ease-in-out">
        <div className="w-full flex flex-col justify-center items-center gap-10 px-4 py-20 pb-28 md:py-32 md:pb-[148px]">
          <div className="flex flex-col justify-center items-center">
            <Animation>
              <h2 className="lg:text-[45px] xl:text-[55px] bg-gradient-to-br from-normal to-light text-transparent bg-clip-text transition-all duration-700 ease-in-out">
                My Skills
              </h2>
            </Animation>
            <Animation delay={0.4}>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <h5 className="lg:w-[80%] md:text-[14px] lg:text-[18px] text-[12px] md:w-[65%] transition-all duration-700 ease-in-out w-[95%] xl:w-[65%] text-center">
                  Below are the skills and expertise that I have and have
                  developed to date through the experience that I have.
                </h5>
              </div>
            </Animation>
          </div>
          <div className="flex flex-wrap gap-6 justify-center items-center xl:gap-6">
            {Categories.map((item) => {
              return (
                <Animation delay={0.9} key={item.softwareName}>
                  <div
                    className="xl:text-[16px] xl:w-[200px] md:rounded-[15px] xl:h-[240px] md:w-[160px] md:h-[180px] md:text-[14px] text-[12px] flex flex-col justify-center items-center bg-normal/20 w-[155px] h-[180px] rounded-[11px] gap-1 border-[1px] border-normal/20 transition-all duration-700 ease-in-out"
                    key={item.softwareName}
                  >
                    <div>{item.icon}</div>
                    <div className="pt-2 font-light">
                      <CountUp
                        from={0}
                        to={item.level}
                        separator=","
                        duration={1}
                        className="count-up-text"
                      />
                      %
                    </div>
                    <div className="text-normal">{item.softwareName}</div>
                  </div>
                </Animation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
