"use client";

import News from "@/components/news";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col py-10 items-center bg-main-bg bg-cover min-w-full min-h-[350vh] relative">
      <News />
      <Footer />
    </main>
  );
}
