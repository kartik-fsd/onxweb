import React from "react";
import { Metadata } from "next";
import Post from "@/components/postLayout";

export interface Blog {
  slug: string;
  title: string;
  category: string;
  mainImage: { src: string; caption?: string };
  publishedAt: string;
  estReadingTime: number;
  description: string;
  body: {
    type: string;
    content?: string;
    src?: string;
    caption?: string;
  }[];
}

// Fetch data for the server-side component
async function fetchBlogData(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
      cache: "no-store", // Ensures fresh data fetch
    });

    if (!res.ok) {
      return null; // Return null if the blog is not found
    }

    const blog: Blog = await res.json();
    return blog;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}

// Function to generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await fetchBlogData(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Onx",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blog.title} | Onx - Leading Gig Staffing Solutions`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://www.onxwork.com/blogs/${blog.slug}`,
      images: [
        {
          url: blog.mainImage.src,
          alt: "onx | thumbnail",
        },
      ],
      type: "article",
      publishedTime: blog.publishedAt,
      authors: "onxwork",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.mainImage.src],
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const blog = await fetchBlogData(params.slug);

  if (!blog) {
    // If the blog is not found, you can render a 404 component or return null
    return (
      <div>
        <h1>404 - Blog Not Found</h1>
        <p>The requested blog post could not be found.</p>
      </div>
    );
  }

  return (
    <div>
      <Post post={blog} loading={false} />
    </div>
  );
};

export default Page;
