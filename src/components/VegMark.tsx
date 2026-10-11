/** The green-dot "vegetarian" mark used on Indian food packaging and menus. */
export default function VegMark({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Vegetarian"
      title="Vegetarian"
      className={`inline-grid size-[15px] shrink-0 place-items-center rounded-[3px] border-[1.5px] border-[#1F8A3B] bg-paper ${className}`}
    >
      <span className="size-[7px] rounded-full bg-[#1F8A3B]" />
    </span>
  );
}
