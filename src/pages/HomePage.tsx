import SEO from "../components/SEO";
import Hero from "../components/Hero";
import EngineeringSection from "../components/EngineeringSection";
import SolutionsSection from "../components/SolutionsSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <SEO 
        title="Advanced Electric Drivetrains & Mobility Solutions"
        description="Discover Voltx EV's state-of-the-art BLDC motors, efficient e-bikes, and zero-emission industrial logistics equipment."
      />
      <Hero />
      <EngineeringSection />
      <SolutionsSection />
      <ContactForm />
    </>
  );
}
