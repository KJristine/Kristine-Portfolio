"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import { HiHome, HiUser, HiViewColumns, HiEnvelope } from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "projects", path: "/projects", Icon: HiViewColumns },
  {
    name: "contact",
    path: "/contacts",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav
      className="
        fixed z-50
        bottom-4 left-1/2 -translate-x-1/2
        flex flex-row w-auto
        xl:top-0 xl:bottom-0 xl:right-[2%] xl:left-auto xl:translate-x-0
        xl:flex-col xl:justify-center xl:h-screen xl:w-16
      "
    >
      <div
        className="
          flex flex-row items-center gap-x-4 px-4 py-2
          bg-transparent backdrop-blur-xl border border-white/20 shadow-2xl
          text-xl rounded-full
          xl:flex-col xl:gap-x-0 xl:gap-y-10 xl:rounded-full xl:px-0 xl:py-8 xl:text-xl xl:h-max
        "
      >
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname ? "text-yellow-500" : "text-white"
            } relative flex items-center group hover:text-yellow-500 transition-all duration-300`}
            href={link.path}
            key={i}
          >
            {/* tooltip */}
            <div
              role="tooltip"
              className="
                hidden xl:group-hover:flex
                absolute pr-14 right-0
              "
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>
            {/* icon */}
            <div>
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
