const NavItem = ({ href, icon: Icon, text, closeMenu }) => (
  <a 
    href={href} 
    onClick={closeMenu} 
    className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
    <Icon size={20} />
    <span className="pl-4">{text}</span>
  </a>
);

export default NavItem;