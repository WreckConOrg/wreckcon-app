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
        tags: [ScheduleTag.EVENT, ScheduleTag.GAMING],
        startTime: 1030,
        endTime: 1040,
    },
    {
        name: "Indie Gaming Panel",
        time: "11:30am-12:30pm",
        location: "Main Stage",
        description: "Join a group of local game developers as they explore the many difficulties of independent development and how to transform game development hobbies to careers.",
        tags: [ScheduleTag.EVENT, ScheduleTag.PANEL, ScheduleTag.GAMING],
        startTime: 1130,
        endTime: 1230
    },
    {
        name: "Dungeons & Dragons Free Play Block 1",
        time: "11:00am-4:00pm",
        location: "Ex Hall Floor 2: Kirkwood",
        description: "",
        testDesc: 
        <div>
            <div>
                Come join GTD&D Club, as well as the UGA D&D Club and the Pathfinder Society for some tabletop free play! 
                Games will be divided into two blocks, one from 11am-4pm and the other from 4pm-9pm. The games being run during <b className="font-bold">block one</b> are:
            </div>
            <br/>
            <div className="font-bold">
                Game 1: Run by Boo Fullwood from GTD&D and Pathfinder Society
            </div>
            <br/>
            <div>
                System: Pathfinder 2e
                <br/> <br/>
                Description: After the volcano Droskar's Crag erupted over 700 years ago, destroying many nearby cities in a cataclysm that would come to be known as the Rending, the dwarven empire of Tar Khadurrn fractured and eventually collapsed. Recently, a group of prospectors discovered a mountainside entrance to what they believe to be a sprawling dwarven complex, but they retreated from the dangers they found within. They have reported their discovery to the Pathfinder Society's lodge in Ulfden, and the Society is preparing to dispatch a group of agents to enter the mountain and learn what they can about the ruins within.
                <br/> <br/>
                Contact: @voortya on Discord, and walk-ups are welcome!
                <br/> <br/>
                Note: Pathfinder society credit will be avaliable for interested players.
            </div>
            <br/>
            <div className="font-bold">
                Game 2: Run by Ethan Radulski from GTD&D
            </div>
            <br/>
            <div>
                System: D&D 5e
                <br/> <br/>
                Description: All you need to know is one thing, GOLD. Living, walking creatures made of pure gold have been reported to be seen near the Darkwood. We don't know where they came from, but prospectors have been quick to hire adventurer body guards and venture out to find their fortunes. You will play as one such hired adventurer to protect a small team of prospectors from their greed. Good luck!
                <br/> <br/>
                Contact: Only walk-up players will be taken!
            </div>
            <br/>
            <div className="font-bold">
                Game 3: Run by Vicky Celedon from GTD&D
            </div>
            <br/>
            <div>
                System: D&D 5e
                <br/> <br/>
                Description: Congratulations! All of you were randomly selected to view the newly discovered artwork of Álio Fran, one of the most well known artists in this world who recently went missing. A bubbly museum curator gives you a tour of the exhibit before the rest of the public, but things go awry very quickly, and you find yourselves in a mysterious verdant landscape, not unlike the ones Álio would paint. You must discover where on the planet (?) you are, find you way back to the museum, and in the process unravel the mystery behind the disappearance of the great artist. This one-shot is meant for 4-6 level 6 players, and will predominantly take place in the feywild, so prepare yourself for some silly fey shenanigans!
                <br/> <br/>
                Contact: Please contact @veekee. on Discord if you are interested!
                <br/> <br/>
                Note: Players of all experiences are welcome, though I heavily encourage creativity through combat/roleplay!! (Rule of cool supersedes everything in my book!!)
            </div>
        </div>,
        tags: [ScheduleTag.FREE_PLAY, ScheduleTag.TABLETOP],
        startTime: 1100,
        endTime: 1600
    },
    {
        name: "Panel: Anime for the Female Gaze!",
        time: "11:30am-12:00pm",
        location: "Ex Hall Floor 2: Home Park",
        description: "Come and learn about how the female gaze is reshaping anime. We will talk fan service, feminist film theory, and recommendations! Find the panelist at @dekucam on Instagram or TikTok.",
        tags: [ScheduleTag.PANEL, ScheduleTag.ANIME],
        startTime: 1130,
        endTime: 1200
    },
    {
        name: "Smash Tournament Wave A",
        time: "12:00pm-1:30pm",
        location: "Instructional Center",
        description: "Wave A for the WreckCon Smash Tournament.",
        tags: [ScheduleTag.EVENT, ScheduleTag.GAMING],
        startTime: 1200,
        endTime: 1330
    },
    {
        name: "Panel: Genshin Impact: Mind, Mythos, and Memory",
        time: "12:00pm-1:00pm",
        location: "Ex Hall Floor 2: Home Park",
        description: "Prepare to embark on a journey through Teyvat like no other with our Genshin Impact trivia panel. Get ready to unleash your inner visionary and compete for exclusive prizes, all while celebrating the elemental wonders of Teyvat! Find the panelist at @aquaholic_cosplay on Instagram.",
        tags: [ScheduleTag.PANEL, ScheduleTag.ANIME, ScheduleTag.GAMING],
        startTime: 1200,
        endTime: 1300
    },
    {
        name: "Panel: We've All Been Punk'd",
        time: "1:00pm-2:00pm",
        location: "Ex Hall Floor 2: Home Park",
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
        tags: [ScheduleTag.EVENT, ScheduleTag.GAMING],
        startTime: 1330,
        endTime: 1500
    },
    {
        name: "Riot Games Panel",
        time: "2:00pm-3:00pm",
        location: "Main Stage",
        description: "A panel of several Riot Games designers and developers at WreckCon.",
        tags: [ScheduleTag.EVENT, ScheduleTag.PANEL, ScheduleTag.GAMING],
        startTime: 1400,
        endTime: 1500
    },
    {
        name: "Panel: Did the Disney Channel Original Movies age well?",
        time: "2:00pm-3:00pm",
        location: "Ex Hall Floor 2: Home Park",
        description: "The panelist will be going through multiple disney channel films with the audience and explaining which ones still hold up and which ones do not. Find the panelist at @harriyanna.",
        tags: [ScheduleTag.PANEL, ScheduleTag.ANIME],
        startTime: 1400,
        endTime: 1500
    },
    {
        name: "Smash Tournament Top 32",
        time: "3:00pm-5:30pm",
        location: "Instructional Center",
        description: "The Top 32 of the WreckCon Smash Tournament!",
        tags: [ScheduleTag.EVENT, ScheduleTag.GAMING],
        startTime: 1500,
        endTime: 1730
    },
    {
        name: "Pokemon Club Presents: Who's That Pokemon?",
        time: "3:00pm-4:00pm",
        location: "Main Stage",
        description: "The Pokemon Club presents Who's That Pokemon at WreckCon.",
        tags: [ScheduleTag.EVENT, ScheduleTag.GAMING, ScheduleTag.ANIME],
        startTime: 1500,
        endTime: 1600
    },
    {
        name: "Panel: So You Want to Make a Cosplay?!",
        time: "3:00pm-4:00pm",
        location: "Ex Hall Floor 2: Home Park",
        description: "Join us to learn the ins and outs of hand making your first cosplay, from choosing the costume to actually assembling it! Find the panelist at @FoxArcada.",
        tags: [ScheduleTag.PANEL, ScheduleTag.ANIME],
        startTime: 1500,
        endTime: 1600
    },
    {
        name: "Anime Club Presents: Cosplay Contest",
        time: "4:00pm-6:00pm",
        location: "Main Stage",
        description: "Anime Club presents the WrekCon Cosplay Contest.",
        tags: [ScheduleTag.EVENT, ScheduleTag.ANIME],
        startTime: 1600,
        endTime: 1800
    },
    {
        name: "Dungeons & Dragons Free Play Block 2",
        time: "4:00pm-9:00pm",
        location: "Ex Hall Floor 2: Kirkwood",
        description: "",
        testDesc: 
        <div>
            <div>
                Come join GTD&D Club, as well as the UGA D&D Club and the Pathfinder Society for some tabletop free play! 
                Games will be divided into two blocks, one from 11am-4pm and the other from 4pm-9pm. The games being run during <b className="font-bold">block two</b> are:
            </div>
            <br/>
            <div className="font-bold">
                Game 4: Run by Niki Lu from GTD&D
            </div>
            <br/>
            <div>
                System: D&D 5e
                <br/> <br/>
                Description: 3 open slots, 2 spots reserved. Preference for experienced players. LGBTQ friendly. D&D 5e 12th level campaign. Expect infiltration, dungeon delving and extremely deadly encounters. Roleplay is encouraged. Character optimization is recommended. You are a group of elite mercenaries, esteemed warriors, or notorious criminals from all over the sword coast being paid by an elite noble faction of waterdeep. Some of you are from small towns, and some of you are from big cities. Never the less, the undead army lead by the evil vampire group known as the Triad have been ravaging the lands, subjugating towns and raising the dead. Your goal is to infiltrate their castle located in the High Ice, a desolate mountainess glacier, and eliminate them. Your mission starts at the bottom at a small town west of the High Ice, a town so desolate that even the undead negleted it.
                <br/> <br/>
                Contact: Please contact @nlu123 on Discord if you are interested!
            </div>
            <br/>
            <div className="font-bold">
                Game 5: Run by Sparrow MacKenna from UGA D&D
            </div>
            <br/>
            <div>
                System: Call of Cthulu 7e
                <br/> <br/>
                Description: The year is 1935, the place is Atlanta Georgia. There is a casting call for a play called the Tragedy of Carcosa. The call states that they will pay extras 35$ upon completion of the show. Secretly this show is actually a ritual to summon Hastur, the King in Yellow and as the players learn more, they need to figure out how to stop this before they lose both their sanity and their lives. I have run this adventure before, it was initially made for 4 players, but I have had 7 of my friends play it one time, so it can definitely support a good amount of players. Not doing 7 again though. 
                <br/> <br/>
                Contact: Please contact @astelbanana on Discord if you are interested!
            </div>
            <br/>
            <div className="font-bold">
                Game 6: Run by Ananth Shantaraman from GTD&D
            </div>
            <br/>
            <div>
                System: Delta Green
                <br/> <br/>
                Description: The night is dark and stormy, rain pouring down like sheets, in the shadows of a flash of lightning we see a squad of figures approach a house, weapons in hand. One of them pulls out a meter, it beeps slowly as they reach the door, one of them slowly turns the handle and the beeping stutters and speeds up. Everyone holds their breath. Welcome to Phasmophobia, Delta Green style.
                <br/> <br/>
                Contact: Please contact @unauthorizedfireball on Discord if you are interested!
                </div>
        </div>,
        tags: [ScheduleTag.FREE_PLAY, ScheduleTag.TABLETOP],
        startTime: 1600,
        endTime: 2100
    },
    {
        name: "Smash Tournament Top 8!",
        time: "5:30pm-9:00pm",
        location: "Instructional Center",
        description: "The Final 8 of the WreckCon Smash Tournament. After a fierce competition, who will remain at the top?",
        tags: [ScheduleTag.EVENT,ScheduleTag.TABLETOP],
        startTime: 1730,
        endTime: 2100
    },
    {
        name: "Panel: Beginner Programming with Sensei (Python 101)",
        time: "6:00pm-7:00pm",
        location: "Ex Hall Floor 2: Home Park",
        description: "Come learn beginning programming with your own personal sensei! Your sensei will go over the basics of computer programming using a widely known programming language called Python! Feel free to bring a laptop and follow along.",
        tags: [ScheduleTag.PANEL, ScheduleTag.GAMING],
        startTime: 1800,
        endTime: 1900
    },
    {
        name: "Idolfest Concert",
        time: "7:00pm-8:30pm",
        location: "Main Stage",
        description: "BubbleStarL!ve will be hosting an IdolFest that people can come and watch. We will be inviting other idol groups and solo idols to participate in this event along with us!",
        tags: [ScheduleTag.EVENT, ScheduleTag.ANIME],
        startTime: 1900,
        endTime: 2030
    },
    {
        name: "Panel: Slide into Our DMs",
        time: "7:00pm-8:30pm",
        location: "Ex Hall Floor 2: Home Park",
        description: "Tips, Tricks, Guidance for new or continuing TTRPG game masters. The panel will be focusing on Dungeons and Dragons 5th edition, but most guidance is applicable to similar systems. We plan on doing a panel on designing combat encounters. Find the Dungeons and Dragons Club at @gt.dnd on Instagram",
        tags: [ScheduleTag.PANEL, ScheduleTag.TABLETOP],
        startTime: 1900,
        endTime: 2030
    },
    {
        name: "Panel: Star Wars: Rewrite",
        time: "8:30pm-10:00pm",
        location: "Ex Hall Floor 2: Home Park",
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
        tags: [ScheduleTag.EVENT, ScheduleTag.ANIME, ScheduleTag.GAMING, ScheduleTag.TABLETOP],
        startTime: 2030,
        endTime: 2130
    },
    {
        name: "VGDev Arcade",
        time: "10:00am-10:00pm",
        location: "Ex Hall Floor 2: Buckhead",
        description: "Come to the VGDev Arcade to play through multiple student developed games, all day at WreckCon!",
        tags: [ScheduleTag.FREE_PLAY, ScheduleTag.GAMING],
        startTime: 1000,
        endTime: 2200,
    },
    {
        name: "Magic: The Gathering, YuGiOh, Pokemon Free Play",
        time: "10:00am-10:00pm",
        location: "Ex Hall Floor 2: Centennial",
        description: "Come on over for all day Magic: The Gathering, YuGiOh, and Pokemon free play!",
        tags: [ScheduleTag.FREE_PLAY, ScheduleTag.GAMING, ScheduleTag.TABLETOP],
        startTime: 1000,
        endTime: 2200
    },
    {
        name: "Board Game Club Free Play",
        time: "10:00am-10:00pm",
        location: "Ex Hall Floor 2: Old Fourth Ward + Sweet Auburn",
        description: "Join Board Game club to play a variety of games all throughout the day.",
        tags: [ScheduleTag.FREE_PLAY, ScheduleTag.TABLETOP],
        startTime: 1000,
        endTime: 2200
    },
    {
        name: "Warhammer Free Play",
        time: "10:00am-10:00pm",
        location: "Ex Hall Floor 2: Inman Park",
        description: "Join Warhammer Club for totally free Warhammer play in Inman Park!",
        tags: [ScheduleTag.FREE_PLAY, ScheduleTag.TABLETOP],
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
