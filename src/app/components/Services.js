import { MdAnimation } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";
import Arrow from "./arrow.js";

const servicesData = [
  {
    icon: <MdAnimation size={60} />,
    title: "Motion Design",
    deskripsi:
      "I specialize in creating engaging animations and dynamic visuals to support your story. By combining graphic design elements and animation, I produce work that reinforces brand messages and enhances the audience experience.",
  },
  {
    icon: <FaComputer size={60} />,
    title: "Video Editing",
    deskripsi:
      "With deep experience in video editing, I provide creative solutions to create stunning videos and communicate your message effectively. From film editing, vlogs, to promotional advertisements",
  },
  {
    icon: <CgWebsite size={60} />,
    title: "Web Design",
    deskripsi:
      "User-friendly and aesthetic website design is the key to creating a great user experience. I offer web design solutions that are responsive, innovative and tailored to your business needs, with a focus on functionality and an attractive visual appearance.",
  },
];

export default function Services() {
  return (
    <div className="md:px-[50px] xl:px-[140px] font-just-sans w-full flex pt-[40px] pb-[60px] flex-col gap-[40px] justify-center items-center text-light px-[30px]">
      {/* Header */}
      <div className="flex flex-col justify-center items-center ">
        <h1 className="md:text-[35px] bg-gradient-to-br from-normal to-light text-transparent bg-clip-text">
          Services
        </h1>
        <h2 className="md:text-[15px] w-[85%] text-center">
          Bring your ideas to life impressive designs, animations and website
        </h2>
      </div>
      {/* Item of services */}
      <div className="flex flex-col gap-[40px] md:flex-row md:flex-wrap justify-center items-center">
        {servicesData.map((item, index) => {
          return (
            <button
              type="button"
              key={index}
              className="flex flex-col gap-2 items-center bg-normal bg-opacity-10 background py-3 px-5 w-[390px] rounded-2xl border-2 border-normal"
            >
              <div className="flex gap-6 items-center">
                <div className="rotate-180">
                  <Arrow overlap={5} />
                </div>
                <div className="">{item.icon}</div>
                <div>
                  <Arrow overlap={5} />
                </div>
              </div>
              <h3>{item.title}</h3>
              <p className="text-center font-extralight text-[12.5px]">
                {item.deskripsi}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
