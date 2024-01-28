import { Listbox, Popover } from "@headlessui/react";
import ScheduleItem, { ScheduleItemProps } from "./scheduleItem";
import { ScheduleTag } from "./tagBox";
import { Clock, FunnelSimple } from "@phosphor-icons/react";
import { BrowserView, MobileView } from "react-device-detect";
import { useState } from "react";

interface ScheduleProps {
    items: ScheduleItemProps[]
}

export const Schedule = (props: ScheduleProps) => {
    const filterTag = ScheduleTag.EVENT;
    const filterTimeStart = 1300;
    const [selectedStartTime, setSelectedStartTime] = useState(1100)
    const [selectedEndTime, setSelectedEndTime] = useState(2200)

    function foo(t: number)
    {
        console.log(t);
        setSelectedStartTime(t);
    }


    const TimeIsInRange = (item: ScheduleItemProps) => {
       return item.startTime < selectedEndTime && item.endTime > selectedStartTime;
        // return item.startTime && item.endTime && time >= item.startTime && time <= item.endTime;
    }

    const itemsList = props.items.map((item: ScheduleItemProps, index: number) => {
        return (TimeIsInRange(item) ? 
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
                    <FilterPopover 
                            OnSelectStartTime={foo} 
                            OnSelectEndTime={setSelectedEndTime}
                            startTime={selectedStartTime} 
                            endTime={selectedEndTime}
                        />
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
                    <FilterPopover 
                        OnSelectStartTime={setSelectedStartTime} 
                        OnSelectEndTime={setSelectedEndTime}
                        startTime={selectedStartTime} 
                        endTime={selectedEndTime}
                    />
                    <hr className="w-full"/>
                </div>
            </BrowserView>
            {itemsList}
        </div>
    )
}

export default Schedule;
interface FilterProps {
    OnSelectStartTime: (t: number) => void;
    OnSelectEndTime: (t: number) => void;
    startTime: number;
    endTime: number;

}

function FilterPopover(props:FilterProps) {
    return (
      <Popover className="relative flex flex-row justify-end text-white">
        <Popover.Button className={"ui-open:text-[#FFC42D] flex flex-row items-center p-2 gap-2 text-lg md:text-2xl"}>
            <FunnelSimple size={24}/>
            Filter
        </Popover.Button>
  
        <Popover.Panel className="absolute mt-12 rounded-md z-10 bg-[#5A5454]">
          <div className="flex flex-col gap-2 p-4">
            <div className="flex flex-row gap-1 text-md items-center">
                <Clock size ={24}/>
                Time
                <div className="w-2"/>
                {TimeSelect(props.OnSelectStartTime, props.startTime, 0, props.endTime)}
                -
                {TimeSelect(props.OnSelectEndTime, props.endTime, props.startTime, 0)}
                {/* <input className="ml-2 flex w-12 text-white p-1 text-xs rounded-md bg-[#2e2f31]" 
                maxLength={4}>
                </input>
                -
                <input className="flex w-12 text-white p-1 text-xs rounded-md bg-[#2e2f31]" 
                maxLength={4}>
                </input> */}
            </div>
            <div>
                Type
            </div>
          </div>
          </Popover.Panel>
      </Popover>
    )
  }

  function TimeSelect(onSelect: (t: number) => void, time: number, mintime?: number, maxtime?: number)
  {
    const TimeToString = (time: number) =>
    {
        let h = (time < 1300 ? time : time % 1200).toString().slice(0, -2);
        let m = time.toString().slice(-2);
        let s = time >= 1200 ? "pm" : "am";
        return `${h}:${m}${s}`;
    }

    const times = [
        1000,
        1100,
        1200,
        1300,
        1400,
        1500,
        1600,
        1700,
        1800,
        1900,
        2000,
        2100,
        2200,
      ]

    const filteredTimes = times.filter((t: number) => {
        return (!mintime || t > mintime) && (!maxtime || t < maxtime);
    })
    
    //const [selectedTime, setSelectedTime] = useState(defaultTime ?? times[0])

    return (
        <Listbox value={time} onChange={onSelect} as = "div" className={"justfy-end"}>
        <Listbox.Button className={"bg-[#2e2f31] p-2 rounded-md relative w-20"}>
            {TimeToString(time)}
        </Listbox.Button>
        <Listbox.Options className={"absolute w-20 py-2 rounded-md bg-[#D9D9D9]"}>
            {filteredTimes.map((time) => (
            <Listbox.Option
            value={time}
            className={"bg-[#D9D9D9] w-16 text-center text-black ml-2 rounded-md py-1 ui-selected:text-white ui-selected:bg-[#2e2f31]"}
            >
                {TimeToString(time)}
            </Listbox.Option>
            ))}
        </Listbox.Options>
        </Listbox>
    )
  }