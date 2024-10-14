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
  authorId: number;
  author: string;
  authorImageSrc: string;
  date: string;
  slug: string;
}

type PostFetch = {
  posts: Callout[];
  totalCount: number;
};

function Archive() {
  const [callouts, setCallouts] = useState<Callout[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const pageSize = 6; // Define your page size here

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/pagination?page=${currentPage}&pageSize=${pageSize}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data: PostFetch = await response.json();

        // Directly use the known structure of data
        setCallouts(data.posts);
        setTotalPages(Math.ceil(data.totalCount / pageSize)); // Calculate the total number of pages
        window.scroll(0, 0);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setCallouts([]);
        setTotalPages(1);
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

  if (callouts.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center">
        <span className="text-lg text-gray-500">End of the result!</span>
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
