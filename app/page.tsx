import Insights from "@/components/section/blogInsight";
import HireUs from "@/components/section/contact";
import CommitmentToExcellence from "@/components/section/excellence";
import FAQ from "@/components/section/faq";
import Hero from "@/components/section/hero";
import KeyChallenge from "@/components/section/heroChallenges";
import WhyChooseUs from "@/components/section/heroChooseUS";
import Timeline from "@/components/section/howItWorks";
import IndiaMap from "@/components/section/indiaStats";
import ServiceCarousel from "@/components/section/keyServices";
import ClientLogoShowcase from "@/components/section/logoMarque";
import AwignONXTestimonials from "@/components/section/testimonials";
import { onxGeneralFaqs } from "@/data/heroFAQ";
import { testimonials } from "@/data/heroTestimonials";
import { mainPageLogos } from "@/data/imageData";

const HeroSection: React.FC = () => {
  return (
    <>
      <Hero />

      <ClientLogoShowcase logos={mainPageLogos} />
      <KeyChallenge />

      <ServiceCarousel />

      <WhyChooseUs />
      <Timeline />
      <IndiaMap />

      <FAQ faqs={onxGeneralFaqs} />
      <AwignONXTestimonials testimonials={testimonials} />
      <HireUs />
      <Insights />
      <CommitmentToExcellence />
    </>
  );
};

export default HeroSection;
