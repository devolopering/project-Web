import { NavLink } from "react-router-dom";
import logo from '/logo.svg';

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
    <header className="bg-[#00000005]  py-7 ">
      <div className=" max-w-[1261px] mx-auto flex justify-between items-center">
        <NavLink to={'/'}>
          <img src={logo} alt="my_site_logo" />
        </NavLink>

     
        <nav>
          <ul className="flex space-x-6">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink 
                  to={link === 'Home' ? '/' : `/${link.replace(/\s+/g, '-').toLowerCase()}`} 
                  className={({ isActive }) => 
                    isActive ? "text-[#F7F8F9]" : "text-[#D9D9D9] hover:text-[#F7F8F9]"
                  }
                >
                  {link}
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
