import { Listbox, Popover } from "@headlessui/react";
import ScheduleItem, { ScheduleItemProps } from "./scheduleItem";
import { ScheduleTag, TagBox } from "./tagBox";
import { ArrowCounterClockwise, Clock, FunnelSimple, Hammer, Tag } from "@phosphor-icons/react";
import { BrowserView, MobileView } from "react-device-detect";
import { useState } from "react";

interface ScheduleProps {
    items: ScheduleItemProps[]
}

export const Schedule = (props: ScheduleProps) => {
    const tags = [
        ScheduleTag.CLUB_ACTIVITY,
        ScheduleTag.COMPETITION,
        ScheduleTag.EVENT,
        ScheduleTag.CLUB_ACTIVITY,
        ScheduleTag.COMPETITION,
        ScheduleTag.EVENT,
        ScheduleTag.CLUB_ACTIVITY,
        ScheduleTag.COMPETITION,
        ScheduleTag.EVENT,
    ]

    const [selectedStartTime, setSelectedStartTime] = useState(1000)
    const [selectedEndTime, setSelectedEndTime] = useState(2200)
    const [selectedTags, setSelectedTags] = useState(tags)


    const TagIsIncluded = (item: ScheduleItemProps) => {
        return selectedTags.some((t) => item.tags.includes(t));
    }

    const ResetTags = () => {
        setSelectedTags(tags);
    }

    const AddTag = (tag:ScheduleTag) => {
        setSelectedTags(selectedTags.concat(tag));
    }

    const RemoveTag = (tag:ScheduleTag) => {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
    }

    const ToggleTag = (tag: ScheduleTag) => {
        if(selectedTags.includes(tag))
        {
            RemoveTag(tag);
        }
        else
        {
            AddTag(tag);
        }
    }

    const TagList = tags?.map((tag:ScheduleTag) => {
        const deselected = !selectedTags.includes(tag);
        return TagBox({
            tag, deselected,
            onClick: (tag: ScheduleTag) => {
                ToggleTag(tag);
            }
        });
    })

    const TimeIsInRange = (item: ScheduleItemProps) => {
       return item.startTime < selectedEndTime && item.endTime > selectedStartTime;
    }

    const itemsList = props.items.map((item: ScheduleItemProps, index: number) => {
        return (TimeIsInRange(item) && TagIsIncluded(item) ? 
            ScheduleItem({
            ...item,
        }) : null); 
    });

    const scheduleContent = itemsList.filter((i) => i != null).length > 0 ? itemsList : 
    (<div className="flex flex-col items-center gap-4 text-center text-white pt-4 text-lg">
        <Hammer size = {32}/>
        No results found. Please adjust filter parameters.
    </div>)

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-row w-full h-12 justify-end">
                <h1 className="relative font-coolvetica text-white items-center w-full text-center text-4xl md:text-7xl">
                    Schedule
                </h1>
                <div className="absolute md:mt-4">
                    <FilterPopover 
                            OnSelectStartTime={setSelectedStartTime} 
                            OnSelectEndTime={setSelectedEndTime}
                            startTime={selectedStartTime} 
                            endTime={selectedEndTime}
                            tagList={TagList}
                            ResetTags={ResetTags}
                        />
                </div>
            </div>
            <MobileView className="w-full">
                <hr className="w-full"/>
            </MobileView>
            <BrowserView className="flex flex-row w-full items-end h-8 relative">
                <div className="pr-2 md:pr-8 w-[25%] text-right font-inter font-thin text-md md:text-2xl text-white ">
                    Saturday, March 2, 2024
                </div>
                <hr className="w-[75%]"/>
            </BrowserView>
            {scheduleContent}
        </div>
    )
}

export default Schedule;
interface FilterProps {
    OnSelectStartTime: (t: number) => void;
    OnSelectEndTime: (t: number) => void;
    startTime: number;
    endTime: number;
    tagList: JSX.Element[];
    ResetTags: () => void;
}

function FilterPopover(props:FilterProps) {
    return (
      <Popover className="relative flex flex-row w-full justify-end text-white">
        <Popover.Button className={"ui-open:text-[#FFC42D] bg-[#2e2f31] flex flex-row items-center p-2 gap-2 text-lg md:text-2xl"}>
            <FunnelSimple size={24}/>
            Filter
        </Popover.Button>
  
        <Popover.Panel className="absolute mt-12 md:mt-20 rounded-md z-10 bg-[#5A5454]">
          <div className="flex flex-col w-[calc(100vw-3rem)] md:max-w-md gap-2 p-4">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-1 text-md items-center">
                    <Clock size ={24}/>
                    Time
                    <div className="w-2"/>
                    {TimeSelect(props.OnSelectStartTime, props.startTime, 0, props.endTime)}
                    -
                    {TimeSelect(props.OnSelectEndTime, props.endTime, props.startTime, 0)}
                </div>
                
                <ArrowCounterClockwise size={24} onClick={() => {
                    props.OnSelectStartTime(1000);
                    props.OnSelectEndTime(2200);
                }} />
            </div>
            <hr className="w=full"/>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-1 text-md items-center">
                    <Tag size ={24}/>
                    Tags
                    <div className="w-3"/>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {props.tagList}
                    </div>
                </div>
                <ArrowCounterClockwise size={24} onClick={() => {
                    props.ResetTags();
                }} />
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