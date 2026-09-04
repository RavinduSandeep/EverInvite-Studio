import type { Testimonial } from "@/types";

/**
 * Genuine client testimonials only.
 *
 * This array is intentionally empty. The testimonials section is hidden
 * entirely while it is empty, so nothing invented is ever shown.
 *
 * To add a real one, ask the client for permission first, then add:
 *   {
 *     id: "t1",
 *     name: "Client name",
 *     event: "Wedding, December 2026",
 *     quote: "Their words, unedited.",
 *   }
 */
export const testimonials: Testimonial[] = [];
