import { TNavLink } from "../types";

// import { TNavLinks } from "../types/TNavLinks";

const NavLinksData: TNavLink[] = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "about-us",
    link: "/about-us",
    subLinks: [
      {
        title: "privacy-policy",
        link: "/privacy-policy",
      },
      {
        title: "faq",
        link: "/faq",
      },
    ],
  },
  {
    title:"shop",
    link: "/shop",
    subLinks: [
      {
        title:"chairs",
        link: "/shop/chairs",
      },
      {
        title:"sofas",
        link: "/shop/sofas",
      },
      {
        title:"tables",
        link: "/shop/tables",
      },
      {
        title:"accessories",
        link: "/shop/accessories",
      },
    ],
  },
  {
    title: "media",
    link: "/media",
    subLinks: [
      {
        title: "blogs",
        link: "/media/blogs",
        subLinksChildren: [
          {
            title: "offers",
            link: "/media/blogs?category=offers",
          },
          {
            title: "recommended",
            link: "/media/blogs?category=recommended",
          },
        ]
      },
    ],
  },
  {
    title: "contact",
    link: "/contact",
  },
];

export default NavLinksData;
