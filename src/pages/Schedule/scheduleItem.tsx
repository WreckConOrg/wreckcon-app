import React from "react";
import { Disclosure } from '@headlessui/react'
import { CaretDown, CaretUp, Carrot, MapPinLine } from "@phosphor-icons/react";
import classNames from "classnames";
import { ScheduleTag, TagBox } from "./tagBox";
import { BrowserView, MobileView } from "react-device-detect";

export interface ScheduleItemProps {
    name: string;
    time: string;
    location: string;
    description: string;
    tags: ScheduleTag[];
    top?: boolean;
    startTime: number;
    endTime: number;
}

function ScheduleItem(props: ScheduleItemProps) {

    const TimeToString = (time: number) =>
    {
        let h = (time < 1300 ? time : time % 1200).toString().slice(0, -2);
        let m = time.toString().slice(-2);
        let s = time >= 1200 ? "pm" : "am";
        return `${h}:${m}${s}`;
    }

    const TagList = props.tags?.map((tag:ScheduleTag) => {
        return TagBox({tag});
    })

    return (
        <div className="flex flex-row w-full">
            <div className="p-2 md:p-8 w-[25%] text-right font-inter font-thin text-m md:text-xl text-white">
                <text>
                    {`${TimeToString(props.startTime)}-${TimeToString(props.endTime)}`}
                </text>
            </div>
            <div className="flex w-[75%]">
            <Disclosure as = "div" className={"w-full"}>
            {({ open }) => (
                <>
                <div className={
                    classNames({"bg-[#5A5454]" : open})}>
                    <Disclosure.Button className ={classNames(
                        {"bg-[#5A5454]" : open},
                        "flex flex-col w-full font-inter font-thin text-white gap-2 md:gap-4 p-4 md:p-8")}>
                        <div className="w-full flex justify-between flex-row text-lg md:text-2xl">
                            <div className="flex flex-row gap-2 align-center">
                                {props.name}
                                <BrowserView className="flex flex-row gap-2">
                                    {TagList}
                                </BrowserView>
                            </div>
                            <CaretDown
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-4 w-4 md:h-8 md:w-8 text-white justify-end`}
                            />
                        </div>
                        <MobileView className="flex flex-row gap-2">
                            {TagList}
                        </MobileView>
                        <div className="flex flex-row items-center pl-2 md:pl-4 gap-1 md:gap-2 font-inter font-thin text-m md:text-lg text-white">
                            <MapPinLine className="color-white" size={24} />
                            {props.location}
                        </div>
                        <Disclosure.Panel as = "div" className="font-inter font-thin text-sm md:text-lg text-left text-white bg-[#5A5454] pl-2 md:pl-4">
                            {props.description}
                        </Disclosure.Panel>
                        </Disclosure.Button>
                        
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