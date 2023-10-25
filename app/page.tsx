"use client";

import News from "@/components/news";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-w-full min-h-[350vh] relative">
      <Gallery />
      <News />
    </main>
  );
}
