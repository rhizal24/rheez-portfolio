import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiFigma,
  SiDavinciresolve,
  SiJavascript,
} from "react-icons/si";

const Categories = [
  {
    icon: <SiAdobeaftereffects className="w-10 h-10 fill-normal" />,
    level: "100%",
    softwareName: "After Effects",
  },
  {
    icon: <SiAdobepremierepro className="w-10 h-10 fill-normal" />,
    level: "100%",
    softwareName: "Premier Pro",
  },
  {
    icon: <SiDavinciresolve className="w-10 h-10 fill-normal" />,
    level: "90%",
    softwareName: "Davinci Resolve",
  },
  {
    icon: <SiFigma className="w-10 h-10 fill-normal" />,
    level: "98%",
    softwareName: "Figma",
  },
  {
    icon: <SiAdobeillustrator className="w-10 h-10 fill-normal" />,
    level: "90%",
    softwareName: "Adobe Illustrator",
  },
  {
    icon: <SiAdobephotoshop className="w-10 h-10 fill-normal" />,
    level: "80%",
    softwareName: "Photoshop",
  },
  {
    icon: <SiJavascript className="w-10 h-10 fill-normal" />,
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
    <div className="font-just-sans w-full flex py-[40px] flex-col justify-center items-center text-light bg-[#191919] px-[20px] gap-[40px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="bg-gradient-to-br from-normal to-light text-transparent bg-clip-text">
          My Skills
        </h1>
        <h2 className="text-center">
          Below are the skills and expertise that I have and have developed to
          date through the experience that I have.
        </h2>
      </div>
      <div className="flex flex-wrap gap-[15px] justify-center items-center">
        {Categories.map((category, index) => {
          return (
            <div
              className="text-[9px] flex flex-col justify-center items-center bg-normal bg-opacity-20 w-[120px] h-[145px] rounded-[10px] gap-2 border-[1px] border-opacity-20 border-normal"
              key={index}
            >
              <div>{category.icon}</div>
              <div>{category.level}</div>
              <div className="text-normal">{category.softwareName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
