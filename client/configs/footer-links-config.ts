export interface Section {
  key: string;
  title: string;
  links: LinkItem[];
}

export interface LinkItem {
  key: string;
  name: string;
  href: string;
  hasTargetBlank?: boolean; // Optional property to indicate if the link should open in a new tab
  hasRelNoopener?: boolean; // Optional property to indicate if the link should have rel="noopener"
}

export interface FooterLinksConfig {
  sections: Section[];
}

export const footerLinksConfig: FooterLinksConfig = {
  sections: [
    {
      key: "products",
      title: "Products",
      links: [
        {
          key: "plasios",
          name: "Plasios",
          href: "/plasios",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "kleisa",
          name: "Kleisa",
          href: "/kleisa",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "omeliaui",
          name: "Omelia UI",
          href: "/omeliaui",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "sophiajs",
          name: "Sophia.js",
          href: "/sophiajs",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "loftycharts",
          name: "Lofty Charts",
          href: "/loftycharts",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "eleganticons",
          name: "Elegant Icons",
          href: "/eleganticons",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
      ],
    },
    {
      key: "resources",
      title: "Resources",
      links: [
        {
          key: "docs",
          name: "Docs",
          href: "/docs",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "about",
          name: "About",
          href: "/about",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "blog",
          name: "Blog",
          href: "/blog",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "changelog",
          name: "Changelog",
          href: "/changelog",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "knowledge-base",
          name: "Knowledge Base",
          href: "/knowledge-base",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
      ],
    },
    {
      key: "company",
      title: "Company",
      links: [
        {
          key: "open-source",
          name: "Open Source",
          href: "/open-source",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "careers",
          name: "Careers",
          href: "/careers",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "enterprise",
          name: "Enterprise",
          href: "/enterprise",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "pricing",
          name: "Pricing",
          href: "/pricing",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "help",
          name: "Help",
          href: "/help",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
      ],
    },
    {
      key: "legal",
      title: "Legal",
      links: [
        {
          key: "privacy-policy",
          name: "Privacy Policy",
          href: "/privacy-policy",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "terms-of-service",
          name: "Terms of Service",
          href: "/terms-of-service",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "cookie-policy",
          name: "Cookie Policy",
          href: "/cookie-policy",
          hasTargetBlank: false,
          hasRelNoopener: false,
        },
        {
          key: "status",
          name: "Status",
          href: "https://status.athanasa.com",
          hasTargetBlank: true,
          hasRelNoopener: true,
        },
      ],
    },
    {
      key: "social",
      title: "Social",
      links: [
        {
          key: "github",
          name: "GitHub",
          href: "https://github.com/athanasasystems",
          hasTargetBlank: true,
          hasRelNoopener: true,
        },
        {
          key: "x",
          name: "X",
          href: "https://x.com/athanasasystems",
          hasTargetBlank: true,
          hasRelNoopener: true,
        },
        {
          key: "linkedin",
          name: "LinkedIn",
          href: "https://www.linkedin.com/company/athanasa",
          hasTargetBlank: true,
          hasRelNoopener: true,
        },
        {
          key: "youtube",
          name: "YouTube",
          href: "https://www.youtube.com/@athanasasystems",
          hasTargetBlank: true,
          hasRelNoopener: true,
        },
        {
          key: "instagram",
          name: "Instagram",
          href: "https://www.instagram.com/athanasasystems",
          hasTargetBlank: true,
          hasRelNoopener: true,
        },
      ],
    },
  ],
};
