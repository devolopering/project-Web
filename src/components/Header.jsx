import { NavLink } from "react-router-dom";
import logo from '/logo.svg';
import { TbPhoneCall } from "react-icons/tb";

function Header() {
  const links = [
    'Home',
    'Transportation / Logistics',
    'Dispatching',
    'ELD Service',
    'Accounting Service',
    'Safety/Fleet Service',
    'Contact us'
  ];

  return (
    <header className="bg-[#00000005] py-7">
      <div className="max-w-[1261px] px-5 mx-auto flex justify-between items-center">
        <NavLink to={'/'}>
          <img src={logo} alt="my_site_logo" />
        </NavLink>

        <nav>
          <ul className="flex space-x-6">
            {links.map((link, index) => (
              <li key={index} className="flex items-center">
                <NavLink 
                  to={link === 'Home' ? '/' : `/${link.replace(/\s+/g, '-').toLowerCase()}`} 
                  className={({ isActive }) => 
                    isActive ? "text-[#F7F8F9]" : "text-[#D9D9D9] hover:text-[#F7F8F9]"
                  }
                >
                  {link === 'Contact us' ? (
                    <span className="bg-[#FD560B] px-[38px] py-[16px] text-white rounded-[7px] text-nowrap flex items-center shadow-[0_4px_10px_rgba(255,116,41,0.3)]">
                      {link}
                      <TbPhoneCall className="ml-2 text-white" />
                    </span>
                  ) : (
                    link
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
