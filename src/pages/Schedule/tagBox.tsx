import {
  DiceSix,
  Dog,
  DoorOpen,
  FilmStrip,
  GameController,
  Microphone,
  MusicNoteSimple,
  Palette,
  QuestionMark,
  Sparkle,
  Star,
  Trophy,
} from "@phosphor-icons/react";
import classNames from "classnames";
import { isScreenSizeMedium } from "../../utils/BrowserUtils";

export enum ScheduleTag {
  ALL,
  EVENT,
  FREE_PLAY,
  PANEL,
  ANIME,
  TABLETOP,
  GAMING,
  DANCE,
  ARTS_AND_CRAFTS,
  MUSIC,
  TRIVIA,
  TOURNAMENT,
}

export interface TagBoxProps {
  tag: ScheduleTag;
  deselected?: boolean;
  onClick?: (tag: ScheduleTag) => void;
  classNames?: string;
}

export const TagBox = (props: TagBoxProps) => {
  const bgColorDict: Record<ScheduleTag, string> = {
    [ScheduleTag.ALL]: "bg-[#FFFFFF]",
    [ScheduleTag.EVENT]: "bg-[#659470]",
    [ScheduleTag.FREE_PLAY]: "bg-[#659470]",
    [ScheduleTag.PANEL]: "bg-[#FFC42D]",
    [ScheduleTag.ANIME]: "bg-[#64A2FF]",
    [ScheduleTag.TABLETOP]: "bg-[#A880FF]",
    [ScheduleTag.GAMING]: "bg-[#FF7F41]",
    [ScheduleTag.DANCE]: "bg-[#64A2FF]",
    [ScheduleTag.ARTS_AND_CRAFTS]: "bg-[#FF7F41]",
    [ScheduleTag.MUSIC]: "bg-[#F04924]",
    [ScheduleTag.TRIVIA]: "bg-[#F04924]",
    [ScheduleTag.TOURNAMENT]: "bg-[#FFC42D]",
  };

  const iconDict: Record<ScheduleTag, JSX.Element> = {
    [ScheduleTag.ALL]: (
      <Dog className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
    ),
    [ScheduleTag.EVENT]: (
      <Star className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
    ),
    [ScheduleTag.FREE_PLAY]: (
      <DoorOpen className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
    ),
    [ScheduleTag.PANEL]: (
      <Microphone className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
    ),
    [ScheduleTag.ANIME]: (
      <FilmStrip className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
    ),
    [ScheduleTag.TABLETOP]: (
      <DiceSix className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
    ),
    [ScheduleTag.GAMING]: (
      <GameController className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
    ),
    [ScheduleTag.DANCE]: (
      <Sparkle className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
    ),
    [ScheduleTag.ARTS_AND_CRAFTS]: (
      <Palette className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
    ),
    [ScheduleTag.MUSIC]: (
      <MusicNoteSimple className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
    ),
    [ScheduleTag.TRIVIA]: (
      <QuestionMark className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
    ),
    [ScheduleTag.TOURNAMENT]: (
      <Trophy className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
    ),
  };

  const words = ScheduleTag[props.tag].toLowerCase().split("_");
  const prettyName = words
    .map((word) => {
      return word !== "and" ? word[0].toUpperCase() + word.substring(1) : "&";
    })
    .join(" ");

  return (
    <div
      className={classNames(
        `p-1 md:p-2 rounded-md place-items-center flex text-black text-xs md:text-sm whitespace-nowrap shrink-0 inline-flex w-auto text-center gap-1`,
        { "opacity-50": props.deselected },
        bgColorDict[props.tag],
        props.classNames
      )}
      onClick={() => (props.onClick ? props.onClick(props.tag) : {})}
    >
      {iconDict[props.tag]}
      {prettyName}
    </div>
  );
};
