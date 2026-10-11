type Props = {
  kicker: string;
  title: React.ReactNode;
  text?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHead({
  kicker,
  title,
  text,
  align = "left",
  tone = "dark",
  className = "",
}: Props) {
  const light = tone === "light";
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      <p className={`kicker ${light ? "!text-marigold" : ""}`}>{kicker}</p>
      <h2
        className={`text-balance mt-3 text-[2.1rem] leading-[1.1] sm:text-[2.9rem] ${
          light ? "!text-cream" : ""
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-cream/75" : "text-muted"}`}>
          {text}
        </p>
      )}
    </div>
  );
}
