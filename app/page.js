import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[44vh] py-2 text-white gap-4 mt-10">
        <div className="flex flex-col items-center justify-center">
          <div className="text-[48px] sm:text-[72px] flex gap-2 justify-center items-center font-bold tracking-tight mt-12">
            <span className="bg-linear-to-r from-[#FFE270] to-[#FF7600] bg-clip-text text-transparent">BrewFund</span>
            <Image className="invertImg" src="/tea.gif" alt="teaCup" width={62} height={62} unoptimized />
          </div>
          <div className="flex items-center gap-4 text-[#A86422] font-medium text-[12px] sm:text-[15px] tracking-widest mt-[-10px]">
            <span className="w-6 sm:w-10 h-[1px] bg-[#A86422] opacity-70"></span>
            <span>Support Creators, One Brew at a Time</span>
            <span className="w-6 sm:w-10 h-[1px] bg-[#A86422] opacity-70"></span>
          </div>
        </div>
        <p className="text-center text-[13px] sm:text-[16px] px-2 mt-2">A Crowdfunding platform for creators. Get funded by your fans and followers. Start Now!</p>
        <div>
          <Link href={"/login"}>
            <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center leading-5 me-2 cursor-pointer">Get Started</button>
          </Link>
          <Link href={"/about"}>
            <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center leading-5 me-2 cursor-pointer">Read More</button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10 mt-16"></div>

      <div className="text-white container mx-auto pt-10 pb-20 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Your Fans can fund your brews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group flex flex-col items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(255,255,255,0.05)] hover:border-white/20 transition-all duration-500">
            <div className="bg-white/10 rounded-full p-4 mb-4 transition-transform duration-500 group-hover:scale-110">
              <Image className="opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500" src="/man.gif" alt="" width={64} height={64} unoptimized />
            </div>
            <p className="font-bold text-[14px] text-center md:text-xl text-white tracking-wide mb-3">Fund Your Work</p>
            <p className="w-3/4 text-center text-[12px] md:text-lg text-slate-300 leading-relaxed">Your fans are available for you to help you.</p>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(255,255,255,0.05)] hover:border-white/20 transition-all duration-500">
            <div className="bg-white/10 rounded-full p-4 mb-4 transition-transform duration-500 group-hover:scale-110">
              <Image className="opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500" src="/coin.gif" alt="" width={64} height={64} unoptimized />
            </div>
            <p className="font-bold text-[14px] text-center md:text-xl text-white tracking-wide mb-3">Receive Support</p>
            <p className="w-3/4 text-center text-[12px] md:text-lg text-slate-300 leading-relaxed">Your fans are available for you to help you.</p>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(255,255,255,0.05)] hover:border-white/20 transition-all duration-500">
            <div className="bg-white/10 rounded-full p-4 mb-4 transition-transform duration-500 group-hover:scale-110">
              <Image className="opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500" src="/group.gif" alt="" width={64} height={64} unoptimized />
            </div>
            <p className="font-bold text-[14px] text-center md:text-xl text-white tracking-wide mb-3">Grow Community</p>
            <p className="w-3/4 text-center text-[12px] md:text-lg text-slate-300 leading-relaxed">Your fans are available for you to help you.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pt-10 pb-20 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Learn more about us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group flex flex-col items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(255,255,255,0.05)] hover:border-white/20 transition-all duration-500">
            <div className="bg-white/10 rounded-full p-4 mb-4 transition-transform duration-500 group-hover:scale-110">
              <Image className="opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500" src="/man.gif" alt="" width={64} height={64} unoptimized />
            </div>
            <p className="font-bold text-[14px] text-center md:text-xl text-white tracking-wide mb-3">Built for Creators</p>
            <p className="w-3/4 text-center text-[12px] md:text-lg text-slate-300 leading-relaxed">Get a simple, friendly way to receive support from people who love your work.</p>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(255,255,255,0.05)] hover:border-white/20 transition-all duration-500">
            <div className="bg-white/10 rounded-full p-4 mb-4 transition-transform duration-500 group-hover:scale-110">
              <Image className="opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500" src="/avatar.gif" alt="" width={64} height={64} unoptimized />
            </div>
            <p className="font-bold text-[14px] text-center md:text-xl text-white tracking-wide mb-3">Simple Support</p>
            <p className="w-3/4 text-center text-[12px] md:text-lg text-slate-300 leading-relaxed">Fans can fund your brews as a small token of appreciation—no subscriptions, no pressure.</p>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(255,255,255,0.05)] hover:border-white/20 transition-all duration-500">
            <div className="bg-white/10 rounded-full p-4 mb-4 transition-transform duration-500 group-hover:scale-110">
              <Image className="opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500" src="/group.gif" alt="" width={64} height={64} unoptimized />
            </div>
            <p className="font-bold text-[14px] text-center md:text-xl text-white tracking-wide mb-3">Grow Together</p>
            <p className="w-3/4 text-center text-[12px] md:text-lg text-slate-300 leading-relaxed">Build stronger connections with your community while doing what you love.</p>
          </div>
        </div>
      </div>
    </>
  );
}
