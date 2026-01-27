import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[44vh] py-2 text-white gap-4 mt-10">
        <div className=" text-[32px] sm:text-[40px] flex gap-2 justify-center items-center font-bold"><span>Buy Me a Chai</span><img className="invertImg" src="/tea.gif" alt="teaCup" width={62}  /></div>
        <p className="text-center text-[13px] sm:text-[16px] px-2">A Crowdfunding platform for creators. Get funded by your fans and followers. Start Now!</p>
        <div>
          <Link href={"/login"}>
            <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center leading-5 me-2 cursor-pointer">Get Started</button>
          </Link>
          <Link href={"/about"}>
            <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center leading-5 me-2 cursor-pointer">Read More</button>
          </Link>
        </div> 
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pt-10 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">Your Fans can buy you a chai</h2>
        <div className="flex gap-5 justify-around px-2">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/man.gif" alt="" width={88} />
            <p className="font-semibold text-[14px] text-center md:text-xl">Fund Yourself</p>
            <p className="w-3/4 text-center text-[12px] md:text-lg text-slate-300">Your fans are available for you to help you.</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/coin.gif" alt="" width={88} />
            <p className="font-semibold text-[14px] text-center md:text-xl">Fund Yourself</p>
            <p className="w-3/4 text-center text-[12px] md:text-lg text-slate-300">Your fans are available for you to help you.</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/group.gif" alt="" width={88} />
            <p className="font-semibold text-[14px] text-center md:text-xl">Fund Yourself</p>
            <p className="w-3/4 text-center text-[12px] md:text-lg text-slate-300">Your fans are available for you to help you.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pt-10 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">
          Learn more about us
        </h2>
        <div className="flex gap-5 justify-around px-2">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/man.gif" alt="" width={88} />
            <p className="font-semibold text-[14px] text-center md:text-xl ">Built for Creators</p>
            <p className="w-3/4 text-center text-[12px] md:text-lg text-slate-300">Get a simple, friendly way to receive support from people who love your work.</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/avatar.gif" alt="" width={88} />
            <p className="font-semibold text-[14px] text-center md:text-xl">Simple Support</p>
            <p className="w-3/4 text-center text-[12px] md:text-lg text-slate-300">Fans can buy you a chai as a small token of appreciation—no subscriptions, no pressure.</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/group.gif" alt="" width={88} />
            <p className="font-semibold text-[14px] text-center md:text-xl">Grow Together</p>
            <p className="w-3/4 text-center text-[12px] md:text-lg text-slate-300">Build stronger connections with your community while doing what you love.</p>
          </div>
        </div>
      </div>

    </>
  );
}
