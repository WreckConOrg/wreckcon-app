import { ScheduleItemProps } from "./scheduleItem";
import { ScheduleTag } from "./tagBox";

export const SCHEDULECONFIG: ScheduleItemProps[] = [
  {
    name: "Opening Ceremony",
    location: "Main Stage",
    description: "The WreckCon Opening Ceremony.",
    tags: [ScheduleTag.EVENT],
    startTime: 1015,
    endTime: 1030,
  },

  // {
  //   name: "TTRPG Panel by Tom Bloom",
  //   location: "Main Stage",
  //   description: "Yoyoyo its ya boi tom tearing it up on the mainstage.",
  //   tags: [ScheduleTag.EVENT, ScheduleTag.TABLETOP, ScheduleTag.PANEL],
  //   startTime: 1030,
  //   endTime: 1130,
  // },

  {
    name: "Panel - Modern vs. Classic Tetris: A Summary ",
    location: "Ex Hall Floor 2: Home Park",
    description:
      "This panel will be covering a summary of the history of the scenes of Classic and Modern Tetris.",
    tags: [ScheduleTag.PANEL, ScheduleTag.GAMING],
    startTime: 1030,
    endTime: 1130,
  },

  // {
  //   name: "Panel - Idol Random Play Dance",
  //   location: "Instructional Center 111",
  //   description:
  //     "Come and dance along to your favorite idol songs from franchises like Love Live, Project Sekai, Ensemble Stars, and so many more!",
  //   tags: [ScheduleTag.PANEL, ScheduleTag.DANCE],
  //   startTime: 1030,
  //   endTime: 1130,
  // },

  {
    name: "Super Smash Bros. Tournament - Registration",
    location: "Instructional Center Floor 2",
    description:
      "Registration for the Super Smash Bros. Ultimate Arcadian and Super Smash Bros. Melee tournaments.",
    tags: [ScheduleTag.TOURNAMENT, ScheduleTag.GAMING],
    startTime: 1030,
    endTime: 1200,
  },

  {
    name: "Mario Kart 8 Tournament - Registration",
    location: "Instructional Center Room 105",
    description: "Registration for the Mario Kart 8 tournament",
    tags: [ScheduleTag.TOURNAMENT, ScheduleTag.GAMING],
    startTime: 1030,
    endTime: 1400,
  },

  {
    name: "Panel - Anime Songs and Soundtracks on Violin!",
    location: "Ex Hall Floor 2: Home Park",
    description:
      "Come hear viral TikToker, Violinist, and GT student @suibianmusic play iconic soundtracks from popular animated shows and games such as Arcane, Demon Slayer, and Genshin Impact!",
    tags: [ScheduleTag.PANEL, ScheduleTag.MUSIC, ScheduleTag.ANIME],
    startTime: 1130,
    endTime: 1200,
  },

  {
    name: "Panel - Hidden Mechanics in Your Favorite Games",
    location: "Instructional Center 111",
    description:
      "Find out what hidden mechanics are and how they make games so awesome!",
    tags: [ScheduleTag.PANEL, ScheduleTag.GAMING],
    startTime: 1130,
    endTime: 1200,
  },

  // {
  //   name: "Riot Games Panel",
  //   location: "Main Stage",
  //   description:
  //     "A panel of several Riot Games designers and developers at WreckCon.",
  //   tags: [ScheduleTag.EVENT, ScheduleTag.PANEL, ScheduleTag.GAMING],
  //   startTime: 1200,
  //   endTime: 1300,
  // },

  {
    name: "Panel - Japenese Music on the Rise",
    location: "Ex Hall Floor 2: Home Park",
    description:
      "How did Japanese music find so much success in the East Asian (and worldwide) market when genres such as KPop exists? This panel aims to answer that question with statistics, facts, and some rocking music!",
    tags: [ScheduleTag.PANEL, ScheduleTag.MUSIC],
    startTime: 1200,
    endTime: 1300,
  },

  {
    name: 'Panel - Who did the "Fake Dating" Trope the Best?',
    location: "Instructional Center 111",
    description:
      "Let's discuss the fake dating trope! Let's talk about the various media that has succeeded (and failed) when using this trope! Also giving tips to anyone who would like to recreate it!",
    tags: [ScheduleTag.PANEL, ScheduleTag.ANIME],
    startTime: 1200,
    endTime: 1300,
  },

  {
    name: "Super Smash Bros. Tournament",
    location: "Instructional Center Floor 2",
    description:
      "Super Smash Bros. Ultimate Arcadian and Super Smash Bros. Melee tournaments. Registration is required beforehand.",
    tags: [ScheduleTag.TOURNAMENT, ScheduleTag.GAMING],
    startTime: 1200,
    endTime: 2100,
  },

  {
    name: "Panel - Ensemble Stars!! Random Play Dance",
    location: "Ex Hall Floor 2: Home Park",
    description:
      "Ensemble Stars!! Random Dance Play: Get ready to dance to music from Ensemble Stars!! In this random dance play panel expect a range of songs from all Ensemble Stars!! groups, including Shuffle and Fusion units. Whether you're a seasoned fan or new to the franchise, this is your chance to shine and enjoy the excitement with other fans!",
    tags: [ScheduleTag.PANEL, ScheduleTag.DANCE],
    startTime: 1300,
    endTime: 1400,
  },

  {
    name: "Panel - Speedrunning Prop Making",
    location: "Instructional Center 111",
    description:
      "Got a convention coming up and no cosplays ready? Suddenly feel a spark of inspiration 2 days before a con? Well this panel is perfect for the procrastinator in you! Learn how to make props small or large from the idea, build, painting, to cool photo taking. You’ll learn the steps to bring your favorite character to life! There will also be tips on how to make your props travel friendly and break proof! From small guns to 6’ canons there’s something here for everyone. Learn from a first hand procrastinator how to build stunning props on a time and money budget!",
    tags: [ScheduleTag.PANEL, ScheduleTag.ARTS_AND_CRAFTS],
    startTime: 1300,
    endTime: 1400,
  },

  {
    name: "Tiffany Grant and Nadia Marshall: Behind the Voices",
    location: "Main Stage",
    description:
      "Join Tiffany Grant and Nadia Marshall as Anime O'Tekku deep dives into their history as voice acting profesisonals, from anime and gaming to theatre! Get ready to ask your own questions as well!",
    tags: [
      ScheduleTag.EVENT,
      ScheduleTag.PANEL,
      ScheduleTag.ANIME,
      ScheduleTag.GAMING,
    ],
    startTime: 1400,
    endTime: 1500,
  },

  {
    name: "Mario Kart 8 Tournament",
    location: "Instructional Center Room 105",
    description: "Mario Kart 8 tournament. Prior registration is required.",
    tags: [ScheduleTag.TOURNAMENT, ScheduleTag.GAMING],
    startTime: 1400,
    endTime: 2100,
  },

  {
    name: "Panel - It Takes Two to Tango: Introduction to Ballroom Dancing",
    location: "Instructional Center 111",
    description:
      "Have you ever wanted to dance like Eula or Black Swan and Acheron? Do you ever wonder if you can just invite someone to dance without having a preplanned choreography? If so, come learn tango with us! No partner or experience necessary",
    tags: [ScheduleTag.PANEL, ScheduleTag.DANCE],
    startTime: 1430,
    endTime: 1600,
  },

  {
    name: "Panel - Genshin Impact: Mind, Mythos, and Memory - A Trivial Pursuit of Teyvat",
    location: "Ex Hall Floor 2: Home Park",
    description:
      "Come join us for our 2nd ever WreckCon Genshin Impact Trivia! Prepare to embark on a journey through Teyvat like no other. Come test your knowledge on the music, characters, and lore that make Genshin what it is, and compete for Teyvat Trivia Champion with awesome prizes for top 3!",
    tags: [ScheduleTag.PANEL, ScheduleTag.TRIVIA, ScheduleTag.GAMING],
    startTime: 1500,
    endTime: 1600,
  },

  {
    name: "The WreckQuiz!",
    location: "Main Stage",
    description:
      "A trivia gameshow involving many of the clubs involved at WreckCon, held on the main stage!",
    tags: [
      ScheduleTag.EVENT,
      ScheduleTag.TRIVIA,
      ScheduleTag.ANIME,
      ScheduleTag.GAMING,
      ScheduleTag.TABLETOP,
    ],
    startTime: 1515,
    endTime: 1545,
  },

  {
    name: "Anime Club Presents: Cosplay Showcase",
    location: "Main Stage",
    description:
      "Show off your cosplay and performance in the cosplay showcase. Anime O'Tekku officers will pick out 3 participants based on the cosplay, performance/skit, stage presence, and other factors, to receive 4-day passes to MomoCon 2025. Signups will be in-person at WreckCon 2025, first come-first serve! ",
    tags: [ScheduleTag.EVENT, ScheduleTag.ANIME, ScheduleTag.ARTS_AND_CRAFTS],
    startTime: 1600,
    endTime: 1645,
  },

  {
    name: "Anime Club Presents: Cosplay Contest",
    location: "Main Stage",
    description:
      "Show off your cosplay crafting skills in the cosplay contest. The top 25 entries will be showcased at WreckCon 2025, with winners taking home 4-day passes to MomoCon 2025!",
    tags: [ScheduleTag.EVENT, ScheduleTag.ANIME, ScheduleTag.ARTS_AND_CRAFTS],
    startTime: 1700,
    endTime: 1730,
  },

  {
    name: "Panel - Helluva Cosplayer: How to Engineer Your Cosplays",
    location: "Ex Hall Floor 2: Home Park",
    description:
      "Are you a Helluva Engineer? Do you want to elevate your cosplays with your GT knowhow? Look no further! Cosplayer and Tech student @Lunarianvampire will lead you through the trials and tribulations, tips and tricks, and crashout-inducing fun of adding that extra GT pizzazz to your cosplay. What's the good word?",
    tags: [ScheduleTag.PANEL, ScheduleTag.ARTS_AND_CRAFTS],
    startTime: 1745,
    endTime: 1815,
  },

  {
    name: "Panel - The Fun in Fantasy & Sci-Fi: Make Your Own Manga",
    location: "Instructional Center 111",
    description:
      "Providing insight as to the basic tenets of creating a compelling story, integrating imagination with technology and common pitfalls of writers.",
    tags: [ScheduleTag.PANEL, ScheduleTag.ANIME],
    startTime: 1745,
    endTime: 1845,
  },

  {
    name: "Idolfest Concert",
    location: "Main Stage",
    description:
      "Come and cheer on your favorite idols in our idolfest, co-hosted by Pri5m and Cosmic Stories! Watch idols cosplay as the characters in their chosen songs or perform as their own original idols as all in the spotlight all will shine! Raise those penlights in the air as idol groups light the stage with performances from all different genres from Jpop, Vocaloid, rhythm games, anime and Kpop!",
    tags: [ScheduleTag.EVENT, ScheduleTag.DANCE, ScheduleTag.ANIME],
    startTime: 1800,
    endTime: 2000,
  },

  {
    name: "Panel - Disney Jeopardy",
    location: "Ex Hall Floor 2: Home Park",
    description:
      "Disney jeopardy hosted by bill cypher. This jeopardy game will span all of Disney including but not limited to Star Wars, Marvel, Theme parks and more.",
    tags: [ScheduleTag.PANEL, ScheduleTag.TRIVIA],
    startTime: 1815,
    endTime: 1915,
  },

  {
    name: "Panel - Introduction to Anime Studies",
    location: "Instructional Center 111",
    description:
      "Anime can be studied as literature, sociology, economics, and political science, among other fields. This panel will show you how you can write a scholarly paper about anime for school. We will also talk about launching an academic or professional career that lets you study anime.",
    tags: [ScheduleTag.PANEL, ScheduleTag.ANIME],
    startTime: 1845,
    endTime: 1945,
  },

  {
    name: "Artists Alley",
    location: "Ex Hall Midtown Ballroom",
    description: `We have an incredible lineup of local and GT artists this year! Browse our Artist Alley in the Exhibition Hall and grab a slew of merchandise. With designs both original and inspired by your favorite media franchises, there's something for everyone. They don't call it “disposable income” for nothing, after all.
    
Our featured vendors this year are Level-Up Games and Sorensen's Precision Diceworks.`,
    tags: [ScheduleTag.ARTS_AND_CRAFTS],
    startTime: 1000,
    endTime: 2000,
  },
  {
    name: "Indie Game Showcase",
    location: "Instructional Center 109",
    description:
      "Play free demos of amazing games from local independent developers. Featuring award-winning games and brand new projects, discover your newest gaming addiction.",
    tags: [ScheduleTag.FREE_PLAY, ScheduleTag.GAMING],
    startTime: 1000,
    endTime: 2000,
  },
  {
    name: "VGDev Arcade",
    location: "Ex Hall Floor 2: Buckhead",
    description:
      "Play a selection of student-made games from VGDev, Georgia Tech's student game development club. Complete quests in order to earn tickets, and trade them in for a variety of free prizes!",
    tags: [ScheduleTag.FREE_PLAY, ScheduleTag.GAMING],
    startTime: 1000,
    endTime: 2000,
  },
  {
    name: "Magic: The Gathering, YuGiOh, Pokemon Free Play",
    location: "Ex Hall Floor 2: Centennial",
    description:
      "Come on over for all day Magic: The Gathering, YuGiOh, and Pokemon free play!",
    tags: [ScheduleTag.FREE_PLAY, ScheduleTag.GAMING, ScheduleTag.TABLETOP],
    startTime: 1000,
    endTime: 2000,
  },
  {
    name: "Board Game Club Free Play",
    location: "Ex Hall Floor 2: Old Fourth Ward + Sweet Auburn",
    description:
      "Join Board Game club to play a variety of games all throughout the day.",
    tags: [ScheduleTag.FREE_PLAY, ScheduleTag.TABLETOP],
    startTime: 1000,
    endTime: 2000,
  },
  {
    name: "Warhammer Free Play",
    location: "Ex Hall Floor 2: Inman Park",
    description:
      "Join Warhammer Club for totally free Warhammer play in Inman Park!",
    tags: [ScheduleTag.FREE_PLAY, ScheduleTag.TABLETOP],
    startTime: 1000,
    endTime: 2000,
  },
];
