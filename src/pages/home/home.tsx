import { Link } from "react-router-dom";
import { useCountdown } from "../../hooks/countdownTimes";
import classNames from "classnames";
import anime from "./../../assets/club_logos/anime logo.png";
import boardgames from "./../../assets/club_logos/board games logo.png";
import dnd from "./../../assets/club_logos/dnd logo.png";
import gtmn from "./../../assets/club_logos/gtmn logo.png";
import mtg from "./../../assets/club_logos/mtg logo.png";
import pokemon from "./../../assets/club_logos/pokejackets logo.png";
import sga from "./../../assets/club_logos/sga logo.png";
import vgdev from "./../../assets/club_logos/vgdev logo.png";
import { useCarousel } from "./../../hooks/aboutCarousel";
import ClubLogo from "../home/clublogo";
import { isMobile } from "../../utils/BrowserUtils";
import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BasePage } from "../BasePage";

interface HomeProps {
  phraseUsed: string;
}

const NAV_LINKS = [
  { name: "Event Info", path: "/info", color: "bg-[#D9D9D9]" },
  { name: "Schedule", path: "/schedule", color: "bg-[#D9D9D9]" },
  { name: "Tickets", path: "https://gatech.universitytickets.com/w/event.aspx?id=2301&p=1", color: "bg-[#FFC42D]" },

];

