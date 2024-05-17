import DragAndDrop from "@/components/adminpage/DragAndDrop";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function IndexPage() {
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
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
      </div>
      <DragAndDrop />
    </main>
  );
}
