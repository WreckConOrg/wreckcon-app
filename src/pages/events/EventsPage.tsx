import { createRef, RefObject } from "react";
import { NavBarItemEnum } from "../../components/navbar/NavBarItem";
import { BasePage } from "../BasePage";
import { Event, EventProps } from "./Event";
import { EVENTCONFIG } from "./EventsConfig";
import { EventShortcut } from "./EventShortcut";
import { isMobile } from "../../utils/BrowserUtils";

export const EventsPage = (): JSX.Element => {
  let refs: { [name: string]: RefObject<HTMLDivElement> } = {};

  const mapEventShortcuts = (events: EventProps[]) => {
    return events.map((event, index) => {
      const ref = createRef<HTMLDivElement>();
      refs[event.name] = ref;
      return (
        <>
          <EventShortcut name={event.name} reference={ref} />
          {index + 1 < events.length && (
            <div className="text-white font-inter text-[3vw] md:text-[1vw]">
              |
            </div>
          )}
        </>
      );
    });
  };

  const numItemsPerLine = isMobile ? 3 : 6;

  const slicedEvents = EVENTCONFIG.reduce<[EventProps[]]>(
    (resultArray, item, index) => {
      const chunkIndex = Math.floor(index / numItemsPerLine);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    },
    [] as unknown as [EventProps[]]
  );

  const eventShortcuts = slicedEvents.map((events, index) => {
    return (
      <div className="flex flex-row gap-[0.5vw] items-center">
        {mapEventShortcuts(events)}
      </div>
    );
  });

  const events = EVENTCONFIG.map((item: EventProps, index: number) => {
    return <Event {...item} ref={refs[item.name]} />;
  });

  return (
    <BasePage
      selectedItem={NavBarItemEnum.EVENT_INFO}
      mobileSelectedItem={NavBarItemEnum.EVENTS}
      dropdownSelect="events"
    >
      <div className="flex flex-col justify-center items-center mb-[3vw]">
        <div className="h-[10vw] md:h-[6vw] font-coolvetica text-white text-[6vw] md:text-[4vw]">
          Events
        </div>
        <div className="flex flex-col gap-[0.5vw] items-center">
          {eventShortcuts}
        </div>
        <div className="flex flex-col gap-[3vw] md:gap-[1.5vw] pt-[3vw] md:pt-[1.5vw] pb-[1.5vw] items-start w-full px-[6vw]">
          {events}
        </div>
      </div>
    </BasePage>
  );
};
