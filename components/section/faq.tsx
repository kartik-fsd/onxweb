"use client";
import React, { MouseEventHandler, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";

interface FAQItem {
  title: string;
  content: string;
}

interface ButtonProps {
  handleClick: MouseEventHandler;
  variant: "primary" | "secondary" | "outline" | "text";
  children: React.ReactNode;
}

interface FAQProps {
  buttonVariant?: "primary" | "secondary" | "outline" | "text";
  faqs: FAQItem[];
}

const Button: React.FC<ButtonProps> = ({ handleClick, variant, children }) => {
  const baseStyles =
    "inline-block items-center rounded-md px-6 py-3 text-center font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105";

  const variantStyles: Record<ButtonProps["variant"], string> = {
    primary:
      "bg-gradient-to-r from-teal-400 to-cyan-300 text-blue-900 hover:from-teal-300 hover:to-cyan-200",
    secondary: "bg-purple-600 text-white hover:bg-purple-700",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-blue-900",
    text: "text-white hover:underline",
  };

  return (
    <span
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
};

const FAQ: React.FC<FAQProps> = ({ buttonVariant = "outline", faqs }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleClick = () => {
    const element = document.getElementById("contactform");
    if (element) {
      element.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <section
      className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 py-16 md:py-20"
      aria-labelledby="faq-heading"
      id="FAQs"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-start lg:flex-row lg:space-x-20">
          <div className="lg:flex-[1_1_500px] w-full flex-none">
            <div className="max-w-3xl mb-8 md:mb-12 lg:mb-16">
              <h2
                id="faq-heading"
                className="font-bold text-3xl md:text-5xl text-white"
              >
                Frequently Asked Questions
              </h2>
              <div className="mt-4 max-w-lg">
                <p className="text-gray-300 text-sm sm:text-base">
                  Discover how ONX is revolutionizing on-demand workforce
                  management with AI-driven solutions.
                </p>
              </div>
            </div>
            <div className="mb-6 h-full w-full overflow-auto bg-white bg-opacity-10 p-8 rounded-md backdrop-blur-lg">
              <div className="flex flex-row gap-4">
                <HelpCircle className="w-8 h-8 text-blue-50" />
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-bold text-white">
                    Still have questions?
                  </h3>
                  <div className="max-w-sm">
                    <p className="text-gray-300 text-sm sm:text-base">
                      Can&apos;t find the answer you&apos;re looking for? Our
                      support team is here to help.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-6 mt-8 h-[0.5px] w-full bg-gray-300"></div>
              <Button handleClick={handleClick} variant={buttonVariant}>
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="lg:flex-[1_1_500px] w-full flex-none">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6 w-full overflow-hidden bg-white bg-opacity-10 p-8 rounded-md backdrop-blur-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="flex cursor-pointer items-start justify-between"
                  onClick={() => toggleFAQ(index)}
                  role="button"
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <p className="text-xl font-bold text-white">{faq.title}</p>
                  <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                    <motion.div
                      className="absolute h-5 w-0.5 bg-white"
                      animate={{ rotate: openFAQ === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="h-0.5 w-5 bg-white" />
                  </div>
                </div>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      id={`faq-content-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full overflow-hidden mb-4 max-w-2xl lg:max-w-4xl"
                    >
                      <p className="text-sm sm:text-base text-gray-300 mt-4">
                        {faq.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
