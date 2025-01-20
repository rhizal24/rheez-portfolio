import Image from "next/image";

export default function Hero() {
  const socialMedia = [
    {
      name: "Instagram",
      path: "./icon/instagram.svg",
    },
    {
      name: "LinkedIn",
      path: "./icon/linkedin.svg",
    },
    {
      name: "Dribbble",
      path: "./icon/dribbble.svg",
    },
    {
      name: "Discord",
      path: "./icon/discord.svg",
    },
  ];
  return (
    <div
      className={`font-just-sans w-full flex border-[1px] py-[40px] flex-col gap-[40px]`}
    >
      <div>
        <div className={`text-[20px] font-semibold`}>Hey, I am Rhizal</div>
        <div
          className={`text-[32px] font-extrabold bg-gradient-to-br from-normal to-light bg-clip-text text-transparent`}
        >
          <div>Motion Designer +</div>
          <div>Video Editor + Web Designer</div>
        </div>
      </div>
      <div>
        <div className={`w-inherit text-[160px] font-semibold text-center`}>
          rhizal
        </div>
      </div>
      <div className={`text-[18px] font-light flex flex-col gap-[20px]`}>
        <p>
          I like making motion designs and editing videos to realize creative
          ideas and learn a little about web development, especially on the
          front-end (beginner).
        </p>
        <div>
          <button
            type="button"
            className="group h-12 w-48 rounded-full p-[2px] bg-gradient-to-br from-normal to-dark-active hover:bg-[#161616] transition-all duration-300 active:scale-95"
          >
            <div className="flex gap-1 font-[600] bg-[#161616] w-full h-full items-center justify-center rounded-full group-hover:bg-transparent ease-in-out transition-all duration-300 group-active:bg-normal">
              <div className="bg-gradient-to-br from-normal to-dark-active text-transparent bg-clip-text group-hover:text-[#161616] transition-colors duration-300">
                Download CV
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  className="fill-[#1C496F] group-hover:fill-[#161616] transition-colors duration-300"
                >
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
              </div>
            </div>
          </button>
        </div>
        <div className="flex gap-4">
          {socialMedia.map((icon) => {
            return (
              <div key={icon.name} className="">
                <Image src={icon.path} alt={icon.name} width={24} height={24} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
