import Image from "next/image";
import Link from "next/link";
import Socials from "../components/socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full px-2 sm:px-4 md:px-8 py-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-y-2 sm:gap-y-0">
          {/* logo */}
          <Link href="/" className="flex-shrink-0 mb-2 sm:mb-0">
            <Image
              src="/logo.svg"
              alt="logo"
              width={160}
              height={36}
              priority
              className="w-auto h-10 sm:h-12"
            />
          </Link>
          {/* socials */}
          <div>
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
