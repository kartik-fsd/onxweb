import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
          "-z-10"
        )}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-indigo-900 mb-4">
            Accelerate B2B Growth with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              {" "}
              Frictionless Onboarding
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Cut Onboarding Time by 50% and Boost Client Satisfaction with
            Onx&apos;s Tech-Driven, Scalable Solutions
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 ">
            {[
              "Ecommerce",
              "Hospitality",
              "Mobility",
              "Logistic",
              "Healthcare",
              "BFSI",
            ].map((service, index) => (
              <span
                key={service + index}
                className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href="#contactform"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Share Your Specifications
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
          </div>

          <div className="sm:grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto hidden">
            {[
              { stat: "Efficient", desc: "Streamlined Processes" },
              { stat: "Scalable", desc: "Grow Your Business" },
              { stat: "Expert", desc: "Specialized Services" },
            ].map((item, index) => (
              <div
                key={item.desc + index}
                className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md"
              >
                <CheckCircle className="text-green-500 mr-2" />
                <div>
                  <p className="text-xl font-bold text-indigo-900">
                    {item.stat}
                  </p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
