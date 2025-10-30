// import Image from "next/image";

// import FeaturesSection from "@/app/ui/landing/Features";
import Footer from "@/app/ui/landing/Footer";
import Header from "@/app/ui/landing/Header";
import Hero from "@/app/ui/landing/hero";
// import TestSection from "@/app/ui/landing/TestSection";
import AboutSection from "./ui/landing/about";
import TeamSection from "./ui/landing/team";
// import TestimonialsSection from "./ui/landing/testimonial-section";
// import CallToSuscribe from "./ui/landing/ready-to";
import FormConversion from "./ui/landing/form-conversion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="bg-white">
        <Hero />
        {/* <div className="bg-[#121829]">
          <FeaturesSection />
        </div> */}
        <AboutSection />
        {/* <TestSection /> */}
        <FormConversion />
        <TeamSection />
        {/* <TestimonialsSection /> */}
        {/* <div className="p-5">
          <CallToSuscribe />
        </div> */}
      </main>
      <Footer />
    </div>
  );
}
