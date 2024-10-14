import PostList from "@/components/blogList";
import Container from "@/components/ui/container";
import type { Metadata } from "next";
import Link from "next/link";

// Define metadata for the Blogs page
export const metadata: Metadata = {
  title: "Our Blog | ONX - Leading B2B Field Service Marketplace",
  description:
    "Explore the latest insights on gig staffing, telecalling, Onx-Awign services, and more.",
  openGraph: {
    title: "Our Blog | ONX - Leading B2B Field Service Marketplace",
    description:
      "Explore the latest insights on gig staffing, telecalling, Onx-Awign services, and more.",
    url: "https://www.onxwork.com/blogs",
  },
};

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
// Fetch blog data directly within the server component
async function getBlogData(): Promise<Callout[]> {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 60 }, // ISR with revalidation every 60 seconds
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  return res.json();
}

export default async function Blogs() {
  const callouts = await getBlogData();
  const featured = callouts?.filter((callout) => callout.isFeature === 1);
  const list = callouts?.slice(0, 6);
  return (
    <Container>
      {/* Main Blog Heading */}
      <header className="text-center pb-10">
        <h1 className="text-5xl font-semibold text-gray-900">Our Blog</h1>
        <p className="mt-2 text-lg text-gray-600">
          Explore the latest articles, insights, and trends in gig staffing,
          telecalling, and more.
        </p>
      </header>

      {/* Blog Articles */}
      <section className="grid gap-10 md:grid-cols-2 lg:gap-10">
        {featured?.map((post) => (
          <PostList
            key={post.id}
            callout={post}
            aspect="landscape"
            href={`/blogs/${post.slug}-${post.id}`}
            preloadImage={true} // Preload the main blog images for better UX
          />
        ))}
      </section>

      <section className="mt-14 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {list.map((callout) => (
          <PostList
            key={callout.id}
            callout={callout}
            aspect="square"
            href={`/blogs/${callout.slug}-${callout.id}`}
            preloadImage={false} // Lazy load less important images for performance
          />
        ))}
      </section>

      {/* View All Posts Link */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/blogs/viewall"
          prefetch
          className="relative inline-flex items-center gap-1 rounded-md border border-orange-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-900 hover:bg-orange-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40"
        >
          <span>View All Posts</span>
        </Link>
      </div>
    </Container>
  );
}
