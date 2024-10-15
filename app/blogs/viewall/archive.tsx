"use client";
import React, { useEffect, useState } from "react";
import PostList from "@/components/blogList";
import Pagination from "@/components/pagination";
import Loading from "@/components/ui/loading";

interface Callout {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isFeature: number;
  date: string;
  slug: string;
}

interface PaginationData {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

interface PostFetch {
  posts: Callout[];
  pagination: PaginationData;
}

function Archive() {
  const [callouts, setCallouts] = useState<Callout[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const pageSize = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const url = new URL("/api/pagination", apiUrl);
        url.searchParams.append("page", currentPage.toString());
        url.searchParams.append("pageSize", pageSize.toString());

        const response = await fetch(url.toString());

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data: PostFetch = await response.json();

        setCallouts(data.posts);
        setTotalPages(data.pagination.totalPages);
        window.scroll(0, 0);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex h-40 items-center justify-center">
        <span className="text-lg text-red-500">{error}</span>
      </div>
    );
  }

  if (callouts.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center">
        <span className="text-lg text-gray-500">No posts found!</span>
      </div>
    );
  }

  return (
    <>
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {callouts.map((post) => (
          <PostList
            key={post.id}
            callout={post}
            aspect="square"
            preloadImage={false}
            href={`/blogs/${post.slug}-${post.id}`}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </>
  );
}

export default Archive;
