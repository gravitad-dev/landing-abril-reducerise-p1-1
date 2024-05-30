import data from "../mock/data.json";

import CustomLink from "./ui/CustomLink";
import Logo from "./ui/Logo";

const Footer = () => {
  const { MENU_LINKS, FOOTER_SOCIAL } = data;

  return (
    <footer className='bg-neutral-900 text-apple-50 py-10 px-2'>
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
      <div className='w-full border-t border-neutral-50/10 mt-4 px-4 py-5  flex flex-col items-center justify-center md:flex-row md:justify-between'>
        <p className='text-center'>
          © {new Date().getFullYear()}. Todos los derechos reservados.
        </p>
        <div className='flex items-center justify-center gap-4 mt-4'>
          {FOOTER_SOCIAL.map((item) => (
            <a href={item.href} key={item.id}>
              <img src={item.icon} alt={item.title} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
