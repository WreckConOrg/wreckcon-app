import { Listbox } from "@headlessui/react";
import React  from "react";
import { Fragment, useState } from 'react'
import { ScheduleTag, TagBox } from "./tagBox";

const tags = [
    ScheduleTag.ALL,
    ScheduleTag.CLUB_ACTIVITY,
    ScheduleTag.COMPETITION,
    ScheduleTag.EVENT,
  ]

export const ScheduleFliter = () => {
    const [selectedTags, setSelectedTags] = useState(tags)

    return (
        <div className="items-center w-full text-white justify-end flex flex-row p-2 h-10">
            {TagBox(ScheduleTag.CLUB_ACTIVITY)}
        </div>
    )
}

export default ScheduleFliter;

