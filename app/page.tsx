"use client";

import News from "@/components/news";
import Gallery from "@/components/gallery";
import HomeLinks from "@/components/home_links";
import CourseIntro from "@/components/course_intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-w-full h-auto relative">
      <Gallery />
      <News />
      <CourseIntro />
      <HomeLinks />
    </main>
  );
}
