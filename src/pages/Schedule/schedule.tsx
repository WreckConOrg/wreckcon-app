import ScheduleItem, { ScheduleItemProps, ScheduleTag } from "./scheduleItem";

interface ScheduleProps {
    items: ScheduleItemProps[]
}

export const Schedule = (props: ScheduleProps) => {
    const itemsList = props.items.map((item: ScheduleItemProps, index: number) => {
        return ScheduleItem({
            ...item,
        }); 
    });

    return (
        <div className="items-center w-full">
            <h1 className="font-coolvetica text-white text-center text-7xl">
                Schedule
            </h1>
            <div className="flex flex-row items-end h-8 relative">
                <div className="pr-8 w-[30%] text-right font-inter font-thin text-3xl text-white ">
                    Saturday, March 2, 2024
                </div>
                <div className="flex w-[70%] text-white">
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