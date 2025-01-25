import Image from "next/image";

export default function Footer() {
  const Menu = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "About",
      path: "#",
    },
    {
      name: "Works",
      path: "#",
    },
    {
      name: "Experience",
      path: "#",
    },
    {
      name: "Contact",
      path: "#",
    },
  ];
  return (
    <div className="font-just-sans w-full flex py-[40px] flex-col gap-[15px] justify-center items-left text-light bg-dark bg-opacity-20 px-[50px]">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={"./icon/rheez.svg"}
          alt="Rheez Logo"
          width={100}
          height={100}
          className="w-16 h-16 "
        />
        <h1 className="text-[35px]">rheezmotion</h1>
        <h1 className="text-normal text-[35px]">.</h1>
      </div>
      {/* Contact */}
      <div className="flex flex-col gap-[5px]">
        <h1 className="font-medium">Contact Me</h1>
        <a href="#" className="text-[21px] font-extralight">
          rhizalrhoma@gmail.com
        </a>
        <a href="#" className="text-[21px] font-extralight">
          Yogyakarta
        </a>
      </div>
      {/* FooterBar */}
      <div className="flex flex-col gap-[10px]">
        {Menu.map((item, index) => {
          return (
            <div key={index}>
              <a href={item.path} className="text-[25px] font-semibold">
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
      {/* Copyright */}
      <div>
        <p className="text-[16px] font-extralight text-normal text-opacity-40">
          © 2025 RheezMotion. All rights reserved.
        </p>
      </div>
    </div>
  );
}
