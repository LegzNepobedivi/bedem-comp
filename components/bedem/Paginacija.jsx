"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function Paginacija({ hasNextPage, hasPrevPage }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  let page = searchParams.get("page") ?? "1";
  let per_page = searchParams.get("per_page") ?? "12";
  console.log("page", page);
  console.log("per_page", per_page);

  return (
    <React.Suspense>
      <Pagination className="bg-white">
        <PaginationContent className="">
          <PaginationItem className="">
            {hasPrevPage && (
              <PaginationPrevious
                href="#"
                className="bgIvanZelena"
                onClick={() => {
                  router.push(
                    "/nekretnine?page=" +
                      (parseInt(page) - 1) +
                      "&per_page=" +
                      per_page
                  );
                }}
              />
            )}
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis className="ivanZelena" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className=" bg-green-700 font-bold"
              onClick={() => {
                router.push(
                  "/nekretnine?page=" + page + "&per_page=" + per_page
                );
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis className="ivanZelena" />
          </PaginationItem>
          <PaginationItem>
            {hasNextPage && (
              <PaginationNext
                href="#"
                className="bgIvanZelena"
                onClick={() => {
                  router.push(
                    "/nekretnine?page=" +
                      (parseInt(page) + 1) +
                      "&per_page=" +
                      per_page
                  );
                }}
              />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </React.Suspense>
  );
}

export default Paginacija;
