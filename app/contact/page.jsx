export default function contact() {
  return (
    <>
      <section className="h-full w-full flex flex-col items-center justify-center gap-8">
        <h1 className="text-[40px] text-white">
          Lets <strong className="text-red-600">Connect</strong>
        </h1>
        <form
          className=" flex flex-col gap-8 w-[90%] sm:w-[600px] text-white text-opacity-40"
          action="https://formsubmit.co/theolefevre791@gmail.com"
          method="POST"
          fs-formsubmit-enhance="true"
        >
          <div className="flex w-full gap-x-6">
            <input
              className="border-[1px] pl-[10px] rounded-[8px] border-solid border-slate-500 border-opacity-70 focus:border-red-600 transition-color duration-500 w-full h-[35px]"
              type="text"
              name="name"
              placeholder="Name"
              required
            ></input>
            <input
              className="border-[1px] pl-[10px] rounded-[8px] border-solid border-slate-500 border-opacity-70 focus:border-red-600 transition-color duration-500 w-full h-[35px]"
              type="email"
              name="email"
              placeholder="Email"
              required
            ></input>
          </div>
          <input
            className="border-[1px] pl-[10px] rounded-[8px] border-solid border-slate-500 border-opacity-70 focus:border-red-600 transition-color duration-500 h-[35px]"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          ></input>
          <textarea
            className="border-[1px] pl-[10px] pt-[5px] rounded-[8px] border-solid border-slate-500 border-opacity-70 focus:border-red-600 transition-color duration-500 h-[150px] "
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            className="flex ml-0 rounded-full border-solid border-[1px] border-white w-[150px] h-[50px] items-center justify-center text-white "
            type="submit"
          >
            Enviar
          </button>
        </form>
      </section>
    </>
  );
}
