import { onxInstallationFaqs } from "@/data/heroFAQ";
import { industries } from "@/data/installationSolutions";
import WhyChooseUs from "@/components/whyChoose";
import OnxCTA from "@/components/section/cta";
import OnxSolutions from "@/components/section/onboardingSolutions";
import HeroInstallation from "@/components/section/installationHero";
import ClientLogoShowcase from "@/components/section/logoMarque";

import { installationReasons } from "@/data/whychoose";
import { installationTestimonials } from "@/data/heroTestimonials";
import { installationPageLogos } from "@/data/imageData";
import dynamic from "next/dynamic";

const FAQ = dynamic(() => import("@/components/section/faq"));
const AwignONXTestimonials = dynamic(
  () => import("@/components/section/testimonials")
);
const HireUs = dynamic(() => import("@/components/section/contact"));
const CommitmentToExcellence = dynamic(
  () => import("@/components/section/excellence")
);

export const metadata = {
  metadataBase: new URL("https://www.onxwork.com/services/installation"),
  generator: "Next.js",
  applicationName: "OnxWork",
  referrer: "origin-when-cross-origin",
  title: {
    default: "ONX - Expert Installation Services Across India",
    template: "%s | ONX Installation Services",
  },
  description:
    "ONX by Awign delivers professional installation services across India. We specialize in technology setups, retail fixtures, and scalable installation solutions for businesses of all sizes.",
  keywords: [
    "installation services India",
    "B2B field services",
    "onsite installation",
    "technology setup services",
    "retail installations",
    "scalable installation solutions",
    "professional installers India",
    "business equipment installation",
    "nationwide installation services",
    "ONX by Awign",
    "ONX",
    "OnxWork",
    "EV infra Services",
    "Home utilty Services",
    "BFSI Services",
    "Financial Services",
    "Digital Inspection Services",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.onxwork.com/services/installation",
    siteName: "ONX Installation Services",
    title: "ONX - Expert Installation Services Across India",
    description:
      "ONX by Awign delivers professional installation services across India. From technology setups to retail fixtures, we ensure seamless execution for businesses nationwide.",
    images: [
      {
        url: "https://tm-integration-aws.s3.amazonaws.com/passbook.jpg",
        width: 1200,
        height: 675,
        alt: "ONX Installation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ONXInstall",
    creator: "@KartikShettar",
    title: "ONX - Expert Installation Services Across India",
    description:
      "ONX by Awign delivers professional installation services across India. From technology setups to retail fixtures, we ensure seamless execution for businesses nationwide.",
    images: ["https://tm-integration-aws.s3.amazonaws.com/passbook.jpg"],
  },
  authors: [{ name: "Kartik Shettar" }],
  creator: "Kartik Shettar",
  publisher: "ONX by Awign",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
};

const Installation = () => {
  return (
    <>
      <HeroInstallation />
      <ClientLogoShowcase logos={installationPageLogos} />
      <OnxSolutions solutions={industries} service="Installation" />
      <WhyChooseUs
        title="Why Choose Us"
        description="Discover the Onx advantage in installation services"
        reasons={installationReasons}
      />
      <FAQ faqs={onxInstallationFaqs} />
      <AwignONXTestimonials testimonials={installationTestimonials} />
      <OnxCTA />
      <CommitmentToExcellence />
      <HireUs />
    </>
  );
};

export default Installation;
