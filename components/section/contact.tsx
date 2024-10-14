import Image from "next/image";
import Form from "../form";
import { trustedClientsImages } from "@/data/imageData";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function HireUs() {
  return (
    <div
      className="w-full bg-indigo-900 px-6 py-10 sm:px-6 lg:px-10 lg:py-14"
      id="contactUs"
    >
      {/* Grid */}
      <div className="grid md:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl lg:leading-tight">
            Partner with Onx
          </h1>
          <p className="mt-1 md:text-lg text-indigo-100">
            Discover how Onx helps businesses efficiently find, manage, and
            collaborate with top freelance talent for your projects.
          </p>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-white">
              Why Choose Onx?
            </h2>

            <ul className="mt-2 space-y-2">
              <li className="flex gap-x-3">
                <CheckIcon className="shrink-0 mt-0.5 h-5 w-5 text-indigo-200" />
                <span className="text-indigo-100">
                  Access to skilled freelancers
                </span>
              </li>

              <li className="flex gap-x-3">
                <CheckIcon className="shrink-0 mt-0.5 h-5 w-5 text-indigo-200" />
                <span className="text-indigo-100">
                  Any Requirement/Project can be configured
                </span>
              </li>

              <li className="flex gap-x-3">
                <CheckIcon className="shrink-0 mt-0.5 h-5 w-5 text-indigo-200" />
                <span className="text-indigo-100">
                  100% Variable, No Fixed Retainers, Zero Overheads
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-10 flex items-center gap-x-5">
            {/* Avatar Group */}
            <div className="flex -space-x-2">
              {trustedClientsImages.map((img) => (
                <>
                  <Image
                    key={img.id}
                    className="inline-block size-8 rounded-full ring-2 ring-indigo-800"
                    src={img.image}
                    alt={img.name}
                    width={32}
                    height={32}
                  />
                </>
              ))}
              <span className="inline-flex justify-center items-center size-8 rounded-full bg-white text-indigo-800 ring-2 ring-indigo-800">
                <svg
                  className="size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </span>
            </div>
            {/* End Avatar Group */}
            <span className="text-sm text-indigo-200">
              Trusted by over 200+ enterprsies
            </span>
          </div>
        </div>
        {/* End Col */}

        <div className="relative" id="contactform">
          {/* Card */}
          <Form />
          {/* End Card */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
}
