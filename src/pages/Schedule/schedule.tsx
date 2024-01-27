import { Popover } from "@headlessui/react";
import ScheduleItem, { ScheduleItemProps } from "./scheduleItem";
import { ScheduleTag } from "./tagBox";
import { Clock, FunnelSimple } from "@phosphor-icons/react";
import { BrowserView, MobileView } from "react-device-detect";

interface ScheduleProps {
    items: ScheduleItemProps[]
}

export const Schedule = (props: ScheduleProps) => {
    const filterTag = ScheduleTag.EVENT;
    const filterTime = 1300;

    const TimeIsInRange = (time: number, item: ScheduleItemProps) => {
        return item.startTime && item.endTime && time >= item.startTime && time <= item.endTime;
    }

    const itemsList = props.items.map((item: ScheduleItemProps, index: number) => {
        return (TimeIsInRange(filterTime, item) ? 
            ScheduleItem({
            ...item,
        }) : null); 
    });

    // const itemsList = props.items.map((item: ScheduleItemProps, index: number) => {
    //     return (item.tags?.includes(filterTag) ? 
    //         ScheduleItem({
    //         ...item,
    //     }) : null); 
    // });

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-row w-full h-12 justify-end">
                <h1 className="relative font-coolvetica text-white items-center w-full text-center text-4xl md:text-7xl">
                    Schedule
                </h1>
                <MobileView className="absolute">
                    <FilterPopover/>
                </MobileView>
            </div>
            <MobileView className="w-full">
                <hr className="w-full"/>
            </MobileView>
            <BrowserView className="flex flex-row w-full items-end h-8 relative">
                <div className="pr-2 md:pr-8 w-[25%] text-right font-inter font-thin text-md md:text-2xl text-white ">
                    Saturday, March 2, 2024
                </div>
                <div className="flex flex-col flex-grow w-[75%] text-white">
                    <FilterPopover/>
                    <hr className="w-full"/>
                </div>
            </BrowserView>
            {itemsList}
        </div>
    )
}

export default Schedule;

function FilterPopover() {
    return (
      <Popover className="relative flex flex-row justify-end text-white">
        <Popover.Button className={"ui-open:text-[#FFC42D] flex flex-row items-center p-2 gap-2 text-lg md:text-2xl"}>
            <FunnelSimple size={24}/>
            Filter
        </Popover.Button>
  
        <Popover.Panel className="absolute mt-12 rounded-md z-10 bg-[#5A5454] w-screen max-w-xs">
          <div className="flex flex-col gap-2 p-4">
            <div className="flex flex-row gap-2 text-md items-center">
                <Clock size ={24}/>
                Time
                <input className="flex w-20 text-black">
                </input>
                <input className="flex w-20 text-black">
                </input>
            </div>
            <div>
                Type
            </div>
          </div>
          </Popover.Panel>
      </Popover>
    )
  }