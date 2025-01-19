import Image from "next/image";

export default function Hero(){
  return(
    <div className={`font-just-sans w-full flex border-[1px] py-[40px] flex-col gap-[40px]`}>
      <div>
        <div className={`text-[20px] font-semibold`}>Hey, I am Rhizal</div>
        <div className={`text-[32px] font-bold`}>
          <div>
            Motion Designer + 
          </div>
          <div>
          Video Editor + Web Designer
          </div>
        </div>
      </div>
      <div>
        <div className={`w-inherit text-[160px] font-semibold text-center fill-none border-[1px] border-solid border-blue-500`}>
          rhizal
        </div>
      </div>
      <div className={`text-[18px] font-[400] flex flex-col gap-[20px]`}>
        <p>
        I like making motion designs and editing videos to realize creative ideas and learn a little about web development, especially on the front-end (beginner). 
        </p>
        <div>
          <button type="button" className="flex gap-1 border-2 px-[20px] py-[8px] rounded-full" href="/cv.pdf">
            <div>Download CV</div>
          <Image src="../../../icon/Download.svg" alt="arrow-down" width={24} height={24}/>
          </button>
        </div>
      </div>
    </div>
  );
}