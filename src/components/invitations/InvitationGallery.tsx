"use client";

import { useMemo, useState } from "react";
import type { InvitationSample } from "@/types";
import { cn } from "@/lib/utils";
import InvitationCard from "./InvitationCard";

export default function InvitationGallery({
  invitations,
  categories,
  styles,
}: {
  invitations: InvitationSample[];
  categories: string[];
  styles: string[];
}) {
  const [category, setCategory] = useState("All");
  const [style, setStyle] = useState<string | null>(null);

  const visible = useMemo(
    () =>
      invitations.filter((invitation) => {
        const categoryMatch = category === "All" || invitation.category === category;
        const styleMatch = !style || invitation.styles.includes(style as never);
        return categoryMatch && styleMatch;
      }),
    [invitations, category, style],
  );

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="sr-only">Filter by event type</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={cn(
                  "min-h-11 rounded-full border px-4 text-sm font-semibold transition-colors",
                  category === item
                    ? "border-gold bg-gold text-white"
                    : "border-line-strong bg-paper text-ink hover:border-gold hover:text-gold",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {styles.length > 1 ? (
          <div>
            <h2 className="sr-only">Filter by design style</h2>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-[0.8125rem] font-bold tracking-[0.1em] text-ink-muted uppercase">
                Style
              </span>
              {styles.map((item) => {
                const active = style === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setStyle(active ? null : item)}
                    aria-pressed={active}
                    className={cn(
                      "min-h-11 rounded-full border px-4 text-sm font-semibold transition-colors",
                      active
                        ? "border-gold bg-gold text-white"
                        : "border-line-strong bg-paper text-ink hover:border-gold hover:text-gold",
                    )}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-ink-muted">
        Showing {visible.length} of {invitations.length} designs
      </p>

      {visible.length ? (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((invitation, index) => (
            <InvitationCard
              key={invitation.id}
              invitation={invitation}
              priority={index < 3}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-line bg-paper p-10 text-center">
          <p className="text-ink-soft">
            No designs match that combination yet.
          </p>
          <button
            type="button"
            onClick={() => {
              setCategory("All");
              setStyle(null);
            }}
            className="mt-3 min-h-11 text-sm text-gold underline underline-offset-4"
          >
            Clear the filters
          </button>
        </div>
      )}
    </div>
  );
}
