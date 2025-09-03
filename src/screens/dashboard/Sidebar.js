import { NavLink } from "react-router-dom";
import { SidebarLinks } from "../../data/sidebarLinks";

const Sidebar = ({ children }) => {
  const active = "bg-dryGray text-subMain";
  const hover = "hover:text-white hover:bg-main";
  const inActive =
    "rounded font-medium text-sm transitions flex gap-3 items-center p-4";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;
  return (
    <div className="min-h-screen container mx-auto  px-2">
      <div className="xl:grid grid-cols-8 gap-10 item-start md:py-12 py-6">
        <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5">
          {
            // sidebar links
            SidebarLinks.map((item, index) => (
              <NavLink to={item.link} key={index} className={Hover}>
                <item.icon />
                <p>{item.name}</p>
              </NavLink>
            ))
          }
        </div>
        <div 
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="200"
        className="col-span-6 rounded-md bg-dry border border-gray-800 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
