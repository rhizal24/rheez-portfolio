import Image from "next/image";
import Animation from "../components/ScrollAnimation.js";

export default function Footer() {
  const Menu = [
    {
      name: "Home",
      path: "#home",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Works",
      path: "#works",
    },
    {
      name: "Experience",
      path: "#education",
    },
    {
      name: "Contact",
      path: "#message",
    },
  ];
  return (
    <footer className="bg-normal/20 ">
      <div className="container transition-all duration-600 ease-in-out">
        <div className=" w-full px-2 py-16 text-light">
          {/* Logo */}
          <Animation>
            <div className="flex items-center md:justify-center transition-all duration-700 ease-in-out">
              <Image
                src={"./icon/rheez.svg"}
                alt="Rheez Logo"
                width={100}
                height={100}
                className="lg:w-[88px] lg:h-[88px] w-16 h-16 md:w-20 md:h-20 transition-all duration-700 ease-in-out"
              />
              <h1 className="lg:text-[40px] md:text-[38px] text-[35px] transition-all duration-700 ease-in-out">
                rheezmotion
              </h1>
              <h1 className="text-normal lg:text-[40px] md:text-[38px] text-[35px] transition-all duration-700 ease-in-out">
                .
              </h1>
            </div>
          </Animation>
          {/* Contact */}
          <div className="px-2 flex flex-col gap-6">
            <div className="flex flex-col md:justify-center md:items-center transition-all duration-700 ease-in-out">
              <Animation delay={0.1}>
                <h1 className="lg:text-[35px] font-semibold transition-all duration-700 ease-in-out">
                  Contact Me
                </h1>
              </Animation>
              <div className="flex flex-col md:items-center">
                <Animation delay={0.15}>
                  <a href="#" className="lg:text-[23px] text-[21px] font-thin">
                    rhizalrhoma@gmail.com
                  </a>
                </Animation>
                <Animation delay={0.2}>
                  <a href="#" className="lg:text-[23px] text-[21px] font-thin">
                    Yogyakarta
                  </a>
                </Animation>
              </div>
            </div>
            {/* FooterBar */}
            <div className="xl:gap-20 lg:gap-9 flex flex-col gap-[10px] md:gap-6 md:flex-row md:items-center md:justify-center transition-all duration-700 ease-in-out">
              {Menu.map((item, index) => {
                return (
                  <Animation delay={0.3} key={index}>
                    <a
                      key={index}
                      href={item.path}
                      className="text-light/75 l:text-[27px] lg:text-[26px] text-[25px] hover:text-light-hover active:text-light-active font-medium transition-all duration-300 ease-in-out active:scale-95"
                    >
                      {item.name}
                    </a>
                  </Animation>
                );
              })}
            </div>
            {/* Copyright */}
            <Animation delay={0.4}>
              <p className="xl:text-[18px] md:text-center text-[16px] font-extralight text-normal/40 transition-all duration-700 ease-in-out">
                © 2025 RheezMotion. All rights reserved.
              </p>
            </Animation>
          </div>
        </div>
      </div>
    </footer>
  );
}
