import { Button } from "@chakra-ui/button";
import { Link } from "@chakra-ui/layout";
import { set } from "lodash";
import { useState } from "react";
import { NavLink } from "react-router-dom/dist";

const SideNav = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  //const [clickedIndex, setClickedIndex] = useState({});

  //   const handleClick = (index) => () => {
  //     setClickedIndex(state => ({
  //       ...state, // <-- copy previous state
  //       [index]: !state[index] // <-- update value by index key
  //     }));
  //   };

  const Menus = [
    { title: "Home", src: "./public/images/home-icon.png", key: 2 },
    {
      title: "Ticket",
      src: "./public/images/ticket-icon.png",
      key: 1,
      subMenu: true,
      openSubMenu: true,
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
    { title: "Support", src: "./public/images/support-icon.png", key: 4 },
    {
      title: "Reports & Analytics",
      src: "./public/images/analytics-icon.png",
      key: 3,
      subMenu: true,
      openSubMenu: false,
      subMenuItems: [
        {
          title: "Overview",
          src: "./public/images/overview-icon.png",
        },
        {
          title: "Team Performance",
          src: "./public/images/support-icon.png",
        },
      ],
    },
    { title: "Settings", src: "./public/images/setting-icon.png", key: 5 },
  ];

  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <img src=".\public\images\LOGO.png" className="ml-6 mb-12" />

        <div className="flex flex-col">
          {Menus.map((menu, index) => {
            return (
              <>
                <Link
                  as={NavLink}
                  className={`my-2 m-4 flex items-center gap-2 text-[#4b5260]`}
                >
                  <div className={`my-2 m-4 flex gap-4`}>
                    <img src={menu.src} />
                    {menu.title}
                    {menu.subMenu && <div>{menu.value}</div>}
                  </div>
                  {menu.subMenu && (
                    <img
                      src=".\public\images\arrow-down-icon.png"
                      className={`${subMenuOpen && "rotate-180"}`}
                      onClick={() => {
                        setSubMenuOpen(!subMenuOpen);
                        handleClick(index);
                      }}
                      //
                    />
                  )}
                </Link>

                {menu.subMenu && subMenuOpen && (
                  <div>
                    {menu.subMenuItems.map((item, index) => {
                      return (
                        <Link
                          as={NavLink}
                          className={`py-2 my-2 m-6 ml-20 flex gap-4 text-[#4b5260]`}
                        >
                          <img src={item.src} />
                          {item.title}
                          <div>{item.value}</div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-4/5 gap-2 p-2 pb-4 rounded-xl ml-4 mb-4 bg-gradient-to-r from-[#0056b3] to-[#007bff]">
        <img src=".\public\images\shine-icon.png" />
        <p className="text-center text-white">Your Free Trial ends in 7 days</p>
        <Button
          borderRadius="30"
          padding="4"
          paddingLeft="10"
          paddingRight="10"
          textColor="#007bff"
        >
          Upgrade Now
        </Button>
      </div>
    </div>
  );
};

export default SideNav;
