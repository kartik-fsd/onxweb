"use client";

function ContactBtn() {
  const handleClick = () => {
    const element = document.getElementById("contactform");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <span
      className="bg-gradient-to-tl from-indigo-600 to-violet-600 hover:from-violet-600 hover:to-indigo-600
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border border-transparent text-white text-sm
              font-medium rounded-full py-3 px-4 cursor-pointer"
      onClick={handleClick}
    >
      Connect with us
    </span>
  );
}

export default ContactBtn;
