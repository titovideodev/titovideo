"use client"
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Team from "@/components/Teams";
import { Inter } from "@next/font/google";
import Portfolio from "@/components/Portfolio";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Team/>
      <Portfolio />
      <Testimonials />
      <Brands />
      <Blog />
      <Contact />
    </>
  );
}
