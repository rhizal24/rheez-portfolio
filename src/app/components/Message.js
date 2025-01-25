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
        <div className="flex flex-col gap-4 justify-center items-center">
          <textarea
            name=""
            id="input-message"
            placeholder="Your Message"
            className="rounded-[8px] w-[100%] h-[200px] py-2 px-3 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="group h-10 w-36 rounded-full p-[1px] bg-gradient-to-br from-normal to-light-active hover:bg-[#1b1b1b] transition-all duration-300 active:scale-95"
          >
            <div className="flex gap-1 font-[600] bg-[#1b1b1b] w-full h-full items-center justify-center rounded-full group-hover:bg-transparent ease-in-out transition-all duration-300 group-active:bg-normal">
              <div className="bg-gradient-to-br from-normal to-light-active text-transparent bg-clip-text group-hover:text-[#1b1b1b] transition-colors duration-300 font-semibold text-[14px]">
                Send Message
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
