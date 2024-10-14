"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Testimonial } from "@/data/heroTestimonials";

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="bg-white rounded-lg overflow-hidden shadow-lg border border-indigo-100 p-4 md:p-6 max-w-sm sm:max-w-6xl mx-auto"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="font-bold text-lg md:text-xl text-gray-800">
          {testimonial.name}
        </h3>
        <p className="text-sm md:text-base text-gray-600">
          {testimonial.position}
        </p>
      </div>
      <span className="text-xs md:text-sm font-semibold bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
        {testimonial.solution}
      </span>
    </div>
    <p className="text-gray-700 text-center text-sm md:text-base mb-4 md:mb-6">
      &quot;{testimonial.quote}&quot;
    </p>
    <div className="flex justify-between items-end">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 md:w-5 md:h-5 ${
              i < testimonial.rating
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="text-xs md:text-sm font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
        {testimonial.impact}
      </span>
    </div>
  </motion.div>
);

const MemoizedTestimonialCard = React.memo(TestimonialCard);
MemoizedTestimonialCard.displayName = "MemoizedTestimonialCard";

const BackgroundSVG: React.FC = () => (
  <svg viewBox="0 0 88 88" className="w-full max-w-screen-xl text-indigo-200">
    <circle fill="currentColor" cx="44" cy="44" r="15.5" />
    <circle fillOpacity="0.2" fill="currentColor" cx="44" cy="44" r="44" />
    <circle fillOpacity="0.2" fill="currentColor" cx="44" cy="44" r="37.5" />
    <circle fillOpacity="0.3" fill="currentColor" cx="44" cy="44" r="29.5" />
    <circle fillOpacity="0.3" fill="currentColor" cx="44" cy="44" r="22.5" />
  </svg>
);

interface AwignONXTestimonialsProps {
  testimonials?: Testimonial[];
}

const AwignONXTestimonials: React.FC<AwignONXTestimonialsProps> = ({
  testimonials = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsLength = testimonials.length;

  const nextTestimonial = useCallback(() => {
    if (testimonialsLength > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsLength);
    }
  }, [testimonialsLength]);

  const prevTestimonial = useCallback(() => {
    if (testimonialsLength > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + testimonialsLength) % testimonialsLength
      );
    }
  }, [testimonialsLength]);

  useEffect(() => {
    if (testimonialsLength > 1) {
      const timer = setInterval(nextTestimonial, 8000);
      return () => clearInterval(timer);
    }
  }, [nextTestimonial, testimonialsLength]);

  const navigationButtons = useMemo(
    () => [
      {
        onClick: prevTestimonial,
        icon: ChevronLeft,
        label: "Previous testimonial",
      },
      {
        onClick: nextTestimonial,
        icon: ChevronRight,
        label: "Next testimonial",
      },
    ],
    [prevTestimonial, nextTestimonial]
  );

  if (testimonialsLength === 0) {
    return null;
  }

  return (
    <div
      className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 relative"
      id="testimonials"
    >
      <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
        <BackgroundSVG />
      </div>
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-4xl font-extrabold text-indigo-900 text-center mb-2">
          Client Success Stories
        </h2>
        <p className="text-xl text-indigo-700 text-center mb-12">
          See how Awign ONX is revolutionizing onboarding across industries
        </p>
        <div className="relative">
          <AnimatePresence mode="wait">
            <MemoizedTestimonialCard
              key={currentIndex}
              testimonial={testimonials[currentIndex]}
            />
          </AnimatePresence>
          {testimonialsLength > 1 &&
            navigationButtons.map(({ onClick, icon: Icon, label }, index) => (
              <button
                key={index}
                onClick={onClick}
                className={`absolute top-1/2 ${
                  index === 0 ? "-left-4" : "-right-4"
                } transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-indigo-600" />
              </button>
            ))}
        </div>
        {testimonialsLength > 1 && (
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                  index === currentIndex ? "bg-indigo-600 w-6" : "bg-indigo-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AwignONXTestimonials;
