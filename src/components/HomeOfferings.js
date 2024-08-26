export default function HomeOfferings() {
    return (
        <div className="w-full h-fit md:h-[170vh] flex flex-col items-center justify-center bg-zinc-950 text-white relative ">
        <div className="w-full h-full flex flex- justify-center items-center my-28">
          <h2 className="text-4xl font-bold z-40 absolute top-[1%] md:top-[10%] border-b-2 border-white">Offerings</h2>

          <div className="w-[95%] md:w-4/5 h-200vh md:h-fit flex flex-wrap justify-around items-center gap-11">
            <div className="w-[96%] md:w-[32rem] h-[30rem] md:h-[24rem] border-2 rounded-xl px-3 py-3 bg-slate-200 text-black">
              <h4 className="text-[2rem] mb-4">Web Design</h4>

              <p className="text-xl tracking-wide">I use Figma and other tools to create good looking websites for my clients</p>

              <div className="w-full h-[65%] bg-[url('/work1.png')] bg-cover bg-no-repeat rounded-lg mt-2"></div>
            </div>

            <div className="w-[96%] md:w-[32rem] h-[30rem] md:h-[24rem] border-2 rounded-xl px-3 py-3 bg-slate-200 text-black">
              <h4 className="text-[2rem] mb-4">Web Development</h4>

              <p className="text-xl tracking-wide">I use Figma and other tools to create good looking websites for my clients</p>

              <div className="w-full h-[65%] bg-[url('/work2.jpg')] bg-cover bg-no-repeat rounded-lg mt-2"></div>
            </div>

            <div className="w-[96%] md:w-[32rem] h-[30rem] md:h-[24rem] border-2 rounded-xl px-3 py-3 bg-slate-200 text-black">
              <h4 className="text-[2rem] mb-4">Smart-Contract Development</h4>

              <p className="text-xl tracking-wide">I use Figma and other tools to create good looking websites for my clients</p>

              <div className="w-full h-[65%] bg-[url('/work2.jpg')] bg-cover bg-no-repeat rounded-lg mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    )
}