export const Home = (props: HomeProps): JSX.Element => {
  const CONDATE = new Date("February 28, 2027 10:00:00").getTime();
  const [days, hours, minutes, seconds] = useCountdown(CONDATE);

  const ZeroPad = (n: number) => n.toString().padStart(2, '0');
  const isExpired = days + hours + minutes + seconds <= 0;

  return (
    <BasePage
      selectedItem={NavBarItemEnum.GET_INVOLVED}
      mobileSelectedItem={NavBarItemEnum.PARTICIPATE}
      dropdownSelect="home"
    >
      <>
        {/* ==== MAIN LANDING PAGE ==== */}
        <div className="min-h-[90vh] bg-[#2e2f31] overflow-x-hidden flex flex-col justify-center relative selection:bg-[#ffc42d] selection:text-black pb-[10%]">
          <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
            {/* CAUTION TAPE BG */}
            <div className="bg-darktape bg-contain bg-repeat-x rotate-[-45deg] w-[300vw] absolute -translate-x-[36vw] h-32 top-[-15%]" /> {/* BACK TAPE */}
            <div className="bg-tape bg-contain bg-repeat-x rotate-[19deg] w-[300vw] absolute left-1/2 -translate-x-[65vw] h-32 bottom-[30%]" /> {/* FRONT TAPE */}
          </div>

          {/* MAIN LANDING PAGE TEXT */}
          <div className="z-10 flex flex-col items-center text-center px-6 md:items-start md:text-left md:pl-24 md:pt-32">
            <h1 className="font-coolvetica leading-none">
              <span className="text-[#ffc42d] text-[6rem] md:text-[12rem]">Wreck</span>
              <span className="text-white text-[6rem] md:text-[12rem]">Con</span>
            </h1>

            {/* COUNTDOWN */}
            <div className="font-interbold font-bold text-white text-[7vw] md:text-[3vw]">
              {isExpired ? (
                "WreckCon 2027 has begun!"
              ) : (
                `${ZeroPad(days)}:${ZeroPad(hours)}:${ZeroPad(minutes)}:${ZeroPad(seconds)}`
              )}
              <span className="ml-4 opacity-80 whitespace-nowrap">
                {isExpired ? (
                  ``
                ) : (
                  `• 2/27/27`
                )}
              </span>
            </div>

            <p className="font-inter text-white text-[5vw] md:text-[2.3vw] mt-6 md:mt-2 max-w-[90vw] md:max-w-[45vw] leading-snug">
              {isExpired ? (
                <span>
                  Check the links below for information about today's events!
                </span>
              ) : (
                `WreckCon is ${props.phraseUsed}.`
              )}
            </p>
            <nav className="flex flex-col md:flex-row gap-4 mt-12 w-full md:w-auto items-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${link.color} w-[60vw] md:w-auto h-[12vw] md:h-[4vw] flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform`}
                >
                  <div className="font-inter font-bold text-[#2e2f31] text-[4vw] md:text-[1.8vw] px-[6vw] md:px-[3vw]">
                    {link.name}
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div
          className={classNames(
            "flex flex-row items-center justify-center font-coolvetica",
            { "h-[7vw] text-[4vw] bg-[#FFC42D] text-black": !isMobile },
            { "h-[fit] text-[9vw] bg-[#FFC42D] text-black mt-[-1vh]": isMobile }
          )}/>
        {/* ==== ABOUT PAGE ==== */}

        <div
          className={classNames(
            "flex flex-row items-center justify-center font-coolvetica text-white mt-[3vh]",
            { "h-[6vw] text-[4vw]": !isMobile },
            { "mt-[2vh] text-[9vw] mb-[-1vh]": isMobile }
          )}
        >
          About WreckCon
        </div>
        <div
          className={classNames(
            "flex h-fill",
            { "flex-row": !isMobile },
            { "flex-col items-center justify-center z-0": isMobile }
          )}
        >
          <div
            className={classNames(
              "w-[30vw] h-fill bg-[#2e2f31] mx-[3vw]",
              { "w-[30vw] mb-[5vw] mt-[3vw]": !isMobile },
              { "w-fit mb-[4vh] z-0": isMobile }
            )}
          >
            {useCarousel()}
          </div>
          <div
            className={classNames(
              "font-inter mb-[5vw] mt-[3vw] text-white",
              { "w-[55vw] text-[1.7vw] mb-[5vw] mt-[3vw]": !isMobile },
              { "w-[80vw] text-[3.2vw] mt-[4vh] text-center": isMobile }
            )}
          >
            WreckCon is a student culture convention held at Georgia Tech (Main
            Atlanta Campus), fully organized and run by Georgia Tech students.
            Starting in 2022, the Dungeons & Dragons and Magic: the Gathering
            clubs ran a small convention with events such as open play and
            tournaments. Realizing that the major potential for a convention at
            Tech, we began reaching out to other clubs to make the event a
            celebration of student culture here at Tech, following in the
            footsteps of previous events such as Techwood Con. We're envisioning
            an event that showcases the best of what people at Georgia Tech have
            to offer, built by Tech, for Tech. Go jackets!{" "}
          </div>
        </div>
        <div
          className={classNames(
            "flex flex-row items-center justify-center font-coolvetica",
            { "h-[7vw] text-[4vw] bg-[#FFC42D] text-black": !isMobile },
            { "h-[fit] text-[9vw] bg-[#FFC42D] text-black mt-[-1vh]": isMobile }
          )}
        >
          Partnering Orgs
        </div>
        <div className="flex items-center justify-center font-inter text-white">
          <div
            className={classNames(
              "text-center",
              { "text-[1.7vw] w-[70vw] my-[3vw]": !isMobile },
              { "text-[3.2vw] w-[80vw] mt-[2vh] mb-[2vh]": isMobile }
            )}
          >
            WreckCon was designed as a showcase of the many varied student
            organizations we have at Tech, and below you'll find a list of the
            student organizations involved with WreckCon this year.
          </div>
        </div>
        <div className="flex items-center justify-center h-fit space-x-[8vw]">
          <ClubLogo
            logo={vgdev}
            clubLink="https://www.gtvgdev.com/"
            clubTitle="VGDev"
            clubText="VGDev creates 6 ground-up, student-driven video games each semester, and we provide opportunities and support for members to grow as game developers through hands-on experience."
          />
          <ClubLogo
            logo={dnd}
            clubLink="https://gatech.campuslabs.com/engage/organization/pending-dungeons-dragons-club"
            clubTitle="GTD&D"
            clubText="At Dungeons & Dragons Club, we strive to create the best student environment for anyone and everyone to enjoy to game of D&D, regardless of your interests or experience level."
          />
          <ClubLogo
            logo={mtg}
            clubLink="https://gtmtg.org/"
            clubTitle="GTMTG"
            clubText="The Magic: The Gathering club at Georgia Tech offers a space for players of all experience levels to play and hang out. Join us every Friday for regular game nights, or check out our calendar for more!"
          />
        </div>
        <div className="flex items-center justify-center h-fit space-x-[8vw]">
          <ClubLogo
            logo={boardgames}
            clubLink="https://gatech.campuslabs.com/engage/organization/boardgameclub"
            clubTitle="Board Games"
            clubText="Georgia Tech's premiere board gaming club. We have regular open board gaming sessions in the student center, and if you'd like to know more, join our discord. Hope to see you there!"
          />
          <ClubLogo
            logo={sga}
            clubLink="https://www.sga.gatech.edu/"
            clubTitle="SGA"
            clubText="The mission of the Student Government Association at Georgia Tech is to empower student organizations, embody student traditions, preserve student integrity, and enrich the student experience."
          />
        </div>
        <div className="flex items-center justify-center h-fit space-x-[8vw]">
          <ClubLogo
            logo={anime}
            clubLink="https://animeo-tekku.weebly.com/"
            clubTitle="Anime O-Tekku"
            clubText="One of the oldest surviving anime clubs in the state, Anime O-Tekku grew from a group of anime fans in 1995 into a large part of GT, welcoming new members from the wide community."
          />
          <ClubLogo
            logo={pokemon}
            clubLink="https://gatech.campuslabs.com/engage/organization/pokejackets"
            clubTitle="PokéJackets"
            clubText="PokéJackets provides a place to celebrate the interest of Pokemon through the video games and trading card games. Activities include championships, card trades, and much more!"
          />
          <ClubLogo
            logo={gtmn}
            clubLink="https://gatech.campuslabs.com/engage/organization/musician-s-network"
            clubTitle="GTMN"
            clubText="GT Musician's Network offers a number of services to musicians and music-lovers, such as practice room access, a professional recording studio, and great place to form a band."
          />
        </div>
      </>
    </BasePage>
  );
};
