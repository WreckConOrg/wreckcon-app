import Schedule from "./schedule";
import { ScheduleItemProps } from "./scheduleItem";
import { ScheduleTag } from "./tagBox";

export const SCHEDULECONFIG: ScheduleItemProps[] = [
    {
        name: "Opening Ceremony",
        time: "10:30am-11:00am",
        location: "Main Stage",
        description: "The WreckCon Opening Ceremony.",
        tags: [ScheduleTag.EVENT],
        startTime: 1030,
        endTime: 1100,
    },
    {
        name: "Smash Competition Open",
        time: "10:30am-10:40am",
        location: "Instructional Center",
        description: "Registration and opening for the Smash tournament at WreckCon.",
        tags: [ScheduleTag.EVENT],
        startTime: 1030,
        endTime: 1040,
    },

    // {
    //     name: "Indie Gaming Panel",
    //     time: "11:30am-12:30pm",
    //     location: "Main Stage",
    //     description: "A panel of indie game-developers at WreckCon.",
    //     tags: [ScheduleTag.EVENT, ScheduleTag.PANEL],
    //     startTime: 1130,
    //     endTime: 1230
    // },
    {
        name: "Panel: Anime for the Female Gaze!",
        time: "11:30am-12:00pm",
        location: "Home Park",
        description: "Come and learn about how the female gaze is reshaping anime. We will talk fan service, feminist film theory, and recommendations! Find the panelist at @dekucam on Instagram or TikTok.",
        tags: [ScheduleTag.PANEL],
        startTime: 1130,
        endTime: 1200
    },
    {
        name: "Smash Tournament Wave A",
        time: "12:00pm-1:30pm",
        location: "Instructional Center",
        description: "Wave A for the WreckCon Smash Tournament.",
        tags: [ScheduleTag.EVENT],
        startTime: 1200,
        endTime: 1330
    },
    {
        name: "Panel: Genshin Impact: Mind, Mythos, and Memory",
        time: "12:00pm-1:00pm",
        location: "Home Park",
        description: "Prepare to embark on a journey through Teyvat like no other with our Genshin Impact trivia panel. Get ready to unleash your inner visionary and compete for exclusive prizes, all while celebrating the elemental wonders of Teyvat! Find the panelist at @aquaholic_cosplay on Instagram.",
        tags: [ScheduleTag.PANEL],
        startTime: 1200,
        endTime: 1300
    },
    {
        name: "Panel: We've All Been Punk'd",
        time: "1:00pm-2:00pm",
        location: "Home Park",
        description: "What exactly are \"-punk\" genres? Where do they come from, what do they focus on... and why are there SO many of them now? A detailed look at the history of a fascinating lineage of contemporary genres, \"We've All Been Punk'd\" aims to answer these questions and more. Presented by Val Barnhart, senior LMC major and member of the GT Sci-Fi Lab. Find the panelist at @val_bee_03 on Instagram.",
        tags: [ScheduleTag.PANEL],
        startTime: 1300,
        endTime: 1400
    },
    {
        name: "Smash Tournament Wave B",
        time: "1:30pm-3:00pm",
        location: "Instructional Center",
        description: "Wave B of the WreckCon Smash Tournament.",
        tags: [ScheduleTag.EVENT],
        startTime: 1330,
        endTime: 1500
    },
    {
        name: "Riot Games Panel",
        time: "2:00pm-3:00pm",
        location: "Main Stage",
        description: "A panel of several Riot Games designers and developers at WreckCon.",
        tags: [ScheduleTag.EVENT, ScheduleTag.PANEL],
        startTime: 1400,
        endTime: 1500
    },
    {
        name: "Panel: Did the Disney Channel Original Movies age well?",
        time: "2:00pm-3:00pm",
        location: "Home Park",
        description: "The panelist will be going through multiple disney channel films with the audience and explaining which ones still hold up and which ones do not. Find the panelist at @harriyanna.",
        tags: [ScheduleTag.PANEL],
        startTime: 1400,
        endTime: 1500
    },
    {
        name: "Smash Tournament Top 32",
        time: "3:00pm-5:30pm",
        location: "Instructional Center",
        description: "The Top 32 of the WreckCon Smash Tournament!",
        tags: [ScheduleTag.EVENT],
        startTime: 1500,
        endTime: 1730
    },
    {
        name: "Pokemon Club Presents: Who's That Pokemon?",
        time: "3:00pm-4:00pm",
        location: "Main Stage",
        description: "The Pokemon Club presents Who's That Pokemon at WreckCon.",
        tags: [ScheduleTag.EVENT],
        startTime: 1500,
        endTime: 1600
    },
    {
        name: "Panel: So You Want to Make a Cosplay?!",
        time: "3:00pm-4:00pm",
        location: "Home Park",
        description: "Join us to learn the ins and outs of hand making your first cosplay, from choosing the costume to actually assembling it! Find the panelist at @FoxArcada.",
        tags: [ScheduleTag.PANEL],
        startTime: 1500,
        endTime: 1600
    },
    {
        name: "Anime Club Presents: Cosplay Contest",
        time: "4:00pm-6:00pm",
        location: "Main Stage",
        description: "Anime Club presents the WrekCon Cosplay Contest.",
        tags: [ScheduleTag.EVENT],
        startTime: 1600,
        endTime: 1800
    },
    {
        name: "Smash Tournament Top 8!",
        time: "5:30pm-9:00pm",
        location: "Instructional Center",
        description: "The Final 8 of the WreckCon Smash Tournament. After a fierce competition, who will remain at the top?",
        tags: [ScheduleTag.EVENT],
        startTime: 1730,
        endTime: 2100
    },
    {
        name: "Panel: Beginner Programming with Sensei (Python 101)",
        time: "6:00pm-7:00pm",
        location: "Home Park",
        description: "Come learn beginning programming with your own personal sensei! Your sensei will go over the basics of computer programming using a widely known programming language called Python! Feel free to bring a laptop and follow along.",
        tags: [ScheduleTag.PANEL],
        startTime: 1800,
        endTime: 1900
    },
    {
        name: "Idolfest Concert",
        time: "7:00pm-8:30pm",
        location: "Main Stage",
        description: "BubbleStarL!ve will be hosting an IdolFest that people can come and watch. We will be inviting other idol groups and solo idols to participate in this event along with us!",
        tags: [ScheduleTag.EVENT],
        startTime: 1900,
        endTime: 2030
    },
    {
        name: "Panel: Slide into Our DMs",
        time: "7:00pm-8:30pm",
        location: "Home Park",
        description: "Tips, Tricks, Guidance for new or continuing TTRPG game masters. The panel will be focusing on Dungeons and Dragons 5th edition, but most guidance is applicable to similar systems. We plan on doing a panel on designing combat encounters. Find the Dungeons and Dragons Club at @gt.dnd on Instagram",
        tags: [ScheduleTag.PANEL],
        startTime: 1900,
        endTime: 2030
    },
    {
        name: "Dungeons and Dragons Free Play",
        time: "11:00am-9:00pm",
        location: "Kirkwood",
        description: "Join the GT D&D Club for all day tabletop RPG games, no experience required!",
        tags: [ScheduleTag.FREE_PLAY],
        startTime: 1100,
        endTime: 2100
    },
    {
        name: "Panel: Star Wars: Rewrite",
        time: "8:30pm-10:00pm",
        location: "Home Park",
        description: "If you could change any ending, scence, major death ect in any media, what would you change and why? Find the panelist at @spaceboy_78 on Instagram.",
        tags: [ScheduleTag.PANEL],
        startTime: 2030,
        endTime: 2200
    },
    {
        name: "The WreckCon Trivia Gameshow!",
        time: "8:30pm-9:30pm",
        location: "Main Stage",
        description: "A trivia gameshow involving many of the clubs involved at WreckCon, held on the main stage!",
        tags: [ScheduleTag.EVENT],
        startTime: 2030,
        endTime: 2130
    },
    {
        name: "VGDev Arcade",
        time: "10:00am-10:00pm",
        location: "Buckhead",
        description: "Come to the VGDev Arcade to play through multiple student developed games, all day at WreckCon!",
        tags: [ScheduleTag.FREE_PLAY],
        startTime: 1000,
        endTime: 2200,
    },
    {
        name: "Magic: The Gathering, YuGiOh, and Pokemon Free Play",
        time: "10:00am-10:00pm",
        location: "Centennial",
        description: "Come on over for all day Magic: The Gathering, YuGiOh, and Pokemon free play!",
        tags: [ScheduleTag.FREE_PLAY],
        startTime: 1000,
        endTime: 2200
    },
    {
        name: "Board Game Club Free Play",
        time: "10:00am-10:00pm",
        location: "Old Fourth Ward + Sweet Auburn",
        description: "Join Board Game club to play a variety of games all throughout the day.",
        tags: [ScheduleTag.FREE_PLAY],
        startTime: 1000,
        endTime: 2200
    },
    {
        name: "Warhammer Free Play",
        time: "10:00am-10:00pm",
        location: "Inman Park",
        description: "Join Warhammer Club for totally free Warhammer play in Inman Park!",
        tags: [ScheduleTag.FREE_PLAY],
        startTime: 1000,
        endTime: 2200
    },
    {
        name: "Closing Ceremony",
        time: "9:30pm-10:00pm",
        location: "Main Stage",
        description: "The WreckCon Closing Ceremony.",
        tags: [ScheduleTag.EVENT],
        startTime: 2130,
        endTime: 2200
    },
]
