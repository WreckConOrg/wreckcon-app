import { Link } from "react-router-dom";
import { useCountdown } from "../../hooks/countdownTimes";

interface HomeProps {
  phraseUsed: string;
}

const NAV_LINKS = [
  { name: "Event Info", path: "/info", color: "bg-[#D9D9D9]" },
  { name: "Schedule", path: "/schedule", color: "bg-[#D9D9D9]" },
  { name: "Tickets", path: "https://gatech.universitytickets.com/...", color: "bg-[#FFC42D]" },
];

export const Home = (props: HomeProps): JSX.Element => {
  const CONDATE = new Date("February 28, 2026 10:00:00").getTime();
  const [days, hours, minutes, seconds] = useCountdown(CONDATE);

  const ZeroPad = (n: number) => n.toString().padStart(2, '0');
  const isExpired = false; //days + hours + minutes + seconds <= 0;

  return (
    <div className="min-h-screen bg-[#2e2f31] overflow-x-hidden flex flex-col justify-center relative selection:bg-[#ffc42d] selection:text-black">
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
        <div className="bg-darktape bg-contain bg-repeat-x rotate-[-45deg] w-[300vw] absolute -translate-x-[36vw] h-32 top-[10%]" />
        <div className="bg-tape bg-contain bg-repeat-x rotate-[19deg] w-[300vw] absolute left-1/2 -translate-x-[65vw] h-32 bottom-[20%]" />
      </div>

      <div className="z-10 flex flex-col items-center text-center px-6 md:items-start md:text-left md:pl-24 md:pt-32">
        <h1 className="font-coolvetica leading-none">
          <span className="text-[#ffc42d] text-[18vw] md:text-[8vw]">Wreck</span>
          <span className="text-white text-[18vw] md:text-[8vw]">Con</span>
        </h1>

      <div className="font-interbold font-bold text-white text-[7vw] md:text-[3vw]">
        {isExpired ? (
          "WreckCon 2026 has begun!" 
        ) : (
          //`${ZeroPad(days)}:${ZeroPad(hours)}:${ZeroPad(minutes)}:${ZeroPad(seconds)}`
          "Stay Tuned for 2027!"
        )}
         <span className="ml-4 opacity-80 whitespace-nowrap">
        {isExpired ? (
          ``
        ) : (
          ``
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
  );
};
