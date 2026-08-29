export interface NavigationLink {
  label: string;
  href?: string;
  children?: NavigationLink[];
}

export const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Programmes",
    children: [
      { label: "Kaizen", href: "/programmes/kaizen" },
      { label: "Orator", href: "/programmes/orator" },
      { label: "APEX", href: "/programmes/apex" },
    ],
  },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];
