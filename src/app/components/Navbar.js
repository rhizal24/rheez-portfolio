import Image from "next/image";

const Menu = [
  {
    title: "Home",
    path: "#",
  },
  {
    title: "About",
    path: "#",
  },
  {
    title: "Services",
    path: "#",
  },
  {
    title: "Works",
    path: "#",
  },
  {
    title: "Education",
    path: "#",
  },
  {
    title: "Skills",
    path: "#",
  },
];

export default function Navbar() {
  return (
    <div className="md:px-[70px] lg:px-[110px] xl:px-[130px] px-[20px] flex w-full h-[80px] justify-between items-center bg-normal bg-opacity-10 border-b-[1px] border-normal font-just-sans backdrop-blur-lg">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={"./icon/rheez.svg"}
          alt="Rheez Logo"
          width={100}
          height={100}
          className="xl:w-[65] xl:h-[65] w-12 h-12"
        />
        <h1 className="xl:text-[21px] text-[19px]">rheezmotion</h1>
        <h1 className="xl:text-[21px] text-normal text-[19px]">.</h1>
      </div>
      {/* Navbar */}
      <div className="flex gap-6 items-center">
        {/* Button */}
        <div className="hidden lg:flex gap-6 items-center justify-center">
          {Menu.map((menu, index) => {
            return (
              <a
                key={index}
                href={menu.path}
                className="xl:text-[16px] text-[13px] font-light text-light hover:text-light-hover active:text-light-active transition-all duration-300 ease-in-out active:scale-95"
              >
                {menu.title}
              </a>
            );
          })}
        </div>
        <button
          type="button"
          className="xl:text-[15px] my-button text-white py-[6px] px-[20px] border-[1.5px] border-normal rounded-full p-[2px] transition-all duration-300 ease-in-out active:scale-95 text-[12px] font-semibold active:bg-darker hover:text-light-hover"
        >
          <div>Hire Me!</div>
        </button>
        {/* Burger */}
        <button
          button="button"
          className="lg:hidden flex flex-col gap-2 items-end"
        >
          <span className="w-8 h-[2px] bg-light rounded-full"></span>
          <span className="w-6 h-[2px] bg-light rounded-full"></span>
          <span className="w-7 h-[2px] bg-light rounded-full"></span>
        </button>
      </div>
    </div>
  );
}
