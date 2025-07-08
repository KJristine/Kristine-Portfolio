import Link from "next/link";

import {
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinFill,
  RiMailAiLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/krstnjycobrado",
    Icon: RiLinkedinFill,
  },
  {
    name: "GMail",
    link: "https://krstnjycobrado@gmail.com",
    Icon: RiMailAiLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/itzkjcc/",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com/itzkjcc/",
    Icon: RiFacebookLine,
  },
  {
    name: "Github",
    link: "https://github.com/KJristine",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`text-white ${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] text-black hover:text-white"
              : "hover:text-yellow-300"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
