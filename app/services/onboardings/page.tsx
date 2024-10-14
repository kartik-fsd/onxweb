import HireUs from "@/components/section/contact";
import OnxCTA from "@/components/section/cta";
import CommitmentToExcellence from "@/components/section/excellence";
import FAQ from "@/components/section/faq";
import ClientLogoShowcase from "@/components/section/logoMarque";
import HeroSection from "@/components/section/onBoardingHero";
import OnxSolutions from "@/components/section/onboardingSolutions";
import AwignONXTestimonials from "@/components/section/testimonials";
import WhyChooseUs from "@/components/whyChoose";
import { onxOnboardingFaqs } from "@/data/heroFAQ";
import { onboardingTestimonials } from "@/data/heroTestimonials";
import { onboardingPageLogos } from "@/data/imageData";
import { solutions } from "@/data/onboardSolutions";
import { onboardingReasons } from "@/data/whychoose";

export const metadata = {
  generator: "Onx",
  applicationName: "Onx",
  referrer: "origin-when-cross-origin",
  title: "Onx -B2B Onboarding services | Cut Time by 50% ",
  description:
    "Efficient and scalable onboarding services tailored for B2B companies. Onx by Awign helps businesses streamline their onboarding processes with expert field teams",
  openGraph: {
    url: "https://www.onx.com/",
    title: "Onx - B2B Onboarding services | Cut Time by 50% ",
    description:
      "Efficient and scalable onboarding services tailored for B2B companies. Onx by Awign helps businesses streamline their onboarding processes with expert field teams",
    images: [
      {
        url: "https://tm-integration-aws.s3.amazonaws.com/passbook.jpg",
        width: 1200,
        height: 675,
        alt: "ONX Onboarding Services",
      },
    ],
    keywords: [
      "B2B field services",
      "onboarding services for businesses",
      "onboarding services in India",
      "scalable onboarding solutions",
      "Ecommerce Services",
      "BFSI Services",
      "Hospitality Services",
      "Mobility Services",
      "Logistics Services",
      "Driver Onboarding",
      "Restaurant Onboarding",
      "Truck Owner Onboarding",
      "Seller Onboarding",
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "onx.com",
    url: "https://www.onx.com/",
    title: "Onx -B2B Onboarding Automation | Cut Time by 50% ",
    description:
      "Efficient and scalable onboarding services tailored for B2B companies. Onx by Awign helps businesses streamline their onboarding processes with expert field teams",
    images: ["https://tm-integration-aws.s3.amazonaws.com/passbook.jpg"],
  },
  creator: "Kartik Shettar",
};

const Onboarding = () => {
  return (
    <>
      <HeroSection />
      <ClientLogoShowcase logos={onboardingPageLogos} />
      <OnxSolutions solutions={solutions} service="Onbording" />
      <WhyChooseUs
        title="Why Choose Us"
        description="Discover the Onx advantage in onboarding services"
        reasons={onboardingReasons}
      />
      <FAQ faqs={onxOnboardingFaqs} />
      <AwignONXTestimonials testimonials={onboardingTestimonials} />
      <OnxCTA />
      <CommitmentToExcellence />
      <HireUs />
    </>
  );
};

export default Onboarding;
