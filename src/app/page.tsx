import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import CakeStudio from "@/components/CakeStudio";
import Story from "@/components/Story";
import Stats from "@/components/Stats";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Visit from "@/components/Visit";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <CakeStudio />
      <Story />
      <Stats />
      <Reviews />
      <Gallery />
      <Faq />
      <Visit />
    </>
  );
}
