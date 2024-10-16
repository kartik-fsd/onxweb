"use client";

import React, { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

interface Logo {
  id: number;
  name: string;
  image: string;
}

interface ClientLogoShowcaseProps {
  logos: Logo[];
  mainTitle?: string;
  subTitle?: string;
  scrollSpeed?: number;
  backgroundColor?: string;
  titleColor?: string;
  subTitleColor?: string;
}

export default function ClientLogoShowcase({
  logos,
  mainTitle = "Our Esteemed Clients",
  subTitle = "From innovative startups to Fortune 500 giants, we're proud to partner with industry leaders",
  scrollSpeed = 30,
  backgroundColor = "bg-white",
  titleColor = "text-indigo-900",
  subTitleColor = "text-gray-600",
}: ClientLogoShowcaseProps) {
  const [selectedLogo, setSelectedLogo] = useState<Logo | null>(null);

  const handleLogoClick = useCallback((logo: Logo) => {
    setSelectedLogo((prevLogo) => (prevLogo?.id === logo.id ? null : logo));
  }, []);

  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: scrollSpeed,
          ease: "linear",
        },
      },
    },
  };

  const memoizedLogos = useMemo(() => logos, [logos]);

  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 pt-6 pb-10 overflow-hidden ${backgroundColor} relative`}
      id="client_showcase"
    >
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          `stroke-gray-300/50 [mask-image:linear-gradient(to_top_left,white,transparent,transparent)]`
        )}
      />
      <h2 className={`text-4xl font-bold text-center mb-5 ${titleColor}`}>
        {mainTitle}
      </h2>
      <p className={`text-xl font-sans text-center mb-12 ${subTitleColor}`}>
        {subTitle}
      </p>
      <div className="relative z-10">
        <div className="overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            variants={marqueeVariants}
            animate="animate"
          >
            {[...memoizedLogos, ...memoizedLogos].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="inline-block mx-4 my-2 cursor-pointer"
              >
                <motion.div
                  className="w-28 h-28 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleLogoClick(logo)}
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={90}
                    height={90}
                    className="object-contain w-auto h-auto max-w-full max-h-full"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
        <AnimatePresence>
          {selectedLogo && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={logoVariants}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm"
            >
              <Image
                src={selectedLogo.image}
                alt={selectedLogo.name}
                width={110}
                height={110}
                className="object-contain mb-2"
              />
              <p className="text-gray-600 text-center max-w-lg px-4 mb-2">
                Proud to work with {selectedLogo.name}, delivering innovative
                solutions and driving business growth.
              </p>
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
                onClick={() => setSelectedLogo(null)}
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
