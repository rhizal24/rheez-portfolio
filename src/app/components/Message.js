export default function Message() {
  return (
    <div className="font-just-sans w-full flex py-[40px] flex-col gap-[40px] justify-center items-center text-light bg-[#161616] px-[20px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="bg-gradient-to-tl from-normal to-light text-transparent bg-clip-text">
          Let's Work Together!
        </h1>
        <h2 className="text-center w-[80%]">
          Let's create something interesting together to advance your business
          or company.
        </h2>
      </div>
      <div className="flex flex-col text-dark text-[12px] gap-4 bg-normal bg-opacity-20 rounded-[10px] w-[420px] h-auto p-8 font-light">
        <div className="flex gap-4">
          <input
            type="text"
            id="input-message"
            placeholder="Full Name"
            className="rounded-[8px] w-[50%] py-2 px-3 focus:outline-none"
          />
          <input
            type="email"
            id="input-message"
            placeholder="Email Address"
            className="rounded-[8px] w-[50%] py-2 px-3 focus:outline-none"
          />
        </div>
        <div className="flex gap-4 group">
          <input
            type="text"
            id="input-message"
            placeholder="Phone Number"
            className="rounded-[8px] w-[50%] py-2 px-3 focus:outline-none"
          />
          <input
            type="text"
            id="input-message"
            placeholder="Subject"
            className="rounded-[8px] w-[50%] py-2 px-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-4">
          <textarea
            name=""
            id="input-message"
            placeholder="Your Message"
            className="rounded-[8px] w-[100%] h-[200px] py-2 px-3 focus:outline-none"
          ></textarea>
        </div>
        <button
          type="button"
          className="text-white font-semibold text-[14px] mx-[105px] py-2 bg-gradient-to-bl from-normal to-light-active rounded-full border-[1px] border-normal transition-all duration-300 ease-in-out active:scale-95 hover:bg-normal"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
