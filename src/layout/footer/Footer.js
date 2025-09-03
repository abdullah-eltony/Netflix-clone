import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const Links = [
    {
      title: "Company",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About Us",
          link: "/about",
        },
        {
          name: "Contact Us",
          link: "/contact",
        },
        {
          name: "Movies",
          link: "/movies",
        },
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Home",
          link: "/",
        },
      ],
    },
    {
      title: "Top Categories",
      links: [
        {
          name: "Action",
          link: "#",
        },
        {
          name: "Romantic",
          link: "#",
        },
        {
          name: "Drama",
          link: "#",
        },
        {
          name: "Historical",
          link: "#",
        },
      ],
    },
    {
      title: "My Account",
      links: [
        {
          name: "Dashboard",
          link: "/dashboard",
        },
        {
          name: "My Favorites",
          link: "/favorites",
        },
        {
          name: "Profile",
          link: "/profile",
        },
        {
          name: "Change Password",
          link: "/password",
        },
      ],
    },
  ];
  return (
    <div className="bg-dry py-4">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
          {Links.map((link, index) => (
            <div
              key={index}
              className="pb-3.5 sm:pb-0"
            >
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                {link.title}
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                {link.links.map((link, index) => (
                  <li key={index} className="flex items-baseline">
                    <Link
                      to={link.link}
                      className="text-border inline-block w-full hover:text-subMain transitions"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="pb-3.5 sm:pb-0">
            <Link to={"/"}>
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-2/4 object-contain h-12"
              />
            </Link>
            <p className="leading-7 text-sm text-border mt-3">
              <span>lorem 196 Andrew Read,Suite 200,<br/> New York, NY 10007</span>
              <br />
              <span>Tell:+1 123 456 7890</span>
              <br />
              <span>Email: info@zpunet.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
