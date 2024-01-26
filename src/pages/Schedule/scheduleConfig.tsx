import { ScheduleItemProps, ScheduleTag } from "./scheduleItem";

export const SCHEDULECONFIG: ScheduleItemProps[] = [
    {
        name: "Opening Ceremony",
        time: "10:00am-11:00am",
        location: "Main Stage",
        description: "WreckCon is a student culture convention held at Georgia Tech (Main Atlanta Campus), fully organized and run by Georgia Tech students. Starting in 2022, the Dungeons & Dragons and Magic: the Gathering clubs ran a small convention with events such as open play and tournaments. Realizing that the major potential for a convention at Tech, we began reaching out to other clubs to make the event a celebration of student culture here at Tech, following in the footsteps of previous events such as Techwood Con. We're envisioning an event that showcases the best of what people at Georgia Tech have to offer, built by Tech, for Tech. Go jackets!"
    },
    {
        name: "VGDev Arcade",
        time: "10:00am-10:00pm",
        location: "Upstairs",
        description: "Slide pieces of the world to solve puzzles and help others. Control an ever-growing set of tiles and mechanics. Explore nine unique areas, unravel the mysteries of the universe, and reconnect the world -- one slider at a time.",
        tags: [ScheduleTag.CLUB_ACTIVITY]
    },
    {
        name: "Dance Hour",
        time: "12:00pm-1:00pm",
        location: "Main Stage",
        description: "lorom ipsum dolar",
        tags: [ScheduleTag.EVENT]
    },
]
