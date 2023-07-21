export default function TimerUnit({ time, unit }) {
  return (
    <span className="flex flex-col items-center gap-1 rounded w-fit">
      <span className="text-3xl sm:text-5xl font-black leading-[0.9]">
        {time}
      </span>
      <span className="text-[12px] sm:text-sm text-center text-gray-500 leading-[1]">
        {unit}
      </span>
    </span>
  );
}
