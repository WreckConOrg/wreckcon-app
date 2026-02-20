// import React, { RefObject } from "react";

// export interface EventShortcutProps {
//   name: string;
//   reference: RefObject<HTMLElement>;
// }

// export const EventShortcut = (props: EventShortcutProps) => {
//   return (
//     <div
//       className={`inline-flex items-center justify-center px-4 py-2 bg-white/10 rounded-full border border-white/20 text-sm font-inter text-white
//       md:bg-transparent md:border-none md:p-0 md:rounded-none md:text-lg lg:text-xl md:hover:underline
//       `}
//       onClick={() => {
//         props.reference.current?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }}
//     >
//       {props.name}
//     </div>
//   );
// };

export interface EventShortcutProps {
  name: string;
  onClick: () => void;
}

export const EventShortcut = (props: EventShortcutProps) => {
  return (
    <button
      className={`
        inline-flex items-center px-4 py-2 
        bg-white/10 border border-white 
        text-xs font-inter text-white
        active:scale-95 active:bg-white/20

        md:bg-transparent md:border-none md:p-0 md:rounded-none 
        md:text-lg lg:text-xl md:hover:underline md:hover:text-[#FFC42D]
      `}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};