import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
