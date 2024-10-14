import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Book, MessageSquare, ArrowRight } from "lucide-react";

function NotFound() {
  return (
    <section className="bg-white">
      <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
        <div className="w-full ">
          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <Image
              src="https://tm-integration-aws.s3.amazonaws.com/notfound.svg"
              alt="404 illustration"
              width={224}
              height={256}
              className="mx-auto h-56 w-auto text-indigo-900 sm:h-64"
            />
            <p className="text-sm font-medium text-indigo-500 ">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
              We lost this page
            </h1>
            <p className="mt-4 text-gray-500 ">
              We searched high and low, but couldn&apos;t find what you&apos;re
              looking for. Let&apos;s find a better place for you to go.
            </p>
            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <Link
                href={"/"}
                prefix={"true"}
                scroll
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-indigo-500 rounded-lg shrink-0 sm:w-auto hover:bg-indigo-600 "
              >
                <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
                Take me home
              </Link>
            </div>
          </div>

          <div className="grid w-full max-w-4xl grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-2">
            <div className="p-6 rounded-lg bg-indigo-50 ">
              <span className="text-gray-500 ">
                <Book className="w-6 h-6" />
              </span>

              <h3 className="mt-6 font-medium text-gray-700 ">Our blog</h3>

              <p className="mt-2 text-gray-500 ">
                Read the latest posts on our blog.
              </p>

              <Link
                href="/blogs"
                className="inline-flex items-center mt-4 text-sm text-indigo-500 gap-x-2  hover:underline"
              >
                <span>View latest posts</span>
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </Link>
            </div>

            <div className="p-6 rounded-lg bg-indigo-50 ">
              <span className="text-gray-500 ">
                <MessageSquare className="w-6 h-6" />
              </span>

              <h3 className="mt-6 font-medium text-gray-700 ">Chat to us</h3>

              <p className="mt-2 text-gray-500 ">
                Can&apos;t find what you&apos;re looking for?
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center mt-4 text-sm text-indigo-500 gap-x-2  hover:underline"
              >
                <span>Chat to our team</span>
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
