"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  //PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
