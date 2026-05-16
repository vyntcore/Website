import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Portfolio from "@/sections/Portfolio";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "VyntCore",
  description:
    "Premium web development agency helping small and medium businesses build high-converting websites with expert SEO, AEO, and reliable hosting.",
  url: "https://vyntcore.online",
  logo: "https://vyntcore.online/logo/logo.PNG",
  email: "hello@vyntcore.com",
  serviceType: [
    "Web Development",
    "SEO Optimization",
    "AEO Optimization",
    "Web Hosting",
    "UI/UX Design",
  ],
  areaServed: "Worldwide",
  priceRange: "$$",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-[#050505] min-h-screen text-white selection:bg-[var(--color-emerald-accent)] selection:text-black">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
