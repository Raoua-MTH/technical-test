import ExperienceSection from "./components/sections/experience/ExperienceSection";
import HeroSection from "./components/sections/hero/HeroSection";
import ProductsSection from "./components/sections/products/ProductsSection";
import WhyChooseUsSection from "./components/sections/whyChooseUs/WhyChooseUsSection";
import MaterialSection from "./components/sections/material/MaterialSection";
import Header from "./components/layouts/Header";
import { TestimonialsSection } from "./components/sections/testimonial/TestimonialsSection";
import Footer from "./components/layouts/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <ProductsSection />
      <ExperienceSection />
      <MaterialSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
