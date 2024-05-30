import data from "../mock/data.json";
import Button from "./ui/Button";
import CustomLink from "./ui/CustomLink";

const MenuDesktop = () => {
  const { MENU_LINKS } = data;

  return (
    <ul className='hidden md:flex md:items-center md:gap-4'>
      {MENU_LINKS.map((link) => (
        <li key={link.id}>
          {link.isExternal ? (
            <CustomLink href={link.href} target='_blank' rel='noreferrer'>
              {link.text}
            </CustomLink>
          ) : (
            <CustomLink href={link.href}>{link.text}</CustomLink>
          )}
        </li>
      ))}
      <li>
        <Button>
          <a href={data["section-five"].link} target='_blank' rel='noreferrer'>
            Contactar
          </a>
        </Button>
      </li>
    </ul>
  );
};
export default MenuDesktop;
