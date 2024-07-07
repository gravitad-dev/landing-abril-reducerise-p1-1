import data from "../mock/data.json";

import CustomLink from "./ui/CustomLink";
import Logo from "./ui/Logo";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Icons = {
  1 : <FaInstagram />,
  2 : <FaFacebookF />,
  3 : <FaLinkedinIn />,
  4 : <FaXTwitter />
}

const Footer = () => {
  const { MENU_LINKS, FOOTER_SOCIAL } = data;

  return (
    <footer className='bg-neutral-900 text-apple-50 pt-10 pb-1 px-2'>
      {/* top */}
      <div>
        <div className='flex items-center justify-center'>
          <Logo />
        </div>
        {/* links */}
        <ul className='flex gap-4 items-center justify-center my-5 flex-wrap md:flex-nowrap'>
          {MENU_LINKS.map((link) => (
            <li key={link.id} className='text-sm'>
              {link.isExternal ? (
                <CustomLink href={link.href} target='_blank' rel='noreferrer'>
                  {link.text}
                </CustomLink>
              ) : (
                <CustomLink href={link.href}>{link.text}</CustomLink>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* bottom */}
      <div className='flex justify-center border-t border-neutral-50/10 mt-4 px-4 py-5 '>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full max-w-[1200px] gap-6">
        <p className='text-center text-sm text-gray-400'>
          REDUCE RISE © {new Date().getFullYear()}. Todos los derechos reservados.
        </p>

        <div className='flex items-center justify-center gap-4 mt-4'>
          {FOOTER_SOCIAL.map((item) => (
            <a href={item.href} key={item.id} target="blank">
              {Icons[item.id]}
            </a>
          ))}
        </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
