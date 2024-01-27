import ScheduleFliter from "./scheduleFilter";
import ScheduleItem, { ScheduleItemProps } from "./scheduleItem";
import { ScheduleTag } from "./tagBox";

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
        <div className="items-center w-full">
            <h1 className="font-coolvetica text-white text-center text-4xl md:text-7xl">
                Schedule
            </h1>
            <div className="flex flex-row items-end h-8 relative">
                <div className="pr-2 md:pr-8 w-[25%] text-right font-inter font-thin text-l md:text-2xl text-white ">
                    Saturday, March 2, 2024
                </div>
                <div className="flex w-[75%] text-white">
                    <hr className="w-full"/>
                </div>
            </div>
            {itemsList}
        </div>
    )
}

export default Schedule;

interface TagProps{
    name: string;
    color: string;
}

export const Tag = (props: TagProps) => {
    return(
        <div>

        </div>
    )
}