import React, { RefObject } from "react";

export interface EventShortcutProps {
  name: string;
  reference: RefObject<HTMLElement>;
}

export const EventShortcut = (props: EventShortcutProps) => {
  return (
    <div
      className="font-inner text-[3vw] md:text-[1.5vw] text-white hover:underline cursor-pointer"
      onClick={() => {
        props.reference.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
    >
      {props.name}
    </div>
  );
};
