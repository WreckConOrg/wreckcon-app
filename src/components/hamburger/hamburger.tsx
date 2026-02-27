import logo from "./../../assets/wreck-logo-white.png";
import hambut from "./../../assets/ham-button.png";
import hamclose from "./../../assets/ham-close.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { NavBarItemEnum } from "../navbar/NavBarItem";

export interface HamburgerProps {
  selectedItem: NavBarItemEnum;
}

interface NavConfig {
  item: NavBarItemEnum;
  label: string;
  url: string;
  hasDivider?: boolean; // Adds a line AFTER this item
}

const NAV_LINKS: NavConfig[] = [
  { item: NavBarItemEnum.ABOUT, label: "about", url: "/about", hasDivider: true },
  { item: NavBarItemEnum.TICKETS, label: "tickets", url: "https://gatech.universitytickets.com/w/event.aspx?id=2196" },
  { item: NavBarItemEnum.DISCORD, label: "discord", url: "https://discord.gg/BY2hTWjz4s" },
  { item: NavBarItemEnum.SHOP, label: "shop", url: "https://wreckcon.bigcartel.com/", hasDivider: true },
  { item: NavBarItemEnum.EVENT_INFO, label: "event info", url: "/info" },
  { item: NavBarItemEnum.SCHEDULE, label: "schedule", url: "/schedule" },
  { item: NavBarItemEnum.BROCHURE, label: "brochure", url: "/brochure" },
  { item: NavBarItemEnum.EVENTS, label: "events", url: "/events" },
  { item: NavBarItemEnum.GUESTS, label: "guests", url: "/guests" },
  { item: NavBarItemEnum.ARTISTS, label: "artists", url: "/artists", hasDivider: true },
  { item: NavBarItemEnum.CONTACT, label: "contact us", url: "/contact-us" },
  { item: NavBarItemEnum.PARTICIPATE, label: "participate", url: "/involved" },
  { item: NavBarItemEnum.SPONSOR, label: "sponsors", url: "/sponsors" },
];

export const Hamburger = (props: HamburgerProps) => {
  const [open, setOpen] = useState(false);

  const isExternal = (url: string) => url.startsWith("http");

  const GetTextColor = (page: NavBarItemEnum) => {
    return page == props.selectedItem ? "text-[#FFC42D]" : "text-white";
  };

  return (
    <div className="relative">
      <div
        className={classNames(
          "fixed top-0 left-0 h-screen w-[50vw] bg-[#2E2F31] z-[100] transition-transform duration-300 ease-in-out overflow-y-auto flex flex-col pt-6 pb-12",
          { "translate-x-0": open, "-translate-x-full": !open }
        )}
      >
        <div className="flex items-center justify-between px-6 mb-8">
          <Link to={"/"} onClick={() => setOpen(false)}>
            <img src={logo} className="w-24 md:w-32"></img>
          </Link>
          <div>
            <button
              onClick={() => setOpen(!open)}
            >
              <img src={hamclose} className="w-8 h-8" />
            </button>
          </div>
        </div>
        

        <div className="flex flex-col px-10 font-inter text-2xl tracking-wide">
          {NAV_LINKS.map((link) => (
            <div key={link.item} className="flex flex-col">
              {isExternal(link.url) ? (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.url}
                  className={classNames("py-3 transition-colors", {
                    "text-[#FFC42D]": props.selectedItem === link.item,
                    "text-white": props.selectedItem !== link.item,
                  })}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )}

              {link.hasDivider && (
                <hr className="my-4 h-[2px] border-none bg-[#FFC42D]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="h-[5vh] w-screen flex flex-column justify-center mt-[2vh] translate-x-[5vw]">
        <Link to={"/"} className="w-fill">
          <img src={logo} className="w-[20vw]"></img>
        </Link>
      </div> */}
      <div className="relative flex items-center justify-center h-[8vh] w-full px-6 mt-8 mb-8">
          <button
            onClick={() => setOpen(!open)}
            className="absolute left-6 z-50"
          >
            <img src={hambut} className="w-10 md:w-12" alt="menu" />
          </button>
          <Link to={"/"}>
            <img src={logo} className="w-32 md:w-40" alt="logo"></img>
          </Link>
        </div>
    </div>
  );
};
