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

const Categories = [
  {
    icon: (
      <SiAdobeaftereffects className="md:w-[50] md:h-[50] w-10 h-10 fill-normal" />
    ),
    level: "100%",
    softwareName: "After Effects",
  },
  {
    icon: (
      <SiAdobepremierepro className="md:w-[50] md:h-[50] w-10 h-10 fill-normal" />
    ),
    level: "100%",
    softwareName: "Premier Pro",
  },
  {
    icon: (
      <SiDavinciresolve className="md:w-[50] md:h-[50] w-10 h-10 fill-normal" />
    ),
    level: "90%",
    softwareName: "Davinci Resolve",
  },
  {
    icon: <SiFigma className="md:w-[50] md:h-[50] w-10 h-10 fill-normal" />,
    level: "98%",
    softwareName: "Figma",
  },
  {
    icon: (
      <SiAdobeillustrator className="md:w-[50] md:h-[50] w-10 h-10 fill-normal" />
    ),
    level: "90%",
    softwareName: "Adobe Illustrator",
  },
  {
    icon: (
      <SiAdobephotoshop className="md:w-[50] md:h-[50] w-10 h-10 fill-normal" />
    ),
    level: "80%",
    softwareName: "Photoshop",
  },
  {
    icon: (
      <SiJavascript className="md:w-[50] md:h-[50] w-10 h-10 fill-normal" />
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
    <section>
      <div className="container"></div>
    </section>
  );
}
