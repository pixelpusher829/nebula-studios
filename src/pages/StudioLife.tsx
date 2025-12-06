import React from "react";
import {
  Users,
  Trophy,
  Zap,
  Heart,
  Target,
  Lightbulb,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import grid1 from "@/images/studio/grid-1.webp";
import grid2 from "@/images/studio/grid-2.webp";
import grid3 from "@/images/studio/grid-3.webp";
import grid4 from "@/images/studio/grid-4.webp";
import sarah from "@/images/studio/profiles/sarah.webp";
import david from "@/images/studio/profiles/david.webp";
import elena from "@/images/studio/profiles/elena.webp";
import marcus from "@/images/studio/profiles/marcus.webp";
import emily from "@/images/studio/profiles/emily.webp";
import james from "@/images/studio/profiles/james.webp";
import aisha from "@/images/studio/profiles/aisha.webp";
import tom from "@/images/studio/profiles/tom.webp";

const teamMembers = [
  {
    name: "Sarah Connor",
    role: "CEO & Founder",
    img: `${sarah}`,
  },
  {
    name: "David Chen",
    role: "Creative Director",
    img: `${david}`,
  },
  {
    name: "Elena Rodriguez",
    role: "Lead Engineer",
    img: `${elena}`,
  },
  {
    name: "Marcus Johnson",
    role: "Art Director",
    img: `${marcus}`,
  },
  {
    name: "Emily Zhao",
    role: "Head of Marketing",
    img: `${emily}`,
  },
  {
    name: "James Wilson",
    role: "Audio Director",
    img: `${james}`,
  },
  {
    name: "Aisha Patel",
    role: "Senior Producer",
    img: `${aisha}`,
  },
  {
    name: "Tom Baker",
    role: "Tech Lead",
    img: `${tom}`,
  },
];

const values = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Player First",
    desc: "Every decision starts with the player experience.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Inclusive Worlds",
    desc: "Gaming is for everyone. Our worlds reflect that.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Excellence",
    desc: "We don't ship until it's ready. Period.",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation",
    desc: "We take risks to push the medium forward.",
  },
];

