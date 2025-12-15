
import type { NewsItem } from "@/shared/types/types";

export const news: NewsItem[] = [
  {
    id: "1",
    category: "Development",
    title: "Behind the Scenes: The Sound Design of Void Walker",
    date: "OCT 24, 2024",
    excerpt:
      "Our audio team breaks down how they created the terrifying soundscapes...",
    image: "/images/articles/bts-voidwalker/bts-voidwalker-featured.webp",
    content: `
# The Sound of Silence: Crafting Void Walker's Audio
*By James Aris, Audio Lead*

When we set out to create **Void Walker**, we knew that audio wouldn't just be an aesthetic choice—it had to be a gameplay mechanic. In a game where you are hunted by something you cannot always see, your ears become your most valuable survival tool.

![Sound Engineer Working](/images/articles/bts-voidwalker/bts-voidwalker-1.webp)

## The "Presence" Engine

We developed a custom audio occlusion system called the "Presence Engine". Unlike standard ray-tracing for audio, which can be CPU intensive, we utilized a voxel-based approach to determine how sound propagates through the station's twisting corridors. This allows us to simulate realistic echoing, muffling, and distortion in real-time.

> "True horror isn't a jump scare. It's the sound of footsteps stopping just outside your door."

### Foley Recording: Getting Dirty
We spent weeks in abandoned warehouses and industrial parks recording:
*   Metal groaning under stress
*   Hydraulic fluid dripping on concrete
*   The unique echo of heavy boots on grating

![Foley Recording Setup](/images/articles/bts-voidwalker/bts-voidwalker-2.webp)

The result is a soundscape that feels alive, oppressive, and utterly terrifying. We can't wait for you to hear it.
    `,
  },
  {
    id: "2",
    category: "Community",
    title: "NebulaCon 2024: Everything You Missed",
    date: "SEP 15, 2024",
    excerpt:
      "A recap of our biggest community event yet, featuring cosplay winners and...",
    image: "/images/articles/nebulacon/nebulacon-featured.webp",
    content: `
# NebulaCon 2024 Recap
What a weekend! Over 15,000 of you joined us in San Diego for our biggest celebration of gaming culture yet. The energy in the hall was absolutely electric.

![Convention Floor](/images/articles/nebulacon/nebulacon-1.webp)

## Cosplay Contest Winners
The level of craft this year was insane. We saw everything from 3D-printed armor to hand-stitched leather.
1.  **Grand Prize:** Sarah K. as *The Void Walker* (That animatronic tail!)
2.  **Runner Up:** Mike T. as *Agent Zero* from Cyber Strike.

## The Big Reveal: Project Aether
We officially teased our next project, codenamed **Project: Aether**. While we can't say much yet, those who attended the keynote saw a glimpse of a floating city that defied gravity.

![Concept Art Teaser](/images/articles/nebulacon/nebulacon-2.webp)

Thank you to everyone who came out. We build these worlds, but you bring them to life.
    `,
  },
  {
    id: "3",
    category: "Patch Notes",
    title: "Cyber Strike: Season 4 Update Notes",
    date: "AUG 30, 2024",
    excerpt:
      "Detailed changes to weapon balancing, map rotations, and the new competitive mode.",
    image: "/images/articles/cyberstrike-s4/cyberstrike-s4-featured.webp",
    content: `
# Season 4: "Neon Nights" is Live!

Agents, welcome to Season 4. We've heard your feedback on the ranked meta and have made significant adjustments to ensure a fair and competitive playing field.

![Cyber Strike Gameplay](/images/articles/cyberstrike-s4/cyberstrike-s4-1.webp)

### Weapon Balancing
*   **Viper SMG:** Damage falloff increased at 20m range. It was dominating mid-range encounters too easily.
*   **Titan LMG:** Recoil pattern smoothed out for the first 10 shots, making it more viable for suppressive fire.
*   **Nano-Blade:** Attack speed reduced by 10%.

### Map Updates
*   **Sector 7:** Added new cover options in the central courtyard to break up long sniper sightlines.
*   **Night Market:** Lighting improved in the lower tunnels to increase visibility.

### New Mode: Uplink
Secure the data, extract the package. One life per round. No respawns. This is competitive play at its purest. Good luck out there.
    `,
  },
  {
    id: "4",
    category: "Tech Blog",
    title: "Scaling Servers for 10 Million Players",
    date: "AUG 12, 2024",
    excerpt:
      "How our backend engineering team managed the massive influx of players during the Echoes launch.",
    image: "/images/articles/server-upgrade/server-upgrade-featured.webp",
    content: `
# Handling the Flood: Server Architecture

When *Echoes of Eternity* launched, we saw 2 million concurrent users in the first 4 hours. Here is how our infrastructure stayed standing when the floodgates opened.

![Server Room](/images/articles/server-upgrade/server-upgrade-1.webp)

## The Stack
We utilized a hybrid cloud approach, leveraging Kubernetes for orchestration. Our primary challenge was the database write-heavy load from player inventory updates.

### Sharding Strategy
We implemented dynamic sharding based on player region.
*   NA-East
*   EU-West
*   Asia-Pacific

This ensured latency remained under 50ms for 90% of players, even during peak loads.
    `,
  },
  {
    id: "5",
    category: "Art",
    title: "The Architecture of Starlight Drift",
    date: "JUL 04, 2024",
    excerpt:
      "Concept art showcase: Designing race tracks that defy physics and gravity.",
    image: "/images/articles/starlight-arch/starlight-arch-featured.webp",
    content: `
# Designing the Impossible Track

In *Starlight Drift*, gravity is a suggestion, not a law. Our art team looked at Mobius strips and non-Euclidean geometry for inspiration to create tracks that are mind-bending to drive on.

![Track Concept Art](/images/articles/starlight-arch/starlight-arch-1.webp)

## The "Neon-Gothic" Style
We wanted the tracks to feel ancient yet futuristic. We combined gothic cathedral architecture with cyberpunk neon aesthetics. This contrast creates a unique visual identity that separates Starlight from other racers.

### Key References
*   Brutalist architecture
*   F1 circuit layouts
*   Bioluminescent deep-sea creatures

Check out the full gallery below to see the evolution from sketch to final 3D asset.
    `,
  },
  {
    id: "6",
    category: "Culture",
    title: "Wellness Week at Nebula",
    date: "JUN 20, 2024",
    excerpt:
      "Why we take a week off every summer to recharge, learn, and disconnect.",
    image: "/images/articles/wellness-week/wellness-week-featured.webp",
    content: `
# Recharging the Creative Battery

Burnout is the enemy of creativity. That is why every June, Nebula Studios shuts down for "Wellness Week".

![Team Hike](/images/articles/wellness-week/wellness-week-1.webp)

## No Emails, No Slack
We encourage our team to disconnect completely. Go hiking, play video games, learn to bake bread. Work will still be there when you get back.

### The Results
We've found that when the team returns, productivity and morale skyrocket. Great ideas don't happen when you're exhausted. They happen when you have space to dream.
    `,
  },
];
