import { TNavLink } from "../types";

// import { TNavLinks } from "../types/TNavLinks";

const NavLinksData: TNavLink[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about-us",
    subLinks: [
      {
        title: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        title: "Faq",
        link: "/faq",
      },
    ],
  },
  {
    title: "Shop",
    link: "/shop",
    subLinks: [
      {
        title: "Chairs",
        link: "/shop/chairs",
      },
      {
        title: "Sofas",
        link: "/shop/sofas",
      },
      {
        title: "Tables",
        link: "/shop/tables",
      },
      {
        title: "Accessories",
        link: "/shop/accessories",
      },
    ],
  },
  {
    title: "Media",
    link: "/media",
    subLinks: [
      {
        title: "Blogs",
        link: "/media/blogs",
        subLinksChildren: [
          {
            title: "Offers",
            link: "/media/blogs?category=offers",
          },
          {
            title: "Recommended",
            link: "/media/blogs?category=recommended",
          },
        ]
      },
    ],
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export default NavLinksData;
