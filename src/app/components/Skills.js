import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiDavinciresolve } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

const Categories = [
  {
    icon: <SiAdobeaftereffects />,
    level: "100%",
    softwareName: "After Effects",
  },
  {
    icon: <SiAdobepremierepro />,
    level: "100%",
    softwareName: "Premier Pro",
  },
  {
    icon: <SiDavinciresolve />,
    level: "90%",
    softwareName: "Davinci Resolve",
  },
  {
    icon: <SiFigma />,
    level: "98%",
    softwareName: "Figma",
  },
  {
    icon: <SiAdobeillustrator />,
    level: "90%",
    softwareName: "Adobe Illustrator",
  },
  {
    icon: <SiAdobephotoshop />,
    level: "80%",
    softwareName: "Photoshop",
  },
  {
    icon: <SiJavascript />,
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
    <div className="font-just-sans w-full flex py-[40px] flex-col justify-center items-center text-light bg-[#191919] px-[20px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="bg-gradient-to-br from-normal to-light text-transparent bg-clip-text">
          My Skills
        </h1>
        <h2 className="text-center">
          Below are the skills and expertise that I have and have developed to
          date through the experience that I have.
        </h2>
      </div>
      <div>
        {Categories.map((category, index) => {
          return (
            <div className="">
              <div>{category.icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
