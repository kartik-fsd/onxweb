"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useInView,
  cubicBezier,
} from "framer-motion";
import {
  CurrencyRupeeIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  CogIcon,
  ClockIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef(null);

  const reasons = [
    {
      icon: (
        <CurrencyRupeeIcon
          className="h-6 w-6 text-orange-500"
          aria-hidden="true"
        />
      ),
      title: "100% Variable Pricing",
      description:
        "No fixed retainers or overheads. Pay only for the services you use, optimizing your budget efficiently.",
    },
    {
      icon: (
        <CheckCircleIcon
          className="h-6 w-6 text-orange-500"
          aria-hidden="true"
        />
      ),
      title: "Guaranteed Metric Improvement",
      description:
        "We take ownership of outcomes, ensuring measurable improvements in your key performance indicators.",
    },
    {
      icon: (
        <GlobeAltIcon className="h-6 w-6 text-orange-500" aria-hidden="true" />
      ),
      title: "Pan-India Reach",
      description:
        "Access to over 19,000+ pin codes, providing unparalleled coverage across the entire country.",
    },
    {
      icon: <CogIcon className="h-6 w-6 text-orange-500" aria-hidden="true" />,
      title: "Fully Customizable",
      description:
        "Any requirement or project can be configured on ONX, tailored to your specific needs.",
    },
    {
      icon: (
        <ClockIcon className="h-6 w-6 text-orange-500" aria-hidden="true" />
      ),
      title: "Rapid Setup",
      description:
        "7-14 day setup time to configure the tech platform and establish on-field resources, getting you started quickly.",
    },
  ];

  const defaultVariants: Variants = {
    hidden: { y: 6, opacity: 0, filter: "blur(6px)" },
    visible: { y: -6, opacity: 1, filter: `blur(0px)` },
  };
  const inViewResult = useInView(ref, { once: true, margin: "-50px" });
  const isInView = inViewResult;
  const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);
  return (
    <section
      className="relative py-16"
      aria-labelledby="why-choose-us-title"
      id="why-choose-us"
    >
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-white 
      bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
      bg-[size:6rem_4rem]"
      />
      <div className="container mx-auto px-4">
        {/* <h2
          id="why-choose-us-title"
          className="text-3xl font-bold text-center mb-12 text-indigo-800 z-10"
        >
          Why Choose Onx
        </h2> */}
        <motion.h2
          className="text-3xl sm:text-4xl text-center font-bold text-indigo-900 mb-10 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          Why Choose Onx
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              ref={ref}
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit="hidden"
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              variants={defaultVariants}
              className="mb-4"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full text-left bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      {reason.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-indigo-700">
                      {reason.title}
                    </h3>
                  </div>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-orange-500 transition-transform duration-300 ${
                      activeIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: easing,
                        damping: 10,
                        restSpeed: 0.4,
                      }}
                      className="mt-4"
                    >
                      <p className="text-indigo-600">{reason.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
