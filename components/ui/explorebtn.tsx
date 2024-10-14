"use client";

function ExploreBtn() {
  const handleClick = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-center cursor-pointer">
      <span
        className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300"
        onClick={handleClick}
      >
        Explore our business services
        <span className="flex items-center gap-x-1">
          <span className="border-s border-gray-200 text-indigo-600 ps-2">
            Explore
          </span>
          <svg
            className="shrink-0 size-4 text-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
      </span>
    </div>
  );
}

export default ExploreBtn;
