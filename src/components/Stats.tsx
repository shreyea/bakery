import { stats } from "@/lib/site";

export default function Stats() {
  return (
    <section aria-label="The bakery in numbers" className="bg-terracotta text-cream">
      <dl className="wrap grid grid-cols-2 gap-y-9 py-12 sm:py-14 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-2 text-center lg:px-6 ${i > 0 ? "lg:border-l lg:border-cream/20" : ""}`}
          >
            <dd className="font-display text-[2.8rem] leading-none sm:text-6xl">{s.value}</dd>
            <dt className="mt-3 text-[0.82rem] font-medium uppercase tracking-[0.12em] text-cream/80">
              {s.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
