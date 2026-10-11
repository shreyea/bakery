"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cakeFlavours, cakeOccasions, cakeSizes, waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

function Select({
  id,
  label,
  options,
}: {
  id: string;
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      <div className="relative">
        <select id={id} name={id} className="field appearance-none pr-10" defaultValue={options[0]}>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3.5 top-1/2 size-5 -translate-y-1/2 text-muted"
          aria-hidden
        />
      </div>
    </div>
  );
}

/** Builds a ready-to-send WhatsApp message from the form. Nothing is stored. */
export default function CakePlanner() {
  const [minDate, setMinDate] = useState<string>();

  // Cakes need two days' notice, so don't offer earlier dates.
  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    setMinDate(d.toISOString().slice(0, 10));
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const rawDate = get("date");
    const niceDate = rawDate
      ? new Date(`${rawDate}T00:00:00`).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : "not sure yet";
    const lines = [
      "Hi Humble Crumble! I'd like to order a cake.",
      "",
      `Name: ${get("name")}`,
      `Occasion: ${get("occasion")}`,
      `Size: ${get("size")}`,
      `Flavour: ${get("flavour")}`,
      `Eggless: ${f.get("eggless") ? "Yes" : "No"}`,
      `Needed on: ${niceDate}`,
    ];
    if (get("message")) lines.push(`Message on cake: ${get("message")}`);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-paper p-6 text-cocoa shadow-lift sm:p-8">
      <h3 className="text-2xl">Plan your cake</h3>
      <p className="mt-1.5 text-sm text-muted">
        Fill this in and it opens in WhatsApp, ready to send. You can add a reference photo there.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" className="field" placeholder="e.g. Ananya" />
        </div>
        <Select id="occasion" label="Occasion" options={cakeOccasions} />
        <Select id="size" label="Size" options={cakeSizes} />
        <div className="sm:col-span-2">
          <Select id="flavour" label="Flavour" options={cakeFlavours} />
        </div>
        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-semibold">
            Needed on
          </label>
          <input id="date" name="date" type="date" min={minDate} className="field" />
        </div>
        <label className="flex min-h-[48px] cursor-pointer items-center gap-3 self-end rounded-xl border border-line bg-cream px-4 text-sm font-semibold">
          <input type="checkbox" name="eggless" className="size-5 accent-[#56703F]" />
          Make it eggless
        </label>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
            Message on the cake <span className="font-medium text-muted">(optional)</span>
          </label>
          <input id="message" name="message" className="field" placeholder="e.g. Happy Birthday Aai!" />
        </div>
      </div>

      <button type="submit" className="btn btn-wa mt-6 w-full">
        <WhatsAppIcon />
        Send on WhatsApp
      </button>
    </form>
  );
}
