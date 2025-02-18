import { ScheduleItemProps } from "./scheduleItem";
import { ScheduleTag } from "./tagBox";
import { isMobile } from "react-device-detect";
import classNames from "classnames";

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

  {
    name: "Panel - Thrifiting for Quality in Cosplay",
    location: "Instructional Center 111",
    description:
      "You've probably heard people recommend thrift shopping for cosplay pieces before, but how do you actually DO that? How do you find the right pieces? How do people seem to crank out new cosplays all the time from seemingly nothing? That's what this session is all about! Take it from a cosplayer of 10 years who has never bought a store-made cosplay: everything can be secondhand!",
    tags: [ScheduleTag.PANEL, ScheduleTag.ARTS_AND_CRAFTS],
    startTime: 1030,
    endTime: 1130,
  },

  {
    name: "Panel - BL/GL: Kiss, Marry, Pass",
    location: "Instructional Center 105",
    description:
      "Come play an immersive game of Kiss, Marry, Pass with your fellow BL/GL lovers! We listen and we do not judge!",
    tags: [ScheduleTag.PANEL],
    startTime: 1030,
    endTime: 1130,
  },

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
    location: "Instructional Center Room 109",
    description: "Registration for the Mario Kart 8 tournament",
    tags: [ScheduleTag.TOURNAMENT, ScheduleTag.GAMING],
    startTime: 1030,
    endTime: 1400,
  },

  {
    name: "TTRPG Free Play Block 1",
    time: "10:30am-3:00pm",
    location: "Ex Hall Floor 2: Kirkwood",
    description: "",
    advancedDescription: (
      <div>
        <div>
          Come join GTD&D Club, as well as the UGA D&D Club and the Pathfinder
          Society for some tabletop free play! Games will be divided into two
          blocks, one from 10:30am-3pm and the other from 3:30pm-8pm. The games
          being run during <b className="font-bold">block one</b> are:
        </div>
        <br />
        <div
          className={classNames(
            "flex flex-col items-center justify-center text-center"
          )}
        >
          <div
            className={classNames(
              "flex flex-row items-center justify-center font-inter text-white text-center",
              { "h-[3vw] text-[2vw]": !isMobile },
              { "text-[6vw] mb-[3vw]": isMobile }
            )}
          >
            Game 1: Run by Matt from GTD&D
          </div>
          <br />
          <div>
            <b className="font-bold">System:</b> Pathfinder 2e
            <br /> <br />
            <b className="font-bold">Style:</b> Pre-Prepped
            <br /> <br />
            <b className="font-bold">Description:</b> A blizzard interrupts your
            travel, a roadside lodge welcomes you, a sense of unease fills the
            air. Someone has gone missing in the snow, will you help find them?
            This Pathfinder 2nd Edition session will feature at least one
            mystery, one knight, one squire, a cozy living room, an elk, some
            porridge, plenty of roleplaying, and a bit of potentially difficult
            combat. This is open to both new and experienced PF2E players.
            <br /> <br />
            <b className="font-bold">Player Specifications:</b> 5 players, 2nd
            level characters, 50gp starting gold.
            <br /> <br />
            <b className="font-bold">Contact:</b> @gokumc3 on Discord.
            <br /> <br />
            <b className="font-bold">Notes:</b> I can also probably do walk-ups
            if people wander into the room and want to play.
          </div>
        </div>
        <br />
        <div
          className={classNames(
            "flex flex-col items-center justify-center text-center"
          )}
        >
          <div
            className={classNames(
              "flex flex-row items-center justify-center font-inter text-white text-center",
              { "h-[3vw] text-[2vw]": !isMobile },
              { "text-[6vw] mb-[3vw]": isMobile }
            )}
          >
            Game 2: Run by Miles Rosenstrauch from GTD&D
          </div>
          <br />
          <div>
            <b className="font-bold">System:</b> D&D 5e
            <br /> <br />
            <b className="font-bold">Style:</b> Pre-Prepped
            <br /> <br />
            <b className="font-bold">Description:</b> Welcome to the Espial
            Empire, the richest and most powerful nation in all the lands. You
            are a knight of the Espial Empire's Tax Collection Division. Your
            job is to go to towns that haven't payed their monthly tribute, and
            "convince" them to pay up -- by force, if necessary.
            <br /> <br />
            Funnily enough, the mining outpost of Droth is late on their
            tribute. They said they have no funds because they've been getting
            attacked by a beast. They mentioned some sort of "Mothman."
            Whatever. It's probably just a hoax they made up to get out of
            paying their tribute.
            <br /> <br />
            Well, what are you waiting for? Droth is just a few miles away from
            the capital. Now go out there and collect some taxes!
            <br /> <br />
            Expect high-stakes tax collection, high-octane chase scenes, and
            high-flying moths.
            <br /> <br />
            <b className="font-bold">Player Specifications:</b> 5 players, level
            3.
            <br /> <br />
            <b className="font-bold">Contact:</b> @mistermooster on Discord,
            kilometers550@gmail.com for email.
          </div>
        </div>
        <br />
        <div
          className={classNames(
            "flex flex-col items-center justify-center text-center"
          )}
        >
          <div
            className={classNames(
              "flex flex-row items-center justify-center font-inter text-white text-center",
              { "h-[3vw] text-[2vw]": !isMobile },
              { "text-[6vw] mb-[3vw]": isMobile }
            )}
          >
            Game 3: Run by Maddie from GTD&D
          </div>
          <br />
          <div>
            <b className="font-bold">System:</b> Fallen London TTRPG
            <br /> <br />
            <b className="font-bold">Style:</b> Pre-Prepped
            <br /> <br />
            <b className="font-bold">Description:</b> The Disappearance of the
            Transfigured Poet
            <br /> <br />
            Sunlight does not reach London anymore, not since the Fall fourty
            years ago, when the entire city was stolen and sequestered
            underground by millions of bats. No, her rays do not shine this far
            down under the Earth. The light here comes from London's gas-lamps
            and the faintly gleaming glim-stars, sparkling from the cavern
            ceiling above. The rules are *different* here. Death isn't usually
            permanent. Everything can change, from streets, to names, to even
            the flesh. But these differences allow fantastic and terrifying
            things to exist here. Creatures and concoctions unlike anything the
            Surface has ever seen.
            <br /> <br />
            Most of all, there are monsters in the Neath. And you and your
            associates have vowed to hunt them. But the hunt begins slowly, as
            all great things do, with a favor owed to gain your very first lead
            on how to kill the creature in your sights.
            <br /> <br />
            That favor? A woman named the Ambitious Muse needs you to find her
            missing protégé. A simple task, surely. But nothing is ever very
            simple in the Neath...
            <br /> <br />
            Pregenerated characters provided, familiarity with the system or
            Fallen London setting not necessary!
            <br /> <br />
            Contains themes of drug use, body horror, and real world religion
            (Christianity).
            <br /> <br />
            <b className="font-bold">Player Specifications:</b> 3-5 players,
            pre-generated characters provided.
            <br /> <br />
            <b className="font-bold">Contact:</b> @Bubblyishyoshi on Discord.
            <br /> <br />
            <b className="font-bold">Notes:</b> I'm fine with taking walk-ups,
            but I'd like to be able to send lore/setting primers to them
            beforehand!
          </div>
        </div>
      </div>
    ),
    tags: [ScheduleTag.FREE_PLAY, ScheduleTag.TABLETOP],
    startTime: 1030,
    endTime: 1500,
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

  {
    name: "Panel - Star Wars: Rewrite",
    location: "Instructional Center 105",
    description:
      'If you could change any ending, scene, death, or more in any Star Wars media, what would you change and why? Join us to dicuss your own ideas, alternate scenarios, and "What If\'s" in a Galaxy Far, Far Away!',
    tags: [ScheduleTag.PANEL],
    startTime: 1130,
    endTime: 1300,
  },

  {
    name: "Riot Games Panel",
    location: "Main Stage",
    description:
      "A panel of several Riot Games designers and developers at WreckCon. Join us with your questions about the game development process!",
    tags: [ScheduleTag.EVENT, ScheduleTag.PANEL, ScheduleTag.GAMING],
    startTime: 1200,
    endTime: 1300,
  },

  {
    name: "Panel - Japanese Music on the Rise",
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
    name: "Panel - Intro to Lancer RPG Lore",
    location: "Instructional Center 105",
    description:
      "Do you like mechs? Do you like sci-fi? Do you like a deeply imperfect world striving for the better while needing to redress the sins of the past? Then the world of Lancer RPG is for you! This panel will introduce prospective players to the basics of the spacefaring, mech-filled, reality-bending world and lore of the game and answer any questions they might have. Content warnings for world-ending events, colonialism, war, oppression, classism, and genocide.",
    tags: [ScheduleTag.PANEL, ScheduleTag.TABLETOP],
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
    location: "Instructional Center Room 109",
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
    name: "Panel - Want to start a YouTube channel? Here's what you need to know!",
    location: "Instructional Center 105",
    description:
      "Get tips and tricks on what it's like to be a Youtuber from someone who has been creating video for over 10 years!",
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
    startTime: 1515,
    endTime: 1545,
  },

  {
    name: "TTRPG Free Play Block 2",
    time: "3:30pm-8:00pm",
    location: "Ex Hall Floor 2: Kirkwood",
    description: "",
    advancedDescription: (
      <div>
        <div>
          Come join GTD&D Club, as well as the UGA D&D Club and the Pathfinder
          Society for some tabletop free play! Games will be divided into two
          blocks, one from 10:30am-3pm and the other from 3:30pm-8pm. The games
          being run during <b className="font-bold">block two</b> are:
        </div>
        <br />
        <div
          className={classNames(
            "flex flex-col items-center justify-center text-center"
          )}
        >
          <div
            className={classNames(
              "flex flex-row items-center justify-center font-inter text-white text-center",
              { "h-[3vw] text-[2vw]": !isMobile },
              { "text-[6vw] mb-[3vw]": isMobile }
            )}
          >
            Game 1: Run by Maddie from GTD&D
          </div>
          <br />
          <div>
            <b className="font-bold">System:</b> Fallen London TTRPG
            <br /> <br />
            <b className="font-bold">Style:</b> Pre-Prepped
            <br /> <br />
            <b className="font-bold">Description:</b> The Disappearance of the
            Transfigured Poet
            <br /> <br />
            Sunlight does not reach London anymore, not since the Fall fourty
            years ago, when the entire city was stolen and sequestered
            underground by millions of bats. No, her rays do not shine this far
            down under the Earth. The light here comes from London's gas-lamps
            and the faintly gleaming glim-stars, sparkling from the cavern
            ceiling above. The rules are *different* here. Death isn't usually
            permanent. Everything can change, from streets, to names, to even
            the flesh. But these differences allow fantastic and terrifying
            things to exist here. Creatures and concoctions unlike anything the
            Surface has ever seen.
            <br /> <br />
            Most of all, there are monsters in the Neath. And you and your
            associates have vowed to hunt them. But the hunt begins slowly, as
            all great things do, with a favor owed to gain your very first lead
            on how to kill the creature in your sights.
            <br /> <br />
            That favor? A woman named the Ambitious Muse needs you to find her
            missing protégé. A simple task, surely. But nothing is ever very
            simple in the Neath...
            <br /> <br />
            Pregenerated characters provided, familiarity with the system or
            Fallen London setting not necessary!
            <br /> <br />
            Contains themes of drug use, body horror, and real world religion
            (Christianity).
            <br /> <br />
            <b className="font-bold">Player Specifications:</b> 3-5 players,
            pre-generated characters provided.
            <br /> <br />
            <b className="font-bold">Contact:</b> @Bubblyishyoshi on Discord.
            <br /> <br />
            <b className="font-bold">Notes:</b> I'm fine with taking walk-ups,
            but I'd like to be able to send lore/setting primers to them
            beforehand!
          </div>
        </div>
        <br />
        <div
          className={classNames(
            "flex flex-col items-center justify-center text-center"
          )}
        >
          <div
            className={classNames(
              "flex flex-row items-center justify-center font-inter text-white text-center",
              { "h-[3vw] text-[2vw]": !isMobile },
              { "text-[6vw] mb-[3vw]": isMobile }
            )}
          >
            Game 2: Run by Gracie Crofton from GTD&D
          </div>
          <br />
          <div>
            <b className="font-bold">System:</b> Lancer RPG
            <br /> <br />
            <b className="font-bold">Style:</b> Walk-Up
            <br /> <br />
            <b className="font-bold">Description:</b> As a group of mech pilots
            called Lancers, you, the players, will breach a Metavault—the warped
            pocket-dimension of an extradimensional being. Its forces will most
            likely respond with violence as the very fabric of reality twists
            around you. Expect mech-based combat in a puzzle-like space dungeon!
            <br /> <br />
            Enter its labyrinthine chambers. Burn out its architecture. Smash
            all its fine things, and eat them. Make room for a greater one.
            <br /> <br />
            This will be a LL1 Lancer RPG combat-focused one-shot open to 3-5
            players, using preconstructed character sheets. Beginners and
            experienced players alike are welcome! Please bring a laptop if you
            have one, as we will be using Owlbear Rodeo for battle maps.
            <br /> <br />
            Likely trigger warnings include gore, violence, existentialism, and
            derealization.
            <br /> <br />
            <b className="font-bold">Player Specifications:</b> 3-5 LL1 Players.
            <br /> <br />
            <b className="font-bold">Notes:</b> If anyone wants to bring their
            own character sheet, that's totally fine. I can always be reached on
            Discord: @sailorspellcheck.
          </div>
        </div>
        <br />
        <div
          className={classNames(
            "flex flex-col items-center justify-center text-center"
          )}
        >
          <div
            className={classNames(
              "flex flex-row items-center justify-center font-inter text-white text-center",
              { "h-[3vw] text-[2vw]": !isMobile },
              { "text-[6vw] mb-[3vw]": isMobile }
            )}
          >
            Game 3: Run by John Degonia from GTD&D
          </div>
          <br />
          <div>
            <b className="font-bold">System:</b> Draw Steel
            <br /> <br />
            <b className="font-bold">Style:</b> Pre-Prepped
            <br /> <br />
            <b className="font-bold">Description:</b> Come try Draw Steel! A new
            ttrpg from award winning design studio MCDM. Step into the role of
            heroes in this module as you track down and apprehend a group of
            evil dwarves who has taken captives from a nearby town. This system
            prioritizes tactical combat and cinematic, powerful characters in a
            fantasy setting. You will be able to pick from a variety of
            pregenerated characters.
            <br /> <br />
            <b className="font-bold">Player Specifications:</b> 4 players, 1st
            level, pre-generated characters provided.
            <br /> <br />
            <b className="font-bold">Contact:</b> @heyitsjohn on Discord.
            <br /> <br />
            <b className="font-bold">Notes:</b> Players must bring laptops for
            this oneshot.
          </div>
        </div>
        <br />
        <div
          className={classNames(
            "flex flex-col items-center justify-center text-center"
          )}
        >
          <div
            className={classNames(
              "flex flex-row items-center justify-center font-inter text-white text-center",
              { "h-[3vw] text-[2vw]": !isMobile },
              { "text-[6vw] mb-[3vw]": isMobile }
            )}
          >
            Game 4: Run by Chase from ATLRPG
          </div>
          <br />
          <div>
            <b className="font-bold">System:</b> Deadlands Classic
            <br /> <br />
            <b className="font-bold">Style:</b> Walk-Up
            <br /> <br />
            <b className="font-bold">Description:</b> You've been riding with
            this crew for several weeks, it ain't easy heading west, but these
            cowpokes seem tougher than your average tinhorn.
            <br /> <br />
            After crossing the deserts of Nevada you've finally made it to the
            land of opportunity; California. One more town visit to load up on
            supplies and then it's straight to the shattered coast to do some
            prospectin.
            <br /> <br />
            That town visit will end up more than you bargained for though....
            Time to be the big damn heroes.
            <br /> <br />
            <b className="font-bold">Player Specifications:</b> 4-6 players,
            character creation + 15 bounty. Pre-generated characters will be
            available.
            <br /> <br />
            <b className="font-bold">Notes:</b> This game will be more suitable
            for those over the age of 16.
          </div>
        </div>
        <br />
      </div>
    ),
    tags: [ScheduleTag.FREE_PLAY, ScheduleTag.TABLETOP],
    startTime: 1530,
    endTime: 2000,
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

  // {
  //   name: "Panel - Drones 101: Taking Flight",
  //   location: "Instructional Center 111",
  //   description:
  //     "Ready to take to the skies? Join us for a fun and approachable panel where we'll cover everything you need to know about getting started with drones. From picking the right gear to mastering your first flight, we'll help you turn curiosity into confidence!",
  //   tags: [ScheduleTag.PANEL],
  //   startTime: 1745,
  //   endTime: 1845,
  // },

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
