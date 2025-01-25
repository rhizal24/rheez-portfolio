import Image from "next/image";

export default function Navbar() {
  return (
    <div className="px-[10px] flex w-full h-[65px] justify-between items-center bg-normal bg-opacity-10 border-b-[1px] border-normal font-just-sans backdrop-blur-lg">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={"./icon/rheez.svg"}
          alt="Rheez Logo"
          width={100}
          height={100}
          className="w-12 h-12"
        />
        <h1 className="text-[19px]">rheezmotion</h1>
        <h1 className="text-normal text-[19px]">.</h1>
      </div>
      <div className="flex gap-4 items-center">
        {/* Button */}
        <button
          type="button"
          className="my-button text-white py-[6px] px-[20px] border-[1.5px] border-normal rounded-full p-[2px] transition-all duration-300 ease-in-out active:scale-95 text-[12px] font-semibold active:bg-darker hover:text-light-hover"
        >
          <div>Hire Me!</div>
        </button>
        {/* Burger */}
        <button button="button" className="flex flex-col gap-2 items-end">
          <span className="w-8 h-[2px] bg-light rounded-full"></span>
          <span className="w-6 h-[2px] bg-light rounded-full"></span>
          <span className="w-7 h-[2px] bg-light rounded-full"></span>
        </button>
      </div>
    </div>
  );
}
