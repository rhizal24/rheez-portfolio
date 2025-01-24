import { Input } from "postcss";

export default function Message() {
  return (
    <div className="font-just-sans w-full flex py-[40px] flex-col gap-[40px] justify-center items-center text-light bg-[#161616] px-[20px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="bg-gradient-to-tl from-normal to-light text-transparent bg-clip-text">
          Let's Work Together!
        </h1>
        <h2 className="text-center">
          Let's create something interesting together to advance your business
          or company.
        </h2>
      </div>
      <div></div>
    </div>
  );
}
