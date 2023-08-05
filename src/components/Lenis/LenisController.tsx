"use client";
import { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisController({
  children,
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
}
