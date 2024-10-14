import Image from "next/image";
import Link from "next/link";
import BlurFade from "../magicui/blur-fade";
import BoxReveal from "../magicui/box-reveal";
import { steps } from "@/data/howItWorks";

export default function Timeline() {
  return (
    <section
      className="bg-indigo-900 py-10 lg:py-20"
      aria-labelledby="our-approach"
    >
      <div className="max-w-5xl px-4 xl:px-0 mx-auto">
        {/* Title */}
        <header className="max-w-3xl mb-10 lg:mb-14">
          <BlurFade delay={0.25} inView>
            <h2
              id="How-we-approach"
              className="text-white font-semibold text-2xl md:text-4xl md:leading-tight"
            >
              Our approach
            </h2>
          </BlurFade>
          <BlurFade delay={0.3125} inView>
            <p className="mt-1 text-gray-300">
              This profound insight guides our comprehensive strategy — from
              meticulous research and strategic planning to the seamless
              execution of project or product deployment.
            </p>
          </BlurFade>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
            <BlurFade delay={0.25} inView>
              <Image
                className="w-full object-cover rounded-xl"
                //  src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                src="/coworkers.svg"
                alt="Team collaborating on a project"
                width={600}
                height={500}
              />
            </BlurFade>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-orange-400 text-xs font-medium uppercase mb-4">
              Steps
            </h3>
            {steps.map((step, index) => (
              <div key={index} className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-indigo-300">
                  <div className="relative z-10 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center w-8 h-8 border border-indigo-300 text-orange-400 font-semibold text-xs uppercase rounded-full">
                      {index + 1}
                    </span>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <BoxReveal boxColor={"#5046e6"} duration={0.7}>
                    <p className="text-sm lg:text-base text-gray-300">
                      <span className="text-white">{step.title}:</span>{" "}
                      {step.description}
                    </p>
                  </BoxReveal>
                </div>
                {/* End Right Content */}
              </div>
            ))}
            <Link
              className="group inline-flex items-center gap-x-2 py-2 px-3 bg-orange-400 font-medium text-sm text-neutral-800 rounded-full hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
              href="#contactform"
              aria-label="Schedule a call to discuss our approach"
            >
              <svg
                className="shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                <path
                  className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                  d="M14.05 2a9 9 0 0 1 8 7.94"
                />
                <path
                  className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                  d="M14.05 6A5 5 0 0 1 18 10"
                />
              </svg>
              Schedule a call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
