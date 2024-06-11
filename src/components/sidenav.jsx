import { Button } from "@chakra-ui/button";
import { Link } from "@chakra-ui/layout";
import { useState } from "react";
import { NavLink } from "react-router-dom/dist";

const SideNav = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const Menus = [
    { title: "Home", src: "./public/images/home-icon.png" },
    {
      title: "Ticket",
      src: "./public/images/ticket-icon.png",
      subMenu: true,
      subMenuItems: [
        {
          title: "Assigned",
          src: "./public/images/assigned-icon.png",
          value: 6,
          color: "green",
        },
        {
          title: "Unassigned",
          src: "./public/images/unassigned-icon.png",
          value: 10,
          color: "red",
        },
        {
          title: "Discussion",
          src: "./public/images/discussion-icon.png",
          value: 8,
          color: "blue",
        },
        {
          title: "Closed",
          src: "./public/images/closed-icon.png",
          value: 9,
          color: "lightGreen",
        },
      ],
      value: 30,
    },
    { title: "Support", src: "./public/images/support-icon.png" },
    { title: "Analytics", src: "./public/images/analytics-icon.png" },
    { title: "Settings", src: "./public/images/setting-icon.png" },
  ];

  return (
    <div className="relative h-screen">
      <img src=".\public\images\LOGO.png" className="ml-8" />

      <div className="flex flex-col">
        {Menus.map((menu, index) => {
          return (
            <>
              <Link
                as={NavLink}
                className={`my-2 m-6 flex items-center gap-12 text-[#4b5260]`}
              >
                <div className={`my-2 m-6 flex gap-4`}>
                  <img src={menu.src} />
                  {menu.title}
                  {menu.subMenu && <div>{menu.value}</div>}
                </div>
                {menu.subMenu && (
                  <img
                    src=".\public\images\arrow-down-icon.png"
                    className={`${subMenuOpen && "rotate-180"}`}
                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                  />
                )}
              </Link>

              {menu.subMenu && subMenuOpen && (
                <div>
                  {menu.subMenuItems.map((item, index) => {
                    return (
                      <Link
                        as={NavLink}
                        className={`py-2 my-2 m-8 ml-20 flex justify-between gap-4 text-[#4b5260]`}
                      >
                        <img src={item.src} />
                        {item.title}
                        <div className={``}>{item.value}</div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </>
          );
        })}
      </div>

      <div className="bg-blue-400 flex flex-col justify-center items-center w-4/5 gap-2 p-2 pb-4 rounded-xl absolute bottom-4 ml-4 bg-gradient-to-r from-[#0056b3] to-[#007bff]">
        <img src=".\public\images\shine-icon.png" />
        <p className="text-center text-white">Your Free Trial ends in 7 days</p>
        <Button borderRadius="30" padding="4" paddingLeft="10" paddingRight="10" textColor="#007bff">Upgrade Now</Button>
      </div>

    </div>
  );
};

export default SideNav;
