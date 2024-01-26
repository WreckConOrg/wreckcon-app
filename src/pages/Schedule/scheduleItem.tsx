import React from "react";
import { Disclosure } from '@headlessui/react'
import { CaretDown, CaretUp, Carrot, MapPinLine } from "@phosphor-icons/react";
import classNames from "classnames";

export interface ScheduleItemProps {
    name: string;
    time: string;
    location: string;
    description: string;
    tags?: ScheduleTag[];
    top?: boolean;
}

export enum ScheduleTag {
    ALL,
    COMPETITION,
    EVENT,
    CLUB_ACTIVITY,
}


function ScheduleItem(props: ScheduleItemProps) {

    return (
        <div className="flex flex-row w-full">
            <div className="p-8 w-[30%] text-right font-inter font-thin text-2xl text-white">
                <text>
                    {props.time}
                </text>
            </div>
            <div className="flex w-[70%]">
            <Disclosure as = "div" className={"w-full"}>
            {({ open }) => (
                <>
                <div className={
                    classNames({"bg-[#5A5454]" : open},
                    {"pt-4": props.top},
                    {"pt-8" : !props.top},
                    "px-8 pb-8")}>
                    <Disclosure.Button className ={classNames(
                        {"bg-[#5A5454]" : open},
                        "flex flex-col w-full font-inter font-thin text-2xl text-white gap-4")}>
                        <div className="w-full flex justify-between flex-row=">
                            {props.name}
                            <CaretDown
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-8 w-8 text-white justify-end`}
                            />
                        </div>
                        <div className="flex flex-row items-center pl-4 gap-2 font-inter font-thin text-lg text-white">
                            <MapPinLine className="color-white" size={24} />
                            {props.location}
                        </div>
                        </Disclosure.Button>
                        <Disclosure.Panel as = "div" className="font-inter font-thin text-m text-white bg-[#5A5454] pl-4 pt-4">
                            {props.description}
                        </Disclosure.Panel>
                </div>
                <hr/>
                </>
                      )}
            </Disclosure>
            </div>
        </div>
    )
}

export default ScheduleItem;