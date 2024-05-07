import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import { GlobalNav } from "@/components/adminpage/GlobalNav";
import Byline from "@/components/adminpage/Byline";

const AdminLayout = async ({ children }) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
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
