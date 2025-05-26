import ServicesSection from "@/components/servicesSection/servicesSection";
import classes from "./page.module.css";
import HeroSection from "@/components/homePageSections/heroSection/heroSection";
import ProcessSection from "@/components/processesSection/processesSection";
import OurWorkSection from "@/components/ourWorkSection/ourWorkSection";
import ContactSection from "@/components/contactSection/contactSection";
import FaqSection from "@/components/faq/faqSection";

export default function Home() {
  return (
    <>
      <HeroSection />;
      <ServicesSection />
      <ProcessSection />
      <OurWorkSection />
      <ContactSection />
      <FaqSection />
    </>
  );
}
