import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Callout {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isFeature: number;
  date: string;
}

async function getBlogData(): Promise<Callout[]> {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  return res.json();
}

const Insights = async () => {
  const callouts = await getBlogData();
  const insights = callouts?.filter((callout) => callout.isFeature === 1);
  const featuredCard = {
    title: "Future of Work: Insights and Predictions",
    description:
      "Explore expert insights on the future of work, and how ONX is positioned at the forefront of this evolution.",
    img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    link: "/viewall",
    label: "Visit the Site",
  };

  return (
    <div
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      id="onx-insights"
    >
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2
          id="Onx Insights"
          className="text-3xl text-center font-bold md:text-4xl md:leading-tight text-indigo-800 z-10"
        >
          Onx Insights
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Stay updated with insights from ONX&apos;s industry experts.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.slice(0, 2).map((insight, index) => (
          <a
            key={index}
            className="group flex flex-col focus:outline-none"
            href={`/blog/${insight.slug}-${insight.id}`}
          >
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <Image
                className="absolute top-0 left-0 object-cover w-full h-full group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src={insight.imageSrc}
                alt={insight.imageAlt}
                width={600}
                height={400}
                priority={false}
              />
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                {insight.name}
              </h3>
              <p className="mt-3 text-gray-800 dark:text-neutral-200">
                {insight.description}
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                Read More
                <ChevronRightIcon className="h-4 w-4" />
              </p>
            </div>
          </a>
        ))}

        {/* Hardcoded featured card */}
        <Link
          href={featuredCard.link}
          className="group relative flex flex-col w-full min-h-60 rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition overflow-hidden"
        >
          <Image
            src={featuredCard.img}
            alt={featuredCard.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6">
              <h3 className="text-xl text-white/90 group-hover:text-white transition-colors duration-300">
                <span className="font-bold">{featuredCard.title}</span>
              </h3>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70 group-focus:text-white/70 transition-colors duration-300">
                {featuredCard.label}
                <ChevronRightIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Insights;
