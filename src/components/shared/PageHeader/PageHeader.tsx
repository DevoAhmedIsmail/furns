import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";
import { Link } from "react-router-dom";

type PageHeaderProps = {
  title: string;
  links: { name: string; url?: string }[];
};

const PageHeader = ({ title, links }: PageHeaderProps) => {
  return (
    <div className="bg-[#f4f5f7] py-12">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-0">
          <p className="text-[32px] font-semibold uppercase">{title}</p>
          <div className="">
            <Breadcrumb>
              <BreadcrumbList>
                {links.map((link, index) => (
                  <>
                    <BreadcrumbItem key={index}>
                      <BreadcrumbLink
                        asChild
                        className={`${
                          link.url
                            ? "text-mainColor"
                            : "text-[#818181] hover:text-[#818181]"
                        } uppercase`}
                      >
                        {link.url ? (
                          <Link to={link.url}>{link.name}</Link>
                        ) : (
                          <span>{link.name}</span>
                        )}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < links.length - 1 && (
                      <BreadcrumbSeparator>/</BreadcrumbSeparator>
                    )}
                  </>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
