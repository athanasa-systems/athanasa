import Link from "next/link";
import { footerLinksConfig } from "@/configs/footer-links-config";

const sectionTitleClass = "text-sm font-medium text-(--foreground) mb-4";

const linkClass =
  "text-sm text-(--muted-foreground) hover:text-(--foreground) transition-colors duration-100";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-(--border) bg-background text-(--muted-foreground)">
      <div className="max-w-360 mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerLinksConfig.sections.map((section) => (
            <div key={section.key}>
              <h3 className={sectionTitleClass}>{section.title}</h3>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {section.links.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className={linkClass}
                      target={link.hasTargetBlank ? "_blank" : undefined}
                      rel={
                        link.hasRelNoopener ? "noopener noreferrer" : undefined
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-(--border) text-sm">
          © {new Date().getFullYear()} Athanasa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
