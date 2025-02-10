import classNames from "classnames";

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
}

export interface TagBoxProps {
  tag: ScheduleTag;
  deselected?: boolean;
  onClick?: (tag: ScheduleTag) => void;
}

export const TagBox = (props: TagBoxProps) => {
  let bgColor = "#FF6666";
  if (props.deselected) {
    bgColor = "#2e2f31";
  } else {
    switch (props.tag) {
      case ScheduleTag.EVENT:
        bgColor = "#659470";
        break;
      case ScheduleTag.FREE_PLAY:
        bgColor = "#FF7F41";
        break;
      case ScheduleTag.PANEL:
        bgColor = "#FFC42D";
        break;
      case ScheduleTag.ANIME:
        bgColor = "#659470";
        break;
      case ScheduleTag.TABLETOP:
        bgColor = "#FFC42D";
        break;
      case ScheduleTag.GAMING:
        bgColor = "#FF7F41";
        break;
    }
  }

  const words = ScheduleTag[props.tag].toLowerCase().split("_");
  const prettyName = words
    .map((word) => {
      return word !== "and" ? word[0].toUpperCase() + word.substring(1) : "and";
    })
    .join(" ");

  return (
    <div
      className={classNames(
        `p-1 md:p-2 rounded-md place-items-center m-auto flex text-black text-2xs md:text-sm justify-center shrink-1 text-center`,
        { "line-through": props.deselected }
      )}
      style={{ backgroundColor: bgColor }}
      onClick={() => (props.onClick ? props.onClick(props.tag) : {})}
    >
      {prettyName}
    </div>
  );
};
