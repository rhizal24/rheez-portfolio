"use client";
import { IoMdDownload } from "react-icons/io";
import {
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaDribbble,
  FaTiktok,
} from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { Section } from "lucide-react";
import Image from "next/image";

const socialMedia = [
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/muhammad-rhizal-rhomadon-2928752ba/",
    icon: (
      <LiaLinkedinIn className="w-8 h-8 lg:w-9 lg:h-9 fill-dark  group-hover:fill-[#161616] easy-in-out transition-all duration-300" />
    ),
  },
  {
    name: "Instagram",
    path: "https://instagram.com/rhizal.rh_",
    icon: (
      <FaInstagram className="w-8 h-8 lg:w-9 lg:h-9 fill-dark  group-hover:fill-[#161616] easy-in-out transition-all duration-300" />
    ),
  },
  {
    name: "Discord",
    path: "#",
    icon: (
      <FaDiscord className="w-8 h-8 lg:w-9 lg:h-9 fill-dark  group-hover:fill-[#161616] easy-in-out transition-all duration-300" />
    ),
  },
  {
    name: "Github",
    path: "https://github.com/rhizal24",
    icon: (
      <FaGithub className="w-8 h-8 lg:w-9 lg:h-9 fill-dark  group-hover:fill-[#161616] easy-in-out transition-all duration-300" />
    ),
  },
  {
    name: "Youtube",
    path: "https://youtube.com/@rheez05",
    icon: (
      <FaYoutube className="w-8 h-8 lg:w-9 lg:h-9 fill-dark group-hover:fill-[#161616] easy-in-out transition-all duration-300" />
    ),
  },
  {
    name: "Dribbble",
    path: "https://dribbble.com/rhizalrhoma",
    icon: (
      <FaDribbble className="w-8 h-8 lg:w-9 lg:h-9 fill-dark  group-hover:fill-[#161616] easy-in-out transition-all duration-300" />
    ),
  },
  {
    name: "TikTok",
    path: "https://www.tiktok.com/@zaalrhom",
    icon: (
      <FaTiktok className="w-8 h-8 lg:w-9 lg:h-9 fill-dark  group-hover:fill-[#161616] easy-in-out transition-all duration-300" />
    ),
  },
];

