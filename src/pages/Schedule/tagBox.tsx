import classNames from "classnames";

export enum ScheduleTag {
    ALL,
    EVENT,
    FREE_PLAY,
    PANEL
}

export interface TagBoxProps {
    tag: ScheduleTag;
    deselected?: boolean;
    onClick?: (tag: ScheduleTag) => void;
}


export const TagBox = (props: TagBoxProps) => 
{
    let bgColor = "white";
    if(props.deselected)
    {
        bgColor = "[#2e2f31]";
    }
    else
    {
        switch(props.tag)
        {
            case(ScheduleTag.EVENT):
                bgColor = "[#659470]";
                break;
            case(ScheduleTag.FREE_PLAY):
                bgColor = "[#FF7F41]";
                break;
            case(ScheduleTag.PANEL):
                bgColor = "[#FFC42D]";
                break;
        }
    }

    const words = ScheduleTag[props.tag].toLowerCase().split('_');
    const prettyName = words.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");

    return (
        <div className={classNames(`p-1 md:p-2 rounded-md bg-${bgColor} h-full text-2xs md:text-sm align-middle text-center`, 
        {"line-through" : props.deselected})}
        onClick={() => props.onClick? props.onClick(props.tag) : {}}>
            {prettyName}
        </div>
    );
}