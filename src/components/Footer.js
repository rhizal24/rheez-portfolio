import Image from "next/image";

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
    // <div className="font-just-sans w-full flex py-[40px] flex-col gap-[15px] justify-center items-left text-light bg-dark bg-opacity-20 px-[50px]">
    // {/* Logo */}
    // <div className="flex items-center">
    //   <Image
    //     src={"./icon/rheez.svg"}
    //     alt="Rheez Logo"
    //     width={100}
    //     height={100}
    //     className="w-16 h-16 "
    //   />
    //   <h1 className="text-[35px]">rheezmotion</h1>
    //   <h1 className="text-normal text-[35px]">.</h1>
    // </div>
    // {/* Contact */}
    // <div className="flex flex-col gap-[5px]">
    //   <h1 className="font-medium">Contact Me</h1>
    //   <a href="#" className="text-[21px] font-extralight">
    //     rhizalrhoma@gmail.com
    //   </a>
    //   <a href="#" className="text-[21px] font-extralight">
    //     Yogyakarta
    //   </a>
    // </div>
    // {/* FooterBar */}
    // <div className="flex flex-col gap-[10px]">
    //   {Menu.map((item, index) => {
    //     return (
    //       <div key={index}>
    //         <a href={item.path} className="text-[25px] font-semibold">
    //           {item.name}
    //         </a>
    //       </div>
    //     );
    //   })}
    // </div>
    // {/* Copyright */}
    // <div>
    //   <p className="text-[16px] font-extralight text-normal text-opacity-40">
    //     © 2025 RheezMotion. All rights reserved.
    //   </p>
    // </div>
    // </div>
    <footer className="bg-normal/20 ">
      <div className="container transition-all duration-600 ease-in-out">
        <div className=" w-full px-2 py-16 text-light">
          {/* Logo */}
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
          {/* Contact */}
          <div className="px-2 flex flex-col gap-6">
            <div className="flex flex-col md:justify-center md:items-center transition-all duration-700 ease-in-out">
              <h1 className="lg:text-[35px] font-semibold transition-all duration-700 ease-in-out">
                Contact Me
              </h1>
              <div className="flex flex-col md:items-center">
                <a href="#" className="lg:text-[23px] text-[21px] font-thin">
                  rhizalrhoma@gmail.com
                </a>
                <a href="#" className="lg:text-[23px] text-[21px] font-thin">
                  Yogyakarta
                </a>
              </div>
            </div>
            {/* FooterBar */}
            <div className="xl:gap-20 lg:gap-9 flex flex-col gap-[10px] md:gap-6 md:flex-row md:items-center md:justify-center transition-all duration-700 ease-in-out">
              {Menu.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.path}
                    className="text-light/75 l:text-[27px] lg:text-[26px] text-[25px] hover:text-light-hover active:text-light-active font-medium transition-all duration-300 ease-in-out active:scale-95"
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
            {/* Copyright */}
            <p className="xl:text-[18px] md:text-center text-[16px] font-extralight text-normal/40 transition-all duration-700 ease-in-out">
              © 2025 RheezMotion. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
