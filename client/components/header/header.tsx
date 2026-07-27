import Link from "next/link";
import { headerLinksConfig } from "@/configs/header-links-config";
import React from "react";

const navItemClass =
  "group relative text-(--muted-foreground) hover:text-(--foreground) transition-colors duration-100";

const navButtonClass =
  "cursor-pointer flex items-center gap-0.75 py-1.5 px-3 text-(--muted-foreground) hover:text-(--foreground) transition-colors duration-100";

const navIconClass =
  "rotate-0 transition-transform ease-in-out duration-200 group-hover:rotate-180";

const navLinkClass =
  "flex items-center gap-0.75 py-1.5 px-3 leading-normal cursor-pointer";

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-(--header-height) w-full transition-all duration-300 bg-background sticky top-0 z-40 ${isScrolled ? "after:content-[''] after:absolute after:h-px after:w-full after:bg-(--muted) after:bottom-0" : ""}`}
    >
      <div className="flex items-center h-full max-w-360 mx-auto px-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Link href={"/"}>{/* Add logo or brand name here */}</Link>
          </div>
          <nav className="flex w-full">
            <ul className="flex items-center flex-1 list-none p-0 m-0 gap-2">
              {headerLinksConfig.sections.map((section) => (
                <li key={section.key} className={navItemClass}>
                  {section.sections ? (
                    <button className={navButtonClass}>{section.title}</button>
                  ) : section.href ? (
                    <Link href={section.href} className={navLinkClass}>
                      {section.title}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