export const StudioLife: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-studio-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="bg-studio-accent/5 absolute top-0 right-0 h-full w-1/2 translate-x-1/2 transform rounded-full blur-3xl"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h4 className="text-studio-accent font-display mb-4 font-bold tracking-widest uppercase">
              About Nebula
            </h4>
            <h1 className="font-display mb-6 text-5xl font-bold text-white md:text-7xl">
              ARCHITECTS OF
              <br />
              THE IMPOSSIBLE
            </h1>
            <p className="text-studio-light font-sans text-xl leading-relaxed">
              We are a collective of dreamers, engineers, and storytellers
              dedicated to pushing the boundaries of interactive entertainment.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* 4-Image Staggered Asymmetrical Grid */}
            <div className="relative grid min-h-[500px] grid-cols-2 gap-4 md:min-h-[600px] md:gap-6">
              {/* Column 1 */}
              <div className="flex flex-col gap-6 pt-12">
                {/* Img 1: Tall */}
                <div className="group relative h-64 w-full overflow-hidden rounded-2xl">
                  <img
                    src={grid1}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Team"
                  />
                </div>
                {/* Img 2: Square */}
                <div className="group relative ml-auto h-40 w-4/5 overflow-hidden rounded-2xl">
                  <img
                    src={grid2}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Meeting"
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-6">
                {/* Img 3: Small Landscape */}
                <div className="group relative h-32 w-full overflow-hidden rounded-2xl">
                  <img
                    src={grid3}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Culture"
                  />
                </div>
                {/* Img 4: Tallest */}
                <div className="group shadow-studio-accent/10 relative w-full flex-1 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={grid4}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Office"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-display text-3xl font-bold text-white">
                From Garage to Global
              </h3>
              <p className="text-studio-light leading-relaxed">
                Founded in 2010, Nebula Studios started with three friends and a
                shared vision. Today, we are a diverse team of 200+ creators
                working across three continents. Our journey has been defined by
                a relentless pursuit of quality and a refusal to compromise on
                our creative vision.
              </p>
              <p className="text-studio-light leading-relaxed">
                We believe in crunch-free development, unlimited creativity, and
                putting the player experience above all else. Our studio culture
                is built on trust, autonomy, and the shared joy of making things
                that matter.
              </p>

              <div className="mt-6 border-t border-white/5 pt-6">
                <p className="border-studio-accent border-l-4 pl-4 text-lg font-bold text-white italic">
                  "We don't just make games. We build the memories players will
                  keep for a lifetime."
                </p>
                <div className="text-studio-light mt-2 pl-5 text-sm tracking-wider uppercase">
                  - Sarah Connor, CEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-studio-dark border-y border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display mb-12 text-center text-4xl font-bold text-white uppercase">
            Our DNA
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((val, i) => (
              <div
                key={i}
                className="bg-studio-card hover:border-studio-accent group rounded-xl border border-white/5 p-8 transition-colors"
              >
                <div className="bg-studio-accent/10 text-studio-accent group-hover:bg-studio-accent mb-6 flex h-12 w-12 items-center justify-center rounded-lg transition-colors group-hover:text-white">
                  {val.icon}
                </div>
                <h3 className="font-display mb-3 text-xl font-bold text-white">
                  {val.title}
                </h3>
                <p className="text-studio-light text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-studio-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h4 className="text-studio-accent font-display mb-2 font-bold tracking-widest uppercase">
                Leadership
              </h4>
              <h2 className="font-display text-4xl font-bold text-white">
                MEET THE TEAM
              </h2>
            </div>
            <button
              onClick={() => navigate("/careers")}
              className="hover:text-studio-black hidden rounded border border-white/20 px-6 py-2 text-sm font-bold text-white uppercase transition-all hover:bg-white md:block"
            >
              Join Us
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <div key={i} className="group">
                <div className="bg-studio-card relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={member.img}
                    className="aspect-[3/4] w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    alt={member.name}
                  />
                  <div className="from-studio-black/80 absolute inset-0 flex items-end bg-gradient-to-t to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="text-white">
                      <div className="text-lg font-bold">{member.name}</div>
                      <div className="text-studio-accent text-sm font-bold uppercase">
                        {member.role}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:hidden">
                  <h3 className="text-lg font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-studio-light text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / History */}
      <section className="bg-studio-card relative overflow-hidden py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h2 className="font-display mb-16 text-center text-4xl font-bold text-white uppercase">
            Our Journey
          </h2>

          <div className="relative">
            {/* Center Line (Desktop) / Left Line (Mobile) */}
            <div className="absolute top-0 bottom-0 left-4 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {/* Item 1 (Left) */}
              <div className="relative flex flex-col items-center justify-between md:flex-row">
                <div className="pl-12 md:w-[calc(50%-3rem)] md:pl-0 md:text-right">
                  <span className="text-studio-accent mb-1 block text-sm font-bold tracking-widest uppercase">
                    2010
                  </span>
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    The Beginning
                  </h3>
                  <p className="text-studio-light">
                    Nebula Studios is founded in a small garage in Seattle by
                    three industry veterans.
                  </p>
                </div>
                <div className="bg-studio-accent border-studio-card absolute top-1 left-[11px] h-2.5 w-2.5 rounded-full border-4 md:left-1/2 md:-translate-x-1/2"></div>
                <div className="hidden md:block md:w-[calc(50%-3rem)]"></div>
              </div>

              {/* Item 2 (Right) */}
              <div className="relative flex flex-col items-center justify-between md:flex-row">
                <div className="hidden md:block md:w-[calc(50%-3rem)]"></div>
                <div className="border-studio-card absolute top-1 left-[11px] h-2.5 w-2.5 rounded-full border-4 bg-white md:left-1/2 md:-translate-x-1/2"></div>
                <div className="pl-12 md:w-[calc(50%-3rem)] md:pl-0">
                  <span className="mb-1 block text-sm font-bold tracking-widest text-white uppercase">
                    2014
                  </span>
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    First Major Hit
                  </h3>
                  <p className="text-studio-light">
                    Released "Starlight Drift", which sold 2 million copies in
                    its first week.
                  </p>
                </div>
              </div>

              {/* Item 3 (Left) */}
              <div className="relative flex flex-col items-center justify-between md:flex-row">
                <div className="pl-12 md:w-[calc(50%-3rem)] md:pl-0 md:text-right">
                  <span className="mb-1 block text-sm font-bold tracking-widest text-white uppercase">
                    2020
                  </span>
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    Global Expansion
                  </h3>
                  <p className="text-studio-light">
                    Opened offices in London and Tokyo to support 24/7 live
                    service operations.
                  </p>
                </div>
                <div className="border-studio-card absolute top-1 left-[11px] h-2.5 w-2.5 rounded-full border-4 bg-white md:left-1/2 md:-translate-x-1/2"></div>
                <div className="hidden md:block md:w-[calc(50%-3rem)]"></div>
              </div>

              {/* Item 4 (Right) */}
              <div className="relative flex flex-col items-center justify-between md:flex-row">
                <div className="hidden md:block md:w-[calc(50%-3rem)]"></div>
                <div className="bg-studio-accent border-studio-card absolute top-1 left-[11px] h-2.5 w-2.5 animate-pulse rounded-full border-4 md:left-1/2 md:-translate-x-1/2"></div>
                <div className="pl-12 md:w-[calc(50%-3rem)] md:pl-0">
                  <span className="text-studio-accent mb-1 block text-sm font-bold tracking-widest uppercase">
                    2024
                  </span>
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    Echoes of Eternity
                  </h3>
                  <p className="text-studio-light">
                    Our most ambitious title to date wins "Best Art Direction"
                    at The Game Awards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
