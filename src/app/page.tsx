import Timer from "@/components/Timer";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-between bg-black bg-opacity-70 py-8">
      <section className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">
          Jackaro
        </h1>
        <h2 className="text-3xl lg:text-4xl xl:text-6xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">
          10 de octubre
        </h2>
        <section className="timer mt-8">
          <Timer />
        </section>
      </section>
      <section className="w-full flex items-center justify-center">
        <ul className="flex items-center space-x-4">
          <li>
            <a
              href="https://instagram.com/jackaro.ar"
              target="_blank"
              title="Instagram | Jackaro"
              className="flex items-center gap-2"
            >
              @jackaro.ar
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#fff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
