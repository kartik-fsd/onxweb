"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import CommitmentToExcellence from "@/components/section/excellence";
import HireUs from "@/components/section/contact";
import { industryData } from "@/data/industryData";
import { cn } from "@/lib/utils";

const IndustryDetailPage = ({ params }: { params: { slug: string } }) => {
  const industry = industryData[params.slug as keyof typeof industryData];
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  const handleClick = () => {
    const element = document.getElementById("contactform");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!industry) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
        <p className="text-gray-600">Industry not found</p>
        <button
          onClick={handleBack}
          className="mt-4 text-indigo-600 hover:text-indigo-800"
        >
          Go Back
        </button>
      </div>
    );
  }
  const ScrollToTopOnRouteChange = () => {
    const pathname = usePathname(); // Get the current path

    useEffect(() => {
      // Scroll to top when the pathname changes
      window.scrollTo(0, 0);
    }, [pathname]); // Effect depends on pathname changes

    return null;
  };
  console.log(industry, params.slug, "ol");
  return (
    <>
      <ScrollToTopOnRouteChange />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={handleBack}
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8"
          >
            <ArrowLeft className="mr-2" />
            Back
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl rounded-lg overflow-hidden"
          >
            <div className={cn(`bg-gradient-to-br ${industry.color}`, "p-8")}>
              <h1 className="text-4xl font-bold text-white mb-4">
                {industry.name} Solutions
              </h1>
              <p className="text-xl text-white opacity-90">
                {industry.description}
              </p>
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Key Benefits
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {industry.benefits.map((benefit, index) => (
                  <li key={index + benefit} className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full sm:w-auto" onClick={handleClick}>
                Get Started with {industry.name} Onboarding
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Partner {industry.service} Services
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Onx also offers partner {industry.service} services for the{" "}
              {industry.name} industry. Our major {industry.service} services
              include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.partnerServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  <div
                    className={cn(`h-2 bg-gradient-to-r ${industry.color}`)}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <HireUs />
      <CommitmentToExcellence />
    </>
  );
};

export default IndustryDetailPage;
