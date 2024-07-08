 interface TNavLink {
  title: string;
  link: string;
  subLinks?: {
    title: string;
    link: string;
    subLinksChildren?: {
      title: string;
      link: string;
    }[];
  }[];
}

export default TNavLink;


