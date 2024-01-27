
export enum ScheduleTag {
    ALL,
    COMPETITION,
    EVENT,
    CLUB_ACTIVITY,
}

export interface TagBoxProps {
    tag: ScheduleTag;
}


export const TagBox = (tag: ScheduleTag) => 
{
    let bgColor = "white";
    switch(tag)
    {
        case(ScheduleTag.EVENT):
            bgColor = "[#659470]";
            break;
        case(ScheduleTag.CLUB_ACTIVITY):
            bgColor = "[#FF7F41]";
            break;
            case(ScheduleTag.COMPETITION):
            bgColor = "[#FFC42D]";
            break;
    }

    const words = ScheduleTag[tag].toLowerCase().split('_');
    const prettyName = words.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");

    return (
        <div className={`p-2 rounded-md bg-${bgColor} h-full text-xs md:text-sm align-middle text-center`}>
            {prettyName}
        </div>
    );
}