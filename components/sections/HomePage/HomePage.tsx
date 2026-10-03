"use client";

import type { ReactElement } from "react";
import { LocaleProvider } from "@/context/LocaleContext";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export const HomePage = (): ReactElement => {
  return (
    <LocaleProvider>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <About />
        <Process />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </LocaleProvider>
  );
};
