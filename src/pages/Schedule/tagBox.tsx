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
      <Dog size={isScreenSizeMedium ? 20 : 14} className="shrink-0" />
    ),
    [ScheduleTag.EVENT]: (
      <Star size={isScreenSizeMedium ? 20 : 14} className="shrink-0" />
    ),
    [ScheduleTag.FREE_PLAY]: (
      <DoorOpen size={isScreenSizeMedium ? 20 : 14} className="shrink-0" />
    ),
    [ScheduleTag.PANEL]: (
      <Microphone size={isScreenSizeMedium ? 20 : 14} className="shrink-0" />
    ),
    [ScheduleTag.ANIME]: (
      <FilmStrip size={isScreenSizeMedium ? 20 : 14} className="shrink-0" />
    ),
    [ScheduleTag.TABLETOP]: (
      <DiceSix size={isScreenSizeMedium ? 20 : 14} className="shrink-0" />
    ),
    [ScheduleTag.GAMING]: (
      <GameController
        size={isScreenSizeMedium ? 20 : 14}
        className="shrink-0"
      />
    ),
    [ScheduleTag.DANCE]: (
      <Sparkle size={isScreenSizeMedium ? 20 : 14} className="shrink-0" />
    ),
    [ScheduleTag.ARTS_AND_CRAFTS]: (
      <Palette size={isScreenSizeMedium ? 20 : 14} className="shrink-0" />
    ),
    [ScheduleTag.MUSIC]: (
      <MusicNoteSimple
        size={isScreenSizeMedium ? 20 : 14}
        className="shrink-0"
      />
    ),
    [ScheduleTag.TRIVIA]: (
      <QuestionMark size={isScreenSizeMedium ? 20 : 14} className="shrink-0" />
    ),
    [ScheduleTag.TOURNAMENT]: (
      <Trophy size={isScreenSizeMedium ? 20 : 14} className="shrink-0" />
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
        `p-1 md:p-2 rounded-md place-items-center m-auto flex text-black text-xs md:text-sm justify-center shrink-1 w-auto text-center gap-1`,
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
