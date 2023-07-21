import { Poppins } from "next/font/google";
import ConfettiGenerator from "confetti-js";
import { isTheSameDay } from "../utils/date";
import { useEffect } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "900"] });

const FIDEOS_DATE = 20;
const FIDEOS_MONTH = 6;

const todayDate = new Date(Date.now());

const currentDate = todayDate.getDate();
const currentMonth = todayDate.getMonth();
const currentYear = todayDate.getFullYear();

let isPreviosToFideosDay = false;

if (currentMonth < FIDEOS_MONTH) {
  isPreviosToFideosDay = true;
} else if (currentMonth === FIDEOS_MONTH && currentDate < FIDEOS_DATE) {
  isPreviosToFideosDay = true;
}

const fideosDate = new Date(
  isPreviosToFideosDay ? currentYear : currentYear + 1,
  FIDEOS_MONTH,
  FIDEOS_DATE
);

const intlDate = new Intl.DateTimeFormat("es-UR");
const formattedNextFideosDay = intlDate.format(fideosDate).split(", ")[0];

const todayIsFideosDay = isTheSameDay(todayDate, fideosDate);

const diffInMiliseconds = fideosDate.getTime() - todayDate.getTime();
const aDayInMiliseconds = 1000 * 60 * 60 * 24;
const diffInDays = Math.floor(diffInMiliseconds / aDayInMiliseconds);

const intlRelative = new Intl.RelativeTimeFormat("es-UR", {
  numeric: "auto",
});

const { value: formattedDaysTo } = intlRelative.formatToParts(
  diffInDays,
  "day"
)[1];

export default function Home() {
  console.log(diffInDays);

  useEffect(() => {
    const confettiSettings = { target: "my-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <div
      className={`px-4 grid h-screen overflow-hidden place-items-center ${poppins.className}`}
    >
      <div>
        <canvas
          id="my-canvas"
          className="absolute inset-0 w-full h-full pointer-events-none"
        ></canvas>
        <header>
          {todayIsFideosDay ? (
            <h1 className="text-4xl text-center block leading-[110%] font-black text-gray-900 tracking-tight sm:text-5xl">
              Feliz <span>cumple</span> Fideos! 🥳
            </h1>
          ) : (
            <h1>
              <span className="text-lg block text-center leading-[100%] text-gray-500">
                Fideos cumple en
              </span>
              <span className="text-4xl sm:text-5xl block mt-1 uppercase tracking-tight leading-[90%] font-black text-gray-900 text-center">
                {formattedDaysTo} dias 🥳
              </span>
            </h1>
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
          {!todayIsFideosDay && (
            <p className="text-sm text-center text-gray-500">
              Próximo cumple 🤓: {formattedNextFideosDay}
            </p>
          )}
        </footer>
      </div>
    </div>
  );
}
