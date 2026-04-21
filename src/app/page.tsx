import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SignatureBlends } from "@/components/SignatureBlends";
import { StorySection } from "@/components/StorySection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SignatureBlends />
      <StorySection />
      <Testimonials />
      <Footer />
    </main>
  );
}
