"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/invitations" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Packages", href: "/packages" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  // The menu is remembered against the route it was opened on, so navigating
  // closes it without an effect that fights the render.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const setOpen = (next: boolean) => setOpenedOn(next ? pathname : null);

  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // A soft shadow appears under the header once the page has moved.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the menu is open: lock the page, close on Escape, keep focus inside.
  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        // Setter used directly so the effect does not depend on a helper
        // that is recreated on every render.
        setOpenedOn(null);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]) && href !== "/#how-it-works" && href !== "/#faq";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-line bg-ivory/94 backdrop-blur-md",
        scrolled && "shadow-card",
      )}
    >
      <Container>
        <div className="flex h-18 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-baseline gap-2"
            aria-label={`${siteConfig.name} — home`}
          >
            <span className="font-display text-xl leading-none font-semibold tracking-[0.06em] uppercase">
              {siteConfig.name}
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm text-ink-soft transition-colors hover:text-ink",
                      isActive(item.href) && "text-ink",
                    )}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block">
              <ButtonLink href="/contact" size="sm">
                Get a quote
              </ButtonLink>
            </span>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="border-t border-line bg-ivory lg:hidden"
        >
          <Container className="py-4">
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-12 items-center border-b border-line/70 text-[0.9375rem] text-ink-soft"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ButtonLink href="/contact" className="mt-5 w-full" onClick={() => setOpen(false)}>
              Get a quote
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
