import { EventProps } from "./Event";
import indiegames from "./../../assets/event_pictures/indiegames.jpg";
import cosplay from "./../../assets/event_pictures/cosplay.png";
import boardgames from "./../../assets/event_pictures/boardgames.png";
import idolfest from "./../../assets/event_pictures/idolfest.png";
import tabletop from "./../../assets/event_pictures/tabletop.jpg";
import panels from "./../../assets/event_pictures/panels.jpg";
import cosplayshowcase from "./../../assets/event_pictures/cosplayshowcase.jpg";
import vgdev from "./../../assets/event_pictures/vgdevarcade.jpg";
import smash from "./../../assets/event_pictures/smashbros.jpg";
import tcg from "./../../assets/event_pictures/tcg.jpg";
import artistsalley from "./../../assets/event_pictures/artistsalley.jpg";

export const EVENTCONFIG: EventProps[] = [
  {
    name: "Artists Alley",
    bodyText: `We have an incredible lineup of local and GT artists this year! Browse our Artist Alley in the Exhibition Hall and grab a slew of merchandise. With designs both original and inspired by your favorite media franchises, there's something for everyone. They don't call it “disposable income” for nothing, after all.
    
Our featured vendors this year are Level-Up Games and Sorensen's Precision Diceworks.`,
    link: "https://forms.gle/kvhUyLAfUJo2WA998",
    buttonText: "Apply",
    picture: artistsalley,
    location: "Main Stage",
  },
  {
    name: "Cosplay Contest",
    bodyText: `This is a chance for you to show off your cosplay crafting skills at WreckCon 2025! A panel of special guest cosplay judges will evaluate your cosplays and select 5 winners to take home a 4-day pass to MomoCon 2025.

25 people will be selected to go through to day-of judging. More details on the rules are on the application.

Signups close February 16th at 11:59pm.`,
    link: "https://forms.gle/aBS5BbX6XR8xzdAe6",
    buttonText: "Apply",
    picture: cosplay,
    location: "Main Stage",
  },

  {
    name: "Cosplay Showcase",
    bodyText: `This is the event for you to show off both your cosplay and your performance. Anime O'Tekku officers will pick out 3 participants based on the cosplay, performance/skit, stage presence, and other factors, to receive 4-day passes to MomoCon 2025.

You will get 45 seconds on stage to do whatever your heart desires, including skits and performances. You can also submit music you would like to play. 

Signups will be in-person at WreckCon 2025, first come-first serve! `,
    picture: cosplayshowcase,
    location: "Main Stage",
  },

  {
    name: "Indie Game Showcase",
    bodyText: `Play free demos of amazing games from local independent developers. Featuring award-winning games and brand new projects, discover your newest gaming addiction. If you are a developer with a video game or tabletop game which you would like to demo, you can apply on the linked form.`,
    picture: indiegames,
    location: "Main Stage",
    link: "https://forms.gle/GKzwJkK6yGEpCrCRA",
    buttonText: "Apply",
  },
  {
    name: "Panels",
    bodyText: `On the main stage, get ready for a voice acting panel featuring Tiffany Grant! More main stage panels will be announced soon.

In the panel rooms, have a topic you'd like to hear about? Want to hear some live music, or maybe see a dance? Check out our panels in the Instructional Center and on the second floor of the Exhibition Hall!`,
    picture: panels,
    location: "Main Stage",
    link: "https://forms.gle/rKWmuNAxvnnStNqy8",
    buttonText: "Apply",
  },
  {
    name: "TCG Freeplay",
    bodyText: `Like trading card games? Check out our TCG free play, featuring Pokemon TCG, Magic The Gathering, and Yu-Gi-Oh! Stop by for a quick game or stay for a mini-tourney.`,
    picture: tcg,
    location: "Main Stage",
  },
  {
    name: "TTRPG Freeplay",
    bodyText: `Have you heard of Dungeons & Dragons, Pathfinder, or another TableTop Roleplaying Game and want to give it a go? Take a look at our open games and contact a GM, or just show up if it's a walk-up!
  
Game listings coming soon.`,
    picture: tabletop,
    location: "Main Stage",
  },
  {
    name: "VGDev Arcade",
    bodyText: `Play a selection of student-made games from VGDev, Georgia Tech's student game development club. Complete quests in order to earn tickets, and trade them in for a variety of free prizes!`,
    picture: vgdev,
    location: "Main Stage",
  },

  {
    name: "Board Game Freeplay",
    bodyText: `Want to unwind with a board game? This is the place to do it! Enjoy Catan, 7 Wonders, Wingspan, and dozens more games with friends old and new.`,
    picture: boardgames,
    location: "Main Stage",
  },
  {
    name: "Idolfest",
    bodyText: `Come and cheer on your favorite idols in our idolfest, co-hosted by Pri5m and Cosmic Stories! Watch idols cosplay as the characters in their chosen songs or perform as their own original idols as all in the spotlight all will shine! Raise those penlights in the air as idol groups light the stage with performances from all different genres from Jpop, Vocaloid, rhythm games, anime and Kpop!`,
    picture: idolfest,
    location: "Main Stage",
    link: "https://forms.gle/TTr5VxMkReWXa3QQ6",
    buttonText: "Apply",
  },
  {
    name: "Super Smash Bros. Tournaments",
    bodyText: `We are back and better than ever this year at WreckCon 2025 with Melee, and for the first time, an Ultimate Arcadian! 
To enter the Ultimate Arcadian, you must have never been power ranked, so if you're new to the game this is a perfect chance to test your skills.
One day only, March 1st, and a grand prize of a MomoCon ticket for each tourney!`,
    picture: smash,
    location: "Main Stage",
    link: "https://start.gg/wreckcon",
    buttonText: "Register",
  },
  // {
  //   name: "Mario Kart 8 Tournament",
  //   bodyText: `Play Video Games. Yay!`,
  //   picture: placeholder,
  //   location: "Main Stage",
  // },
];
