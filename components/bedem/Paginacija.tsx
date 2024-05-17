"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { UrlObject } from "url";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Type definitions for the navigate function
type Route = UrlObject & { url: string };

function SearchBarFallback() {
  return <>placeholde</>;
}

function Paginacija({
  hasNextPage,
  hasPrevPage,
}: {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams?.get("page") ?? "1";
  const per_page = searchParams?.get("per_page") ?? "12";

  const navigate = (url: Route) => {
    // @ts-expect-error: Ignoring this line for TypeScript errors
    router.push(url.url);
  };

  return (
    <Suspense fallback={<SearchBarFallback />}>
      <Pagination className="bg-white">
        <PaginationContent className="">
          <PaginationItem className="">
            {hasPrevPage && (
              <PaginationPrevious
                href="#"
                className="bgIvanZelena"
                onClick={() => {
                  navigate({
                    url: `/nekretnine?page=${
                      parseInt(page) - 1
                    }&per_page=${per_page}`,
                    pathname: "/nekretnine",
                    query: { page: (parseInt(page) - 1).toString(), per_page },
                  });
                }}
              />
            )}
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              href="#"
              className=" bg-green-700 font-bold"
              onClick={() => {
                navigate({
                  url: `/nekretnine?page=${page}&per_page=${per_page}`,
                  pathname: "/nekretnine",
                  query: { page, per_page },
                });
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            {hasNextPage && (
              <PaginationNext
                href="#"
                className="bgIvanZelena"
                onClick={() => {
                  navigate({
                    url: `/nekretnine?page=${
                      parseInt(page) + 1
                    }&per_page=${per_page}`,
                    pathname: "/nekretnine",
                    query: { page: (parseInt(page) + 1).toString(), per_page },
                  });
                }}
              />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Suspense>
  );
}

export default Paginacija;
