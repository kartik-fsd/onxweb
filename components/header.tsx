"use client";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import Link from "next/link";
import Onx from "@/public/images/onx";

const services = [
  {
    name: "Onboarding Services",
    description: "Streamline your merchant and seller onboarding process",
    href: "/services/onboardings",
    icon: ArrowPathIcon,
  },
  {
    name: "Installation Services",
    description: "Ensure compliance and accuracy with our gig services",
    href: "/services/installation",
    icon: ArrowDownCircleIcon,
  },
];

export default function HeaderNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow-sm shadow-slate-300">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global Navigation"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">ONX By Awign</span>
            <Onx />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800" // Adjusted to a slightly darker gray for better contrast
            aria-label="Open main menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-800 hover:text-orange-600 hover:underline" // Adjusted hover color for better contrast
          >
            Home
          </Link>
          <Popover className="relative">
            {({ close }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-800 hover:text-orange-600 outline-none hover:underline">
                  Services
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-500"
                    aria-hidden="true"
                  />
                </PopoverButton>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel className="absolute -left-8 top-full z-20 mt-7 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {services.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100 transition-all duration-200 ease-in-out hover:scale-[103%]"
                          onClick={() => close()}
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-700 group-hover:text-indigo-700"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <Link href={item.href} passHref legacyBehavior>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block font-semibold text-gray-800 hover:text-orange-600"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                            </Link>
                            <p className="mt-1 text-gray-700">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </PopoverPanel>
                </Transition>
              </>
            )}
          </Popover>

          <Link
            href="/blogs"
            target="_blank"
            className="text-sm font-semibold leading-6 text-gray-800 hover:text-orange-600 hover:underline"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 text-gray-800 hover:text-orange-600 hover:underline"
          >
            Contact Us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">ONX By Awign</span>
              <Onx />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-800" // Adjusted to improve contrast
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {() => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-100">
                        Services
                        <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...services].map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            passHref
                            legacyBehavior
                          >
                            <a
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-800 hover:bg-gray-100"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.name}
                            </a>
                          </Link>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/blogs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-100"
                >
                  Blogs
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-100"
                >
                  Contact Us
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-800 px-4 py-2 text-base font-semibold text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
