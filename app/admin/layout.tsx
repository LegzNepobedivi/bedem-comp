import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

import { GlobalNav } from "@/components/adminpage/GlobalNav";
import Byline from "@/components/adminpage/Byline";

export const dynamic = "force-dynamic";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.log("Error in AdminLayout");
    console.error(error);
    return redirect("/login");
  }

  if (!user) {
    console.log("User not foundddddddddddddddddddddddd");

    return redirect("/login");
  }

  return (
    <div className="[color-scheme:dark]">
      <div className="overflow-y-scroll bg-gray-1100  pb-36">
        <GlobalNav />

        <div className="lg:pl-72">
          <div className="mx-auto max-w-7xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>
            <Byline className="fixed sm:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
