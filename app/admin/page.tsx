import DragAndDrop from "@/components/adminpage/DragAndDrop";

export default async function IndexPage() {
  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
      </div>
      <DragAndDrop />
    </main>
  );
}
