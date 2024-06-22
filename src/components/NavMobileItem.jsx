const NavMobileItem = ({ href, icon: Icon, text, closeMenu }) => (
  <a 
    href={href} 
    onClick={closeMenu} 
    className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-purple-400 hover:rounded-3xl ease-in-out duration-200'>
    <div className="w-8 flex justify-center">
      <Icon size={25} />
    </div>
    <span className="pl-4">{text}</span>
  </a>
);

export default NavMobileItem;
