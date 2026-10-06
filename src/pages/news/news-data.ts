import type { NewsItem } from "@/shared/types/types";

/** Newest first. Dates are ISO (YYYY-MM-DD). */
export const news: NewsItem[] = [
	{
		slug: "nebulacon-2026-recap",
		category: "Community",
		title: "NebulaCon 2026: Everything You Missed",
		date: "2026-09-21",
		author: "Emily Zhao, Head of Marketing",
		excerpt:
			"Twenty thousand of you joined us in San Diego for cosplay, tournaments and our first look at Project Aether.",
		image: "/images/articles/nebulacon/nebulacon-featured.webp",
		content: `
What a weekend. Over 20,000 of you joined us in San Diego for our biggest celebration yet, and the energy in the hall was electric from the first minute to the last.

![The NebulaCon 2026 show floor](/images/articles/nebulacon/nebulacon-1.webp)

## Cosplay Contest Winners

The level of craft this year was unreal. We saw everything from 3D-printed Chrono-Blades to hand-stitched leather operative armor.

1. **Grand Prize:** Sarah K. as *The Void Walker*, complete with an animatronic tail
2. **Runner Up:** Mike T. as *Agent Zero* from Cyber Strike
3. **Crowd Favourite:** The Hourglass Guard, a group of five as Echoes of Eternity's Wardens

## Cyber Strike Invitational

Team Halcyon took home the trophy after a reverse sweep in the grand final. The full VOD is on our YouTube channel.

## The Big Reveal: Project Aether

We officially teased our next original universe, codenamed **Project Aether**. We can't say much yet, but those at the keynote saw a glimpse of a city that refuses to obey gravity.

![Project Aether concept art](/images/articles/nebulacon/nebulacon-2.webp)

> "Aether is the most ambitious thing we have ever attempted, and it's being built by all three of our studios together."

Thank you to everyone who came out. We build these worlds, but you bring them to life. See you next year.
`,
	},
	{
		slug: "cyber-strike-season-6-patch-notes",
		category: "Patch Notes",
		title: "Cyber Strike Season 6 'Blackout': Patch Notes",
		date: "2026-08-27",
		author: "Cyber Strike Live Team",
		excerpt:
			"A new map, a new operative, the return of Uplink, and a round of weapon balancing shaped by your feedback.",
		image: "/images/articles/cyberstrike-s4/cyberstrike-s4-featured.webp",
		content: `
Operatives, welcome to Season 6. We've heard your feedback on the ranked meta and made significant changes to keep every engagement fair and readable.

![Cyber Strike Season 6 gameplay](/images/articles/cyberstrike-s4/cyberstrike-s4-1.webp)

## New Map: Substation

A flooded power plant beneath Neo-Kowloon. Three lanes, two levels, and a central generator that either team can overload to kill the lights for 15 seconds.

## New Operative: Lumen

A recon specialist whose flare drone reveals enemies through smoke and darkness. Pairs naturally with Substation's blackout mechanic.

## Weapon Balancing

* **Viper SMG:** Damage falloff now starts at 18m (was 22m). It was dominating mid-range too easily.
* **Titan LMG:** First 10 shots of the recoil pattern smoothed for more reliable suppressive fire.
* **Nano-Blade:** Attack speed reduced by 10%.

## Map Updates

* **Sector 7:** New cover in the central courtyard to break up long sniper sightlines.
* **Night Market:** Improved lighting in the lower tunnels.

## Uplink Returns

Secure the data, extract the package. One life per round, no respawns. Uplink is back in the competitive rotation for the whole season.
`,
	},
	{
		slug: "wellness-week-2026",
		category: "Culture",
		title: "Why We Close the Studio Every June",
		date: "2026-06-24",
		author: "Sarah Kessler, CEO & Co-Founder",
		excerpt:
			"Every summer all three studios shut down for Wellness Week. Here's why it's the best production decision we make all year.",
		image: "/images/articles/wellness-week/wellness-week-featured.webp",
		content: `
Burnout is the enemy of creativity. That's why every June, all three Nebula studios shut down completely for Wellness Week, on top of everyone's regular paid time off.

![Team hike during Wellness Week](/images/articles/wellness-week/wellness-week-1.webp)

## No Email, No Slack

We ask everyone to disconnect completely. Go hiking, play other people's games, learn to bake bread. The builds will still be there when you get back.

## Why It Works

We shipped Echoes of Eternity without a single mandatory crunch week, and we're proud of that. Wellness Week is one part of how we got there, alongside realistic scoping and producers empowered to cut features before they cut people's evenings.

> "Great ideas don't happen when you're exhausted. They happen when you have room to dream."

### The Results

Every year, our engagement survey peaks in the month after Wellness Week. Our voluntary attrition is less than a third of the industry average. And the work is better for it.
`,
	},
	{
		slug: "void-walker-at-five-sound-design",
		category: "Dev Diary",
		title: "Void Walker at Five: The Sound Design That Defined It",
		date: "2026-04-14",
		author: "James Wilson, Audio Director",
		excerpt:
			"Five years on, our audio team looks back at how they built a horror game you play with your ears.",
		image: "/images/articles/bts-voidwalker/bts-voidwalker-featured.webp",
		content: `
When we set out to create **Void Walker**, we knew audio couldn't just be an aesthetic choice. It had to be a gameplay mechanic. In a game where you're hunted by something you can't always see, your ears become your most valuable survival tool.

![Audio engineer at work](/images/articles/bts-voidwalker/bts-voidwalker-1.webp)

## The "Presence" Engine

We built a custom audio occlusion system called Presence. Rather than tracing rays for every sound, which gets expensive fast, we used a voxel-based approach to model how sound travels through the station's twisting corridors. That let us simulate realistic echo, muffling and distortion in real time on 2021 hardware.

> "True horror isn't a jump scare. It's the sound of footsteps stopping just outside your door."

## Foley: Getting Dirty

We spent weeks in abandoned warehouses and industrial parks recording:

* Metal groaning under stress
* Hydraulic fluid dripping onto concrete
* The particular echo of heavy boots on steel grating

![Foley recording setup](/images/articles/bts-voidwalker/bts-voidwalker-2.webp)

## Five Years Later

Presence now powers the audio in every Nebula game, including Cyber Strike, where hearing an enemy's footsteps through a wall is the difference between winning and losing a round. Not bad for a tool we built to scare people.
`,
	},
	{
		slug: "scaling-echoes-launch",
		category: "Tech Blog",
		title: "Scaling for Two Million Concurrent Players",
		date: "2026-01-29",
		author: "Elena Rodriguez, Lead Engineer",
		excerpt:
			"How our backend team kept Echoes of Eternity online through the biggest launch in Nebula's history.",
		image: "/images/articles/server-upgrade/server-upgrade-featured.webp",
		content: `
When *Echoes of Eternity* launched last November, we hit two million concurrent players in the first four hours. Here's how our infrastructure stayed standing when the floodgates opened.

![Server infrastructure](/images/articles/server-upgrade/server-upgrade-1.webp)

## The Stack

We run a hybrid cloud setup orchestrated with Kubernetes. Our biggest challenge wasn't matchmaking. It was the write-heavy load from player inventory updates, which spiked by 40x within an hour of launch.

## Sharding by Region

We shard player data dynamically by region:

* NA-East and NA-West
* EU-West
* Asia-Pacific

This kept latency under 50ms for 90% of players, even at peak.

## What We'd Do Differently

We under-provisioned our login queue service and spent the first 90 minutes scaling it by hand. We now load-test every launch at 3x our most optimistic forecast, because sometimes the optimistic forecast is wrong in the right direction.
`,
	},
	{
		slug: "art-of-starlight-drift",
		category: "Art",
		title: "The Architecture of Starlight Drift",
		date: "2025-11-06",
		author: "Marcus Johnson, Art Director",
		excerpt:
			"A concept art retrospective on designing race tracks that defy physics and gravity.",
		image: "/images/articles/starlight-arch/starlight-arch-featured.webp",
		content: `
In *Starlight Drift*, gravity is a suggestion, not a law. When we built the original tracks back in 2013, our art team looked to Möbius strips and non-Euclidean geometry for inspiration. The goal was tracks that bend your brain while you drive them.

![Track concept art](/images/articles/starlight-arch/starlight-arch-1.webp)

## The "Neon-Gothic" Style

We wanted the tracks to feel ancient yet futuristic, so we combined gothic cathedral architecture with cyberpunk neon. That contrast gave Starlight a visual identity that set it apart from every other racer on the shelf.

### Key References

* Brutalist architecture
* Classic F1 circuit layouts
* Bioluminescent deep-sea creatures

## Rebuilding for VR

The 2022 Remaster forced us to rethink everything. A loop that looks thrilling on a monitor can be nauseating in a headset, so every track was re-sculpted with a stable horizon line the player's eye can lock onto.
`,
	},
];

export const getArticle = (slug: string) => news.find((n) => n.slug === slug);
