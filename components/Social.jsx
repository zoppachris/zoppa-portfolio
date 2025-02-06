import Link from "next/link";
import { FaGithub, FaGitlab, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/zoppachris" },
  { icon: <FaGitlab />, path: "https://gitlab.com/zoppa.c11" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/zoppa-christoppa-m-mahde/",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/zoppa_c11/" },
];

export default function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            target="_blank"
            key={index}
            href={item.path}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
