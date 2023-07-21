import { Inter } from "next/font/google";
import { intlDateFormat } from "../utils/date";
import { useDate } from "@/hooks/useDate";
import Confetti from "@/components/confetti";
import TimerUnit from "@/components/timer-unit";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { targetDate, difference, isTargetDay } = useDate();

  return (
    <div
      className={`px-4 grid h-screen text-gray-900 overflow-hidden place-items-center ${inter.className}`}
    >
      <div>
        <Confetti isTargetDay={isTargetDay} />
        <header>
          {isTargetDay ? (
            <h1 className="text-4xl text-center block leading-[110%] font-black tracking-tight sm:text-5xl">
              Feliz <span>cumple</span> Fideos! 🥳
            </h1>
          ) : (
            <>
              <p className="block text-lg font-black text-center text-gray-500 uppercase ">
                Fideos cumple en
              </p>
              <h1 className="flex items-center gap-2 -mt-1">
                <TimerUnit time={difference.days} unit="Días" />
                <span className="mb-5 text-2xl font-black sm:mb-6 sm:text-4xl">
                  :
                </span>
                <TimerUnit time={difference.hours} unit="Horas" />
                <span className="mb-5 text-2xl font-black sm:mb-6 sm:text-4xl">
                  :
                </span>
                <TimerUnit time={difference.minutes} unit="Minutos" />
                <span className="mb-5 text-2xl font-black sm:mb-6 sm:text-4xl">
                  :
                </span>
                <TimerUnit time={difference.seconds} unit="Segundos" />
              </h1>
            </>
          )}
        </header>
        <main className="pt-6 mx-auto w-fit">
          <a
            href="https://www.instagram.com/p/Ck57MsoIHZm/"
            target="_blank"
            className="bg-gradient-to-tl rounded-full hover:shadow-xl hover:-translate-y-2 transition-all p-[6px] grid place-items-center from-pink-500 via-red-500 to-yellow-500"
          >
            <img
              src="/fideos.webp"
              alt="Fideos"
              className="rounded-full w-44 sm:w-56 aspect-square"
            />
          </a>
        </main>
        <footer className="pt-6">
          <p className="text-sm text-center text-gray-500">
            Próximo cumple 🤓: {intlDateFormat.format(targetDate)}
          </p>
        </footer>
      </div>
    </div>
  );
}
