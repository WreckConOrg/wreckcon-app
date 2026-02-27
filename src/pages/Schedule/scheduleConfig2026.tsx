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

  {
    name: "Panel - Worldbuilding with Tom Bloom",
    location: "Main Stage",
    description:
      "Join Tom Bloom as he discusses worldbuilding in creative writing, from comics to TTRPGS! Writers and DMs alike can learn more about world design, as well as ask your own questions!",
    tags: [ScheduleTag.EVENT, ScheduleTag.TABLETOP, ScheduleTag.PANEL],
    startTime: 1030,
    endTime: 1130,
  },

  {
    name: "Panel - Why do people keep comparing Kpop Demon Hunters and Sinners?",
    location: "Ex Hall Floor 2: Home Park",
    description:
      "Two of the most talked about films that released in 2025 have been compared to constantly, so let's see what's so similar about them!",
    tags: [ScheduleTag.PANEL],
    startTime: 1030,
    endTime: 1130,
  },

  {
    name: "Panel - Guilty Gear Lore 101",
    location: "Instructional Center 111",
    description:
      "Who is the Guilty Gear? What makes them Guilty? What makes them a gear? WHAT IS A GEAR? You'll find out if you come to this panel.",
    tags: [ScheduleTag.PANEL, ScheduleTag.GAMING],
    startTime: 1030,
    endTime: 1130,
  },

  {
    name: "Origami Free Play",
    location: "Instructional Center 103",
    description:
      "Interested in origami? Stop by to fold something cool with the Origami Club! No experience needed.",
    tags: [ScheduleTag.ARTS_AND_CRAFTS, ScheduleTag.FREE_PLAY],
    startTime: 1000,
    endTime: 1200,
  },

  {
    name: "Panel - From Owl House to Knights Of Guinevere",
    location: "Instructional Center 111",
    description:
      "Owl House changed the way animators saw their work was executed by big businesses, and creator Dana Terrace took her talents to join with Glitch on her new show Knights Of Guinevere. It's Indie vs. Industry, and we'll see how this worked out from the fans perspective.",
    tags: [ScheduleTag.PANEL, ScheduleTag.ARTS_AND_CRAFTS],
    startTime: 1130,
    endTime: 1200,
  },

  {
    name: "Panel - How to Become a Master Builder: Tips and Tricks for Designing Lego Models",
    location: "Ex Hall Floor 2: Home Park",
    description:
      "Have you ever wanted to design your own Lego model? We'll walk through the entire design process from brainstorming to building with tips, tricks and insights from an experienced builder. We'll even break down the design of the Lego Rivet set!",
    tags: [ScheduleTag.PANEL, ScheduleTag.ARTS_AND_CRAFTS],
    startTime: 1130,
    endTime: 1200,
  },

  {
    name: "Super Smash Bros. Tournament - Registration",
    location: "Instructional Center 209 and 211 (Ultimate), 215 (Melee)",
    description:
      "Registration for the Super Smash Bros. Ultimate and Super Smash Bros. Melee tournaments.",
    tags: [ScheduleTag.TOURNAMENT, ScheduleTag.GAMING],
    startTime: 1030,
    endTime: 1200,
  },

  {
    name: "TTRPG Free Play Block 1",
    time: "10:30am-3:00pm",
    location: "Ex Hall Floor 2: Kirkwood",
    description: "",
    advancedDescription: (
        <div className="space-y-6 pt-4 pr-2 md:pr-8 text-white font-inter">
          <p className="leading-relaxed">
            Come join GTD&D Club for some tabletop free play! Games will be divided into two 
            blocks: <b className="font-bold">10:30am - 3:00pm</b> and <b className="font-bold">3:30pm - 8:00pm</b>. 
            The games being run during block one are:
          </p>
      
          <div className="space-y-8">
            <div className="bg-white/10 p-4 rounded-lg border border-white/10 shadow-inner">
              <h4 className="text-xl md:text-2xl font-coolvetica text-[#FFC42D] text-center mb-4">
                Game 1: Run by Xander Alexander
              </h4>
              <div className="space-y-3 text-sm md:text-base leading-snug">
                <p><b className="font-bold">System:</b> Eureka: Investigative Urban Fantasy</p>
                <p><b className="font-bold">Style:</b> Pre-Prepped</p>
                <p><b className="font-bold">Description:</b> In the small town of Foulson, high in the Rocky Mountains of Colorado, the historic Mayvale Manor is being restored and turned into a bed and breakfast! To promote the new attraction, a select group of people are invited to stay for a preview night, enjoying Foulson’s rich history and mountain landscape. However, an incoming blizzard, an unthinkable disaster, and the intrigue behind the manor's story will turn these unsuspecting strangers into clue-seeking detectives. Will they be able to get to the bottom of the Mystery of Mayvale Manor?</p>
                <p><b className="font-bold">Player Specifications:</b> 4 players.</p>
                <p><b className="font-bold">Contact:</b> <span className="bg-white/10 px-2 py-0.5 rounded">unanimous_</span> on Discord.</p>
              </div>
            </div>
      
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 shadow-inner">
              <h4 className="text-xl md:text-2xl font-coolvetica text-center mb-4 text-yellow-400">
                Game 2: Run by Vi Iyengar
              </h4>
              <div className="space-y-3 text-sm md:text-base leading-snug">
                <p><b className="font-bold text-gray-300">System:</b> DnD 5e</p>
                <p><b className="font-bold text-gray-300">Style:</b> Pre-Prepped</p>
                <p><b className="font-bold text-gray-300">Description:</b> The year is 1974. The Vesperian Federation in the West and the Commonwealth of Socialist States in the East are locked in a tense cold war. The Viscounty of Meroux, a self-governing island dependency of the Kentian Empire, is caught between the feuding great powers. Normally, Meroux is surrounded by an intense and impassable storm, which has historically only weakened for less than a week once every several years. Over the past three years, however, the storm has begun to fade more and more, making the island easily accessible for the first time in its long history. Much of the information surrounding Meroux has been heavily censored by the Kentian Crown, but there are rumors that the island is home to non-human entities and supernatural forces. For centuries, Meroux has been ruled by a feudal lord, but the young Viscount has struggled to rule the island and live up to the legacy of his father. There are new calls to tear down the old feudal system and bring democracy to the island... but with meddling great powers, would a revolution really be that simple? <br /> <br />
This campaign will be primarily puzzle and roleplay driven. Expect little to no combat, lots of diplomatic maneuvering, and a big mystery to solve.</p>
                <p><b className="font-bold text-gray-300">Player Specifications:</b> 5 players, level 3.</p>
                <p><b className="font-bold text-gray-300">Contact:</b> <span className="bg-white/10 px-2 py-0.5 rounded">nerdie01</span> on Discord to be added to the group.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    tags: [ScheduleTag.FREE_PLAY, ScheduleTag.TABLETOP],
    startTime: 1030,
    endTime: 1500,
  },

  {
    name: "Panel - Breaking in to Game Development",
    location: "Come learn about game design, production, programming, tech art, indie & AAA games, and more at this panel with ATL Game Devs! Developers can learn more about game development as well as ask your own questions!",
    description:
      "",
    tags: [ScheduleTag.EVENT, ScheduleTag.GAMING, ScheduleTag.PANEL],
    startTime: 1200,
    endTime: 1300,
  },

  {
    name: "Panel - Create Cosplays You Love: Redesigning characters with intention & attention to details!",
    location: "Ex Hall Floor 2: Home Park",
    description:
      "Let's spice up our cosplay game by learning the first step to bringing your visions to life, BRAINSTORMING! In this panel you'll learn a costume designer's beginning chaos realm to recreating and birthing cosplays you'll love for a lifetime while also doodling up your next grand cosplay adventure!",
    tags: [ScheduleTag.PANEL, ScheduleTag.ARTS_AND_CRAFTS],
    startTime: 1200,
    endTime: 1300,
  },

  {
    name: "Panel - Let's Decolonize Mars: John P. Moore and the First Black Space Opera",
    location: "Instructional Center 111",
    description:
      "In a time where humanity's gaze has again returned to Mars, it's worth taking a look at everyone's visions of the future. Panelist Val Barnhart, biographer and editor for Amazing Stories' 2025 release \"The Martian Trilogy,\" talks about Moore's work and its historical context. The first Black \"space opera\" — a genre made popular by works like Star Trek and Star Wars — \"The Martian Trilogy\" speaks of a future where Black visions are realized, alien races intermarry, and sci-fi authors are hand-selected as liaisons for the Earth. Come find out about one of the wildest stories from the 1930s!",
    tags: [ScheduleTag.PANEL],
    startTime: 1200,
    endTime: 1300,
  },

  {
    name: "Super Smash Bros. Tournament",
    location: "Instructional Center 209 and 211 (Ultimate), 215 (Melee)",
    description:
      "Super Smash Bros. Ultimate and Super Smash Bros. Melee tournaments. Registration is required beforehand.",
    tags: [ScheduleTag.TOURNAMENT, ScheduleTag.GAMING],
    startTime: 1200,
    endTime: 2100,
  },

  {
    name: "Mario Kart World Tournament Quarterfinals",
    location: "Instructional Center 105",
    description:
      "Quarterfinals for the Mario Kart World tournament.",
    tags: [ScheduleTag.TOURNAMENT, ScheduleTag.GAMING],
    startTime: 1200,
    endTime: 1430,
  },

  {
    name: "Mario Kart World Tournament Semifinals",
    location: "Instructional Center 105",
    description:
      "Semifinals for the Mario Kart World tournament.",
    tags: [ScheduleTag.TOURNAMENT, ScheduleTag.GAMING],
    startTime: 1430,
    endTime: 1700,
  },

  {
    name: "Guilty Gear: Strive Tournament",
    location: "Instructional Center 205",
    description:
      "Guilty Gear: Strive torunament, hosted by the Georgia Tech Fighting Game Community.",
    tags: [ScheduleTag.TOURNAMENT, ScheduleTag.GAMING],
    startTime: 1200,
    endTime: 1330,
  },

  {
    name: "Street Fighter 6 Tournament",
    location: "Instructional Center 205",
    description:
      "Street Fighter 6 tournament, hosted by the Georgia Tech Fighting Game Community.",
    tags: [ScheduleTag.TOURNAMENT, ScheduleTag.GAMING],
    startTime: 1400,
    endTime: 1530,
  },

  {
    name: "2XKO Tournament",
    location: "Instructional Center 205",
    description:
      "2XKO tournament, hosted by the Georgia Tech Fighting Game Community.",
    tags: [ScheduleTag.TOURNAMENT, ScheduleTag.GAMING],
    startTime: 1600,
    endTime: 1730,
  },

  {
    name: "Mario Kart World Tournament Finals",
    location: "Instructional Center 105",
    description:
      "Finals for the Mario Kart World tournament.",
    tags: [ScheduleTag.TOURNAMENT, ScheduleTag.GAMING],
    startTime: 1730,
    endTime: 1800,
  },

  {
    name: "Panel - Mind, Mythos, and Memory - A Trivial Pursuit of Teyvat",
    location: "Instructional Center 103",
    description:
      "Embark on a trivia adventure across Teyvat! Each round will test a different part of your journey, unraveling lore, recalling character details, exploring regions, and even a special challenge where you’ll guess the character theme from the music itself. Brave Travelers who rise to the top will be rewarded with treasures worthy of their victory!",
    tags: [ScheduleTag.PANEL, ScheduleTag.ANIME],
    startTime: 1230,
    endTime: 1400,
  },

  {
    name: "Panel - Kpop/Jpop Random Play Dance",
    location: "Ex Hall Floor 2: Home Park",
    description:
      "Take to the floor for this Kpop/Jpop random play dance! Featuring music from groups like Twice, &Team, Stray Kids, to franchises like Love Live, Ensemble Stars, and Uma Musume. Even if you don't know the choreo, jump in and follow along with the displayed video!",
    tags: [ScheduleTag.PANEL, ScheduleTag.ANIME, ScheduleTag.DANCE],
    startTime: 1300,
    endTime: 1400,
  },

  {
    name: "Panel - Mr. Ant Tenna's TV-Tastic Fandom Feud!",
    location: "Instructional Center 111",
    description:
      "Don't touch that dial! Come play along in a Family Feud-style game show with all sorts of indie game and other fandom-related topics topics, hosted by the one and only Mr. Ant Tenna!",
    tags: [ScheduleTag.PANEL, ScheduleTag.TRIVIA],
    startTime: 1300,
    endTime: 1400,
  },

  {
    name: "Panel - Tiffany Grant, Morgan Berry, Sarah-Nicole Robles, and Zach Pokres: Behind the Voices",
    location: "Main Stage",
    description:
      "Join Tiffany Grant, Morgan Berry, Sarah-Nicole Robles, and Zach Pokres as Anime O'Tekku deep dives into their history as voice acting profesisonals, from anime and gaming to theatre! Get ready to ask your own questions as well!",
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
    name: "Panel - Shoujo & Josei: Not Just for the Girls",
    location: "Ex Hall Floor 2: Home Park",
    description:
      "Many people assume that shoujo = romance. But from first crushes to work life experiences, shoujo and josei manga have a story for every stage of life. We'll demystify terms, walk through trope, and showcase great beginner series for every taste. Whether you’re here for sparkle, angst, or relatable grown-up chaos, shoujo has you covered.",
    tags: [ScheduleTag.PANEL, ScheduleTag.ANIME],
    startTime: 1430,
    endTime: 1500,
  },

  {
    name: "Panel - Help! I Accidentally Became a BL!",
    location: "Instructional Center 103",
    description:
      "In this chaotic panel, BL manga, manhwa, and danmei describe themselves like they're contestants on a dating show. Can you guess the title before the reveal? Drama, thirst, and confusion guaranteed.",
    tags: [ScheduleTag.PANEL, ScheduleTag.ANIME],
    startTime: 1430,
    endTime: 1600,
  },

  {
    name: "Panel - Vocaloid and Project Sekai Random Play Dance!",
    location: "Ex Hall Floor 2: Home Park",
    description:
      "Dance to your favorite units and Vocaloids in a random play dance with fello PJSK/Vocaloid fans!",
    tags: [ScheduleTag.PANEL, ScheduleTag.DANCE],
    startTime: 1500,
    endTime: 1600,
  },

  {
    name: "Panel - Faces, Forms & Feelings: Creating Memorable Characters",
    location: "Instructional Center 111",
    description:
      "This panel explores the psychology behind character design and how visual choices shape audience perception, emotional attachment, and narrative meaning. Drawing from film theory, animation, and visual storytelling, the discussion breaks down how silhouettes, color, costuming, and movement communicate character before a single line of dialogue is spoken. To keep the session interactive, the panel integrates live games and audience challenges that invite participants to analyze, redesign, and decode characters in real time—turning theory into practice and insight into play.",
    tags: [ScheduleTag.PANEL],
    startTime: 1500,
    endTime: 1600,
  },

  {
    name: "The WreckQuiz!",
    location: "Main Stage",
    description:
      "A trivia gameshow themed around WreckCon and the many clubs that hold it together. There might even be some prizes involved...",
    tags: [
      ScheduleTag.EVENT,
      ScheduleTag.TRIVIA,
      ScheduleTag.ANIME,
      ScheduleTag.GAMING,
      ScheduleTag.TABLETOP,
    ],
    startTime: 1315,
    endTime: 1345,
  },

  {
    name: "TTRPG Free Play Block 2",
    time: "3:30pm-8:00pm",
    location: "Ex Hall Floor 2: Kirkwood",
    description: "",
    advancedDescription: (
        <div className="space-y-6 pt-4 pr-2 md:pr-8 text-white font-inter">
          <p className="leading-relaxed">
            Come join GTD&D Club for some tabletop free play! Games will be divided into two 
            blocks: <b className="font-bold">10:30am - 3:00pm</b> and <b className="font-bold">3:30pm - 8:00pm</b>. 
            The games being run during block two are:
          </p>
      
          <div className="space-y-8">
            <div className="bg-white/10 p-4 rounded-lg border border-white/10 shadow-inner">
              <h4 className="text-xl md:text-2xl font-coolvetica text-[#FFC42D] text-center mb-4">
                Game 1: Run by Spell
              </h4>
              <div className="space-y-3 text-sm md:text-base leading-snug">
                <p><b className="font-bold">System:</b> Lancer</p>
                <p><b className="font-bold">Style:</b> Pre-Prepped</p>
                <p><b className="font-bold">Description:</b> Come face the eldritch and incomprehensible with the power of a giant robot! You have been enlisted to help breach a Metavault, the extradimensional sarcophagus of a sleeping god. Fight your way through twisted reflections to reach the innumerable secrets within! <br /> <br />
This will be a combat-focused one-shot played at LL1, with premade characters. A LAPTOP IS REQUIRED.</p>
                <p><b className="font-bold">Player Specifications:</b> 5 players maximum, LL1.</p>
                <p><b className="font-bold">Contact:</b> <span className="bg-white/10 px-2 py-0.5 rounded">sailorspellcheck</span> on Discord.</p>
              </div>
            </div>
      
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 shadow-inner">
              <h4 className="text-xl md:text-2xl font-coolvetica text-center mb-4 text-yellow-400">
                Game 2: Run by Dylan
              </h4>
              <div className="space-y-3 text-sm md:text-base leading-snug">
                <p><b className="font-bold text-gray-300">System:</b> Call of Cthulhu 7e</p>
                <p><b className="font-bold text-gray-300">Style:</b> Walk-up</p>
                <p><b className="font-bold text-gray-300">Description:</b> You are part of the latest expedition into the Northyards Estate. The property, home of tragedy after tragedy, weighted down by countless sins, inwardly spiraling in it's own self hatred, became something more. A symbol. A temple. A god. 
<br /> <br />
This is expedition number 294 into the property. You're here to banish the evil from it. To forgive it for all the wrong it has done. To peer into this monument to all that makes us look away. And most importantly, to find the center and kill humanity's fear once all for all. 
<br /> <br />
Bring all that is fear and all that is terror and all that is the awful dread that crawls and chokes and blinds and falls and twists and leaves and hides and weaves and burns and hunts and rips and bleeds and dies! And bring it to an end.
<br /> <br />
-- <br />
The Magnus Archives Inspired Horror, mystery, and Puzzle one shot designed for 4-6 players but accepting more. <br />
Setting: Modern Non-magical <br />
CW: Puzzles, rot, claustrophobia, unreality, body horror, emotional horror, stalking, reading. </p>
                <p><b className="font-bold text-gray-300">Player Specifications:</b> 4-6 players, modern era.</p>
                <p><b className="font-bold text-gray-300">Contact:</b> <span className="bg-white/10 px-2 py-0.5 rounded">someonefromsometown</span> on Discord.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    tags: [ScheduleTag.FREE_PLAY, ScheduleTag.TABLETOP],
    startTime: 1530,
    endTime: 2000,
  },

  {
    name: "Anime Club Presents: Cosplay Aura Farming Tournament of Power",
    location: "Main Stage",
    description:
      "Witness skits, performances and aura farming in this Tournament of Power. Signups end 30 mins before it starts!",
    tags: [ScheduleTag.EVENT, ScheduleTag.ANIME, ScheduleTag.ARTS_AND_CRAFTS],
    startTime: 1600,
    endTime: 1630,
  },

  {
    name: "Anime Club Presents: Cosplay Contest",
    location: "Main Stage",
    description:
      "Check out hand made costumes judged by our panel of experienced cosplay makers, Justyn, Skippercosplay, and Kumalette Cosplay!",
    tags: [ScheduleTag.EVENT, ScheduleTag.ANIME, ScheduleTag.ARTS_AND_CRAFTS],
    startTime: 1700,
    endTime: 1730,
  },

  {
    name: "Panel - K-Pop Random Dance Play",
    location: "Ex Hall Floor 2: Home Park",
    description:
      "Every K-pop stan's favorite game: Random Dance Play! Nixikko will host the Random Dance play with a custom playlist featuring K-pop hits from 2nd - 5th Gen and some surprises from iconic K-pop moments. Whether you join in the game or watch from the crowd, all are welcome!",
    tags: [ScheduleTag.PANEL, ScheduleTag.DANCE],
    startTime: 1745,
    endTime: 1845,
  },

  {
    name: "Panel - A History of Tetris",
    location: "Instructional Center 111",
    description:
      "Featuring a deep dive into the evolution of Tetris over time. From classic NES to more modern TETRIO and Tetris Effect, learn about how competitive Tetris has evolved over time!",
    tags: [ScheduleTag.PANEL, ScheduleTag.GAMING],
    startTime: 1745,
    endTime: 1845,
  },

  {
    name: "Panel - From Script to Screen: Creating a Cartoon",
    location: "Instructional Center 103",
    description:
      "Follow the process of the creation of a cartoon, starting from pre-production all the way to post production.",
    tags: [ScheduleTag.PANEL, ScheduleTag.ARTS_AND_CRAFTS],
    startTime: 1745,
    endTime: 1915,
  },

  {
    name: "Panel - Best and Worst Animation Dads",
    location: "Ex Hall Floor 2: Home Park",
    description:
      "From the Saturday morning cartoons of our childhoods, to the series we watch now, let's rank the best and worst animation dads!",
    tags: [ScheduleTag.PANEL, ScheduleTag.ANIME],
    startTime: 1845,
    endTime: 1945,
  },

  {
    name: "Idolfest Concert",
    location: "Main Stage",
    description:
      "Come and cheer on your favorite idols in our idolfest, hosted by Georgia Tech's own idol group, Hachi☆Pop! Watch idols cosplay as the characters in their chosen songs or perform as their own original idols as all in the spotlight all will shine! Raise those penlights in the air as idol groups light the stage with performances from all different genres from Jpop, Vocaloid, rhythm games, anime and Kpop!",
    tags: [ScheduleTag.EVENT, ScheduleTag.DANCE, ScheduleTag.ANIME],
    startTime: 1815,
    endTime: 2000,
  },

  {
    name: "Artists Alley",
    location: "Ex Hall Midtown Ballroom",
    description: `We have an incredible lineup of local and GT artists this year! Browse our Artist Alley in the Exhibition Hall and grab a slew of merchandise. With designs both original and inspired by your favorite media franchises, there's something for everyone. They don't call it “disposable income” for nothing, after all.
    
Our featured vendor this year is Sorensen's Precision Diceworks.`,
    tags: [ScheduleTag.ARTS_AND_CRAFTS],
    startTime: 1000,
    endTime: 2000,
  },
  {
    name: "Indie Game Showcase",
    location: "Instructional Center 115",
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
    name: "Pokemon Free Play",
    location: "Instructional Center 109",
    description:
      "Come on over for all day Pokemon TCG free play!",
    tags: [ScheduleTag.FREE_PLAY, ScheduleTag.GAMING, ScheduleTag.TABLETOP],
    startTime: 1000,
    endTime: 2000,
  },
  {
    name: "Magic: The Gathering, YuGiOh Free Play",
    location: "Ex Hall Floor 2: Centennial",
    description:
      "Come on over for all day Magic: The Gathering and YuGiOh free play!",
    tags: [ScheduleTag.FREE_PLAY, ScheduleTag.GAMING, ScheduleTag.TABLETOP],
    startTime: 1000,
    endTime: 2000,
  },
  {
    name: "Board Game Club Free Play",
    location: "Ex Hall Floor 2: Old Fourth Ward, Sweet Auburn",
    description:
      "Join Board Game club to play a variety of games all throughout the day.",
    tags: [ScheduleTag.FREE_PLAY, ScheduleTag.TABLETOP],
    startTime: 1000,
    endTime: 2000,
  },
  {
    name: "Warhammer Free Play",
    location: "Ex Hall Floor 2: Inman Park, Cabbagetown",
    description:
      "Join Warhammer Club for totally free Warhammer play in Inman Park and Cabbagetown!",
    tags: [ScheduleTag.FREE_PLAY, ScheduleTag.TABLETOP],
    startTime: 1000,
    endTime: 2000,
  },
//   {
//     name: "Gourd Mural",
//     location: "Ex Hall Floor 2: Highlands",
//     description:
//       "Want to take pictures of you and your friends  !",
//     tags: [ScheduleTag.FREE_PLAY, ScheduleTag.TABLETOP],
//     startTime: 1000,
//     endTime: 2000,
//   },
];
