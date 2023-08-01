"use client";
import { dropDate } from "@/utils/constants";
import { useCountdown } from "@/utils/hooks";

export default function Timer() {
  const time = useCountdown(dropDate);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-lg shadow p-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-100">
            {formatTime(time.days)}
          </div>
          <div className="text-gray-300">Dias</div>
        </div>
        <div className="text-4xl font-bold text-gray-100 mx-4">:</div>
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-100">
            {formatTime(time.hours)}
          </div>
          <div className="text-gray-300">Horas</div>
        </div>
        <div className="text-4xl font-bold text-gray-100 mx-4">:</div>
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-100">
            {formatTime(time.minutes)}
          </div>
          <div className="text-gray-300">Minutos</div>
        </div>
        <div className="text-4xl font-bold text-gray-100 mx-4">:</div>
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-100">
            {formatTime(time.seconds)}
          </div>
          <div className="text-gray-300">Segundos</div>
        </div>
      </div>
    </div>
  );
}