export default function Hero() {
  return (
    // <div
    //   className={`md:px-[80px] lg:px-[120px] xl:px-[140px] 2xl:px-[300px] font-just-sans w-full flex pt-[40px] pb-[60px] flex-col gap-[40px] text-light px-[30px]`}
    // >
    //   {/* Header */}
    //   <div>
    //     <div className={`text-[20px] font-semibold`}>Hey, I am Rhizal</div>
    //     <div
    //       className={`text-[32px] font-extrabold bg-gradient-to-br from-normal to-light bg-clip-text text-transparent`}
    //     >
    //       <div>Motion Designer +</div>
    //       <div>Video Editor + Web Designer</div>
    //     </div>
    //   </div>
    //   {/* Gambar Overlay itulah */}
    //   <div>
    //     <div className={`w-inherit text-[160px] font-semibold text-center`}>
    //       rhizal
    //     </div>
    //   </div>
    //   {/* Deskription and CV download */}
    //   <div className={`text-[18px] font-light flex flex-col gap-[20px]`}>
    //     <p>
    //       I like making motion designs and editing videos to realize creative
    //       ideas and learn a little about web development, especially on the
    //       front-end (beginner).
    //     </p>
    //     <div>
    // <button
    //   type="button"
    //   className="text-[18px] group h-12 w-48 rounded-full p-[2px] bg-gradient-to-br from-normal to-dark-active hover:bg-[#161616] transition-all duration-300 active:scale-95"
    // >
    //   <div className="flex gap-1 font-[600] bg-[#161616] w-full h-full items-center justify-center rounded-full group-hover:bg-transparent ease-in-out transition-all duration-300 group-active:bg-normal">
    //     <div className="bg-gradient-to-br from-normal to-dark-active text-transparent bg-clip-text group-hover:text-[#161616] transition-colors duration-300">
    //       Download CV
    //     </div>
    //     <div>
    //       <IoMdDownload
    //         size={20}
    //         className="fill-dark-active group-hover:fill-[#161616] h-[20px] easy-in-out transition-all duration-300"
    //       />
    //     </div>
    //   </div>
    // </button>
    //     </div>
    //     <ul className="flex gap-[10px]">
    //       <li>
    //         <a href="https://instagram.com/rhizal.rh_ " target="_blank">
    //           <FaInstagram
    //             size={40}
    //             className="fill-dark border-dark border-2 p-2 rounded-full hover:fill-[#161616] hover:bg-dark easy-in-out transition-all duration-300 active:bg-normal active:scale-90"
    //           />
    //         </a>
    //       </li>
    //       <li>
    //         <a href="https://youtube.com/@rheez05" target="_blank">
    //           <FaYoutube
    //             size={40}
    //             className="fill-dark border-dark border-2 p-2 rounded-full hover:fill-[#161616] hover:bg-dark easy-in-out transition-all duration-300 active:bg-normal active:scale-90"
    //           />
    //         </a>
    //       </li>
    //       <li>
    //         <a href="https://github.com/rhizal24" target="_blank">
    //           <FaGithub
    //             size={40}
    //             className="fill-dark border-dark border-2 p-2 rounded-full hover:fill-[#161616] hover:bg-dark hover:border-da easy-in-out transition-all duration-300 active:bg-normal active:scale-90"
    //           />
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="https://www.linkedin.com/in/muhammad-rhizal-rhomadon-2928752ba/"
    //           target="_blank"
    //         >
    //           <LiaLinkedinIn
    //             size={40}
    //             className="fill-dark border-dark border-2 p-1 rounded-full hover:fill-[#161616] hover:bg-dark easy-in-out transition-all duration-300 active:bg-normal active:scale-90"
    //           />
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="https://discodrdapp.com/users/770854990574018293"
    //           target="_blank"
    //         >
    //           <FaDiscord
    //             size={40}
    //             className="fill-dark border-dark border-2 p-2 rounded-full hover:fill-[#161616] hover:bg-dark easy-in-out transition-all duration-300 active:bg-normal active:scale-90"
    //           />
    //         </a>
    //       </li>
    //       <li>
    //         <a href="https://dribbble.com/rhizalrhoma" target="_blank">
    //           <FaDribbble
    //             size={40}
    //             className="fill-dark border-dark border-2 p-2 rounded-full hover:fill-[#161616] hover:bg-dark easy-in-out transition-all duration-300 active:bg-normal active:scale-90"
    //           />
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <section>
      <div className="container transition-all duration-600 ease-in-out">
        <div className="flex flex-wrap justify-center px-4 gap-14 text-light py-28">
          {/* Header */}
          <div className="w-full flex justify-center">
            {/* Header Hero */}
            <div className="w-full xl:w-[70%] 2xl:w-[60%]">
              <h3 className="text-light lg:text-[26px] xl:text-[36px] transition-all duration-700 ease-in-out">
                Hey, I am Rhizal
              </h3>
              <h1 className="w-full md:w-[80%] xl:w-full lg:text-[38px] xl:text-[48px] bg-gradient-to-br from-normal to-light bg-clip-text text-transparent text-[32px] font-extrabold transition-all duration-700">
                Motion Designer + Video Editor + FrontEnd Developer
              </h1>
              {/* xl -> deskripsi sama download cv */}
              <div className="xl:pt-3 xl:flex xl:gap-10 hidden w-full flex-wrap justify-center items-center gap-4">
                <div className="md:text-[19px] lg:text-[25px] 2xl:text-[28px] leading-tight font-extralight text-[16px] transition-all duration-700 ease-in-out">
                  I like making motion designs and editing videos to realize
                  creative ideas and learn a little about web development,
                  especially on the front-end (beginner).
                </div>
                <div className="w-full md:flex-row md:items-center flex flex-col items-start gap-4 transition-all duration-700 ease-in-out">
                  {/* Button Cv & sosmed */}
                  <div>
                    <button
                      type="button"
                      className="lg:h-14 lg:w-[208px] lg:text-[20px]  text-[18px] group h-12 w-48 rounded-full p-[2px] bg-gradient-to-bl from-normal to-dark-active hover:bg-[#161616] transition-all duration-300 active:scale-95"
                    >
                      <div className="flex gap-1 font-[600] bg-[#161616] w-full h-full items-center justify-center rounded-full group-hover:bg-transparent ease-in-out transition-all duration-300 group-active:bg-normal">
                        <div className="bg-gradient-to-bl from-normal to-dark-active text-transparent bg-clip-text group-hover:text-[#161616] transition-colors duration-300">
                          Download CV
                        </div>
                        <div>
                          <IoMdDownload
                            size={20}
                            className="fill-dark-active group-hover:fill-[#161616] w-6 h-auto easy-in-out transition-all duration-300"
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="flex gap-3 md:gap-4">
                    {socialMedia.map((social, index) => {
                      return (
                        <a
                          key={index}
                          href={social.path}
                          target="_blank"
                          className="border-dark border-2 p-[6px] rounded-full hover:bg-dark easy-in-out transition-all duration-300 active:bg-normal active:scale-90 group"
                        >
                          {social.icon}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* deskripsi xl flex */}
            <div className="hidden xl:block w-[50%] relative">
              {/* Background Text */}
              <div className="absolute inset-0 flex items-center justify-center  overflow-hidden">
                <Image
                  src="/hero/rhizal.svg"
                  alt="Rhizal Background"
                  width={400}
                  height={160}
                  className="w-[600px] h-auto lg:w-[750px] opacity-70 blur-[1px] transition-all duration-700 ease-in-out"
                />
              </div>
              {/* Foreground Photo */}
              <div className="relative z-10 flex items-center justify-center">
                <Image
                  src="/hero/foto.svg"
                  alt="Rhizal"
                  width={160}
                  height={160}
                  className="w-[250px] lg:w-[300px] 2xl:w-[330px] h-auto rotate-2 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
          </div>
          {/* Foto sama text */}
          <div className="xl:hidden w-full relative">
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center  overflow-hidden">
              <Image
                src="/hero/rhizal.svg"
                alt="Rhizal Background"
                width={400}
                height={160}
                className="w-[600px] h-auto lg:w-[750px] opacity-70 blur-[1px] transition-all duration-700 ease-in-out"
              />
            </div>
            {/* Foreground Photo */}
            <div className="relative z-10 flex items-center justify-center">
              <Image
                src="/hero/foto.svg"
                alt="Rhizal"
                width={160}
                height={160}
                className="w-[250px] md:w-[300px] lg:w-[350px] h-auto rotate-2 transition-all duration-700 ease-in-out"
              />
            </div>
          </div>
          {/* Deskripsi */}
          <div className="xl:hidden w-full flex flex-wrap justify-center items-center gap-4">
            <div className="md:text-[19px] lg:text-[25px] text-[16px] font-light transition-all duration-700 ease-in-out">
              I like making motion designs and editing videos to realize
              creative ideas and learn a little about web development,
              especially on the front-end (beginner).
            </div>
            <div className="w-full md:flex-row md:items-center flex flex-col items-start gap-4 transition-all duration-700 ease-in-out">
              {/* Button Cv & sosmed */}
              <div>
                <button
                  type="button"
                  className="lg:h-14 lg:w-[208px] lg:text-[20px]  text-[18px] group h-12 w-48 rounded-full p-[2px] bg-gradient-to-bl from-normal to-dark-active hover:bg-[#161616] transition-all duration-300 active:scale-95"
                >
                  <div className="flex gap-1 font-[600] bg-[#161616] w-full h-full items-center justify-center rounded-full group-hover:bg-transparent ease-in-out transition-all duration-300 group-active:bg-normal">
                    <div className="bg-gradient-to-bl from-normal to-dark-active text-transparent bg-clip-text group-hover:text-[#161616] transition-colors duration-300">
                      Download CV
                    </div>
                    <div>
                      <IoMdDownload
                        size={20}
                        className="fill-dark-active group-hover:fill-[#161616] w-5 h-auto easy-in-out transition-all duration-300"
                      />
                    </div>
                  </div>
                </button>
              </div>
              <div className="flex gap-3 md:gap-4">
                {socialMedia.map((social, index) => {
                  return (
                    <a
                      key={index}
                      href={social.path}
                      target="_blank"
                      className="border-dark border-2 p-[6px] rounded-full hover:bg-dark easy-in-out transition-all duration-300 active:bg-normal active:scale-90 group"
                    >
                      {social.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
