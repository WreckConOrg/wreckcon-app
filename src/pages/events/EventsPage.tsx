import { useRef, Fragment } from "react";
import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BasePage } from "../BasePage";
import { Event, EventProps } from "./Event";
import { EVENTCONFIG } from "./EventsConfig";
import { EventShortcut } from "./EventShortcut";
import { isMobile } from "../../utils/BrowserUtils";

export const EventsPage = (): JSX.Element => {
  const refs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const events = EVENTCONFIG.map((item) => {
    return (
      <div key={item.name} ref={(el) => (refs.current[item.name] = el)}>
        <Event {...item} />
      </div>
    );
  });

  // const mapEventShortcuts = (events: EventProps[]) => {
  //   return events.map((event, index) => {
  //     const ref = createRef<HTMLDivElement>();
  //     refs[event.name] = ref;
  //     return (
  //       <>
  //         <EventShortcut name={event.name} reference={ref} />
  //         {index + 1 < events.length && (
  //           <div className="text-white font-inter text-[3vw] md:text-[1vw]">
  //             |
  //           </div>
  //         )}
  //       </>
  //     );
  //   });
  // };

  // const numItemsPerLine = isMobile ? 3 : 6;

  // const slicedEvents = EVENTCONFIG.reduce<[EventProps[]]>(
  //   (resultArray, item, index) => {
  //     const chunkIndex = Math.floor(index / numItemsPerLine);

  //     if (!resultArray[chunkIndex]) {
  //       resultArray[chunkIndex] = [];
  //     }

  //     resultArray[chunkIndex].push(item);

  //     return resultArray;
  //   },
  //   [] as unknown as [EventProps[]]
  // );

  // const eventShortcuts = slicedEvents.map((events, index) => {
  //   return (
  //     <div className="flex flex-row gap-[0.5vw] items-center">
  //       {mapEventShortcuts(events)}
  //     </div>
  //   );
  // });

  // const events = EVENTCONFIG.map((item: EventProps, index: number) => {
  //   return <Event {...item} ref={refs[item.name]} />;
  // });

  return (
    <BasePage
      selectedItem={NavBarItemEnum.EVENT_INFO}
      mobileSelectedItem={NavBarItemEnum.EVENTS}
      dropdownSelect="events"
    >
      <div className="flex flex-col items-center mb-10">
        <div className="font-coolvetica text-white text-5xl md:text-7xl mt-10 mb-6">
          Events
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-2 px-4 md:gap-6 max-w-6xl">
          {EVENTCONFIG.map((event, index) => (
            <Fragment key={event.name}>
              <EventShortcut 
                name={event.name} 
                onClick={() => {
                  refs.current[event.name]?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }} 
              />
              {/* Vertical pipe only visible on Desktop */}
              {index + 1 < EVENTCONFIG.length && (
                <div className="hidden md:block text-white/30 font-inter text-lg">
                  |
                </div>
              )}
            </Fragment>
          ))}
        </div>
        <div className="flex flex-col gap-12 md:gap-20 pt-10 px-4 md:px-[10vw] items-start w-full">
          {events}
        </div>
      </div>
    </BasePage>
  );
};
