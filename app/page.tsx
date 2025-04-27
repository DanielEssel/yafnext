import AboutSection from "@/components/AboutSection";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Ministries from "@/components/Ministries";
import Navbar from "@/components/Navbar";
import Testimonies from "@/components/Testimonies";
// import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Ministries />
      <EventsSection/>
      <BlogPreview />
      <Testimonies />
      <CTASection />
      <Footer />
    </>
  );
}
