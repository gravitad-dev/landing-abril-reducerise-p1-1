import data from "../mock/data.json";
import Button from "./ui/Button";
import CustomLink from "./ui/CustomLink";

const MenuMobile = ({ isOpen, onClick }) => {
  return (
    <div
      className={`
       bg-black/10 backdrop-blur-sm w-full h-screen fixed
        top-0 left-0  md:hidden  ${isOpen ? "fixed " : "hidden"}
       `}
      onClick={onClick}
    >
      <ul
        className={`
        absolute top-0 px-2 py-10 h-screen
        ${isOpen ? "left-0 animate-fade-right" : "left-[-100vw]"}
        w-[250px] flex flex-col gap-4  items-start bg-neutral-900
         text-apple-50 shadow-md shadow-black/10
      `}
      >
        {data["MENU_LINKS"].map((link) => (
          <li key={link.id} className='p-2' onClick={onClick}>
            {link.isExternal ? (
              <CustomLink href={link.href} target='_blank' rel='noreferrer'>
                {link.text}
              </CustomLink>
            ) : (
              <CustomLink href={link.href}>{link.text}</CustomLink>
            )}
          </li>
        ))}
        <li className='p-2'>
          <Button>
            <a
              href={data["section-five"].link}
              target='_blank'
              rel='noreferrer'
            >
              Contactar
            </a>
          </Button>
        </li>
      </ul>
    </div>
  );
};
export default MenuMobile;
