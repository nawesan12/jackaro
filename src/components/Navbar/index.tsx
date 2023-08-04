import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-screen bottom-0">
      <ul className="flex justify-evenly mx-auto py-2 bg-black sm:w-screen lg:max-w-sm rounded-se-xl rounded-ss-xl">
        <li className="text-white">
          <Link href="/">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M10 12h4v4h-4z" />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/tienda">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
              <path d="M10.5 11h2.5l-1.5 5" />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/favoritos">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/carrito">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
