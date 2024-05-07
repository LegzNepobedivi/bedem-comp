import MiniCard from "./MiniCard";

export default function MiniCarousel() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 container mx-auto">
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </div>
    </div>
  );
}
