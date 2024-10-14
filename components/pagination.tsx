// components/ui/pagination.tsx
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
}: PaginationProps) {
  return (
    <div className="mt-10 flex items-center justify-center">
      <nav
        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <button
          onClick={onPrevPage}
          disabled={currentPage === 1}
          className="relative inline-flex items-center gap-1 rounded-l-md border border-gray-300 bg-white 
          px-3 py-2 pr-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none 
          disabled:opacity-40"
        >
          <ChevronLeftIcon className="h-3 w-3" aria-hidden="true" />
          <span>Previous</span>
        </button>
        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className="relative inline-flex items-center gap-1 rounded-r-md border border-gray-300
          bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20
          disabled:pointer-events-none disabled:opacity-40"
        >
          <span>Next</span>
          <ChevronRightIcon className="h-3 w-3" aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
}

export default Pagination;
