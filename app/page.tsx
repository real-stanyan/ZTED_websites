"use client";

import News from "@/components/news";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-w-full h-auto relative">
      <Gallery />
      <News />
    </main>
  );
}
