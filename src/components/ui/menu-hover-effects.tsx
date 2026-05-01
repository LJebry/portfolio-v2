"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "JR", href: "/" },
  { label: "About Me", href: "/about-me" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Fun", href: "/fun" },
];

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className="min-w-0">
      <ul className="grid grid-cols-2 items-center gap-x-3 gap-y-2 sm:flex sm:justify-between sm:gap-3 lg:gap-5">
        {menuItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname === item.href;

          return (
            <li key={item.label} className="shrink-0 list-none">
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className="group relative inline-block"
              >
                <span
                  className={[
                    "relative z-10 block whitespace-nowrap px-2 py-2 font-display text-sm font-semibold uppercase transition-colors duration-300 sm:px-2 sm:text-base lg:px-3 lg:text-lg",
                    isActive
                      ? "text-background"
                      : "text-foreground group-hover:text-background",
                  ].join(" ")}
                >
                  {item.label === "JR" ? (
                    <>
                      J
                      <span
                        className={
                          isActive
                            ? "text-accent"
                            : "text-accent group-hover:text-background"
                        }
                      >
                        R
                      </span>
                    </>
                  ) : (
                    item.label
                  )}
                </span>
                <span
                  className={[
                    "absolute inset-0 origin-center border-y-2 border-foreground transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-100",
                    isActive ? "scale-y-100 opacity-100" : "scale-y-[2] opacity-0",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[2px] h-full w-full origin-top bg-foreground transition-all duration-300 group-hover:scale-100 group-hover:opacity-100",
                    isActive ? "scale-100 opacity-100" : "scale-0 opacity-0",
                  ].join(" ")}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
