import type React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  Play,
  ArrowRight,
  Users,
  Newspaper,
  Briefcase,
  Mail,
  ArrowUpRight,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Youtube from "react-youtube";
import echosOfEternity from "@/assets/images/home/echos-featured.webp";
import heroVideo from "@/assets/videos/hero-video.webm";
import heroImage from "@/assets/images/home/hero-image.webp";
import teamImage from "@/assets/images/home/nebula-team.webp";
import careersImage from "@/assets/images/home/careers-bg.webp";

export const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 0.5 },
    );
  }, []);

  return (
    <div ref={containerRef} className="bg-studio-black w-full text-white">
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-8"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl rounded-lg border-white/10 bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 z-10 rounded-full bg-white p-2 text-black transition-transform hover:scale-110"
              aria-label="Close video player"
            >
              <X className="h-5 w-5" />
            </button>

            {/* YouTube Embed */}
            <div className="aspect-4/3 overflow-hidden rounded-lg">
              <Youtube
                videoId="DLzxrzFCyOs"
                opts={{
                  height: "100%",
                  width: "100%",
                  playerVars: { autoplay: 1 },
                }}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
      <div className="relative flex min-h-[max(100vh,50rem)] w-full flex-col justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="bg-studio-black/60 absolute inset-0 z-10" />
          <div className="from-studio-black to-studio-black/40 absolute inset-0 z-10 bg-gradient-to-t via-transparent" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-60"
            poster={heroImage}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 mx-auto max-w-5xl px-6 pt-20 pb-24 text-center">
          <div ref={textRef} className="space-y-8">
            <span className="font-display text-studio-accent mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
              Award Winning Studio
            </span>

            <h1 className="font-display text-6xl leading-none font-bold tracking-tight text-white uppercase md:text-8xl">
              We Build <br />
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                Universes
              </span>
            </h1>

            <p className="text-studio-light mx-auto max-w-2xl font-sans text-lg leading-relaxed md:text-xl">
              Nebula Studios is a collective of artists, engineers, and
              storytellers dedicated to pushing the boundaries of interactive
              entertainment.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 pt-8 sm:flex-row">
              <button
                onClick={() => navigate("/games")}
                className="bg-studio-accent font-display rounded px-10 py-4 text-lg font-bold tracking-wider text-white uppercase transition-all hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(255,87,34,0.4)]"
              >
                View Our Games
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="hover:text-studio-accent group flex items-center gap-3 text-white transition-colors"
              >
                <div className="group-hover:border-studio-accent flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors">
                  <Play className="ml-0.5 h-4 w-4 fill-current" />
                </div>
                <div className="font-display text-sm font-bold tracking-wide uppercase">
                  Watch Showreel
                </div>
              </button>
              {/* Youtube Modal */}
            </div>
          </div>
        </div>
      </div>

      {/* 2. STATS BAR */}
      <div className="bg-studio-card/80 relative z-20 -mt-25 mb-12 border-t border-white/10 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 divide-x divide-white/10 px-6 py-5 md:grid-cols-4 md:gap-y-0">
          {[
            { label: "Active Players", value: "10M+" },
            { label: "GOTY Awards", value: "24" },
            { label: "Published Titles", value: "12" },
            { label: "Years Experience", value: "15" },
          ].map((stat, i) => (
            <div key={i} className="px-4 text-center">
              <div className="font-display mb-1 text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-studio-light font-sans text-xs tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. LATEST GAME TEASER */}
      <div className="bg-studio-black relative z-20 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <div>
            <h4 className="text-studio-accent font-display mb-2 font-bold tracking-widest uppercase">
              Latest Release
            </h4>
            <h2 className="font-display mb-6 text-4xl leading-none font-bold text-white md:text-6xl">
              ECHOES OF ETERNITY
            </h2>
            <p className="text-studio-light mb-8 text-lg leading-relaxed">
              Dive into a shattered world where time is fractured. Master the
              Chrono-Blade and rewrite history in our most ambitious Action RPG
              yet. Winner of "Best Art Direction" at the 2024 Game Awards.
            </p>
            <button
              onClick={() => navigate("/games")}
              className="hover:text-studio-accent border-studio-accent inline-flex items-center gap-2 border-b pb-1 font-bold tracking-wide text-white uppercase transition-colors"
            >
              Explore The Game <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="group shadow-studio-accent/10 relative cursor-pointer overflow-hidden rounded-xl border border-white/5 shadow-2xl">
            <img
              src={echosOfEternity}
              className="w-full transition-transform duration-700 group-hover:scale-110"
              alt="Game Preview"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent" />
            <div className="bg-studio-accent font-display absolute right-6 bottom-6 rounded px-4 py-2 text-xl font-bold text-white">
              9.8 / 10
            </div>
          </div>
        </div>
      </div>

      {/* 4. STUDIO TEASER */}
      <section className="bg-studio-dark relative border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="relative order-2 md:order-1">
              <div className="border-studio-accent/20 absolute -top-4 -left-4 z-0 h-full w-full rounded-xl border-2"></div>
              <img
                src={teamImage}
                alt="The Team"
                className="relative z-10 w-full rounded-xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4 flex items-center gap-2">
                <Users className="text-studio-accent h-6 w-6" />
                <h4 className="text-studio-accent font-display font-bold tracking-widest uppercase">
                  The Collective
                </h4>
              </div>
              <h2 className="font-display mb-6 text-4xl font-bold text-white md:text-5xl">
                CRAFTING WORLDS <br /> SINCE 2010
              </h2>
              <p className="text-studio-light mb-8 text-lg leading-relaxed">
                We are a team of 200+ dreamers, engineers, and artists. From our
                HQ in San Francisco to our remote teams globally, we are united
                by a single mission: to create experiences that matter.
              </p>
              <button
                onClick={() => navigate("/studio")}
                className="hover:text-studio-accent inline-flex items-center gap-2 font-bold tracking-wide text-white uppercase transition-colors"
              >
                Meet The Team <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEWS TEASER */}
      <section className="bg-studio-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Newspaper className="text-studio-accent h-5 w-5" />
                <h4 className="text-studio-accent font-display font-bold tracking-widest uppercase">
                  Recent Transmissions
                </h4>
              </div>
              <h2 className="font-display text-4xl font-bold text-white">
                LATEST NEWS
              </h2>
            </div>
            <button
              onClick={() => navigate("/news")}
              className="text-studio-light hidden items-center gap-2 text-sm font-bold tracking-wide uppercase transition-colors hover:text-white md:flex"
            >
              View All <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Behind the Scenes: Void Walker Sound Design",
                category: "Dev Diary",
                date: "Oct 24",
              },
              {
                title: "NebulaCon 2024 Recap & Highlights",
                category: "Community",
                date: "Sep 15",
              },
              {
                title: "Cyber Strike: Season 4 Roadmap",
                category: "Update",
                date: "Aug 30",
              },
            ].map((item, i) => (
              <div
                key={i}
                onClick={() => navigate("/news")}
                className="group bg-studio-card hover:border-studio-accent/50 cursor-pointer rounded-xl border border-white/5 p-6 transition-all hover:-translate-y-1"
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="text-studio-accent bg-studio-accent/10 rounded px-2 py-1 text-xs font-bold uppercase">
                    {item.category}
                  </span>
                  <span className="text-studio-light font-mono text-xs">
                    {item.date}
                  </span>
                </div>
                <h3 className="font-display group-hover:text-studio-accent mb-4 text-xl font-bold text-white transition-colors">
                  {item.title}
                </h3>
                <div className="text-studio-light flex items-center gap-2 text-sm font-bold uppercase">
                  Read More <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CAREERS CTA */}
      <section className="bg-studio-card relative overflow-hidden py-32">
        <div className="absolute inset-0">
          <img
            src={careersImage}
            className="h-full w-full object-cover opacity-20"
            alt="Office"
          />
          <div className="from-studio-black via-studio-black/90 absolute inset-0 bg-gradient-to-r to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 md:flex-row">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2">
              <Briefcase className="text-studio-accent h-6 w-6" />
              <h4 className="text-studio-accent font-display font-bold tracking-widest uppercase">
                Careers
              </h4>
            </div>
            <h2 className="font-display mb-6 text-5xl font-bold text-white">
              YOUR LEGACY <br /> STARTS HERE
            </h2>
            <p className="text-studio-light mb-8 text-xl leading-relaxed">
              We're looking for visionaries, rebels, and masters of their craft.
              Open positions in Engineering, Art, Design, and QA.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/careers")}
                className="text-studio-black font-display hover:bg-studio-accent rounded bg-white px-8 py-3 font-bold tracking-wider uppercase transition-all hover:text-white"
              >
                View Open Positions
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-studio-black/50 w-80 rounded-xl border border-white/10 p-8 backdrop-blur-md">
              <h4 className="mb-4 text-left font-bold text-white uppercase">
                We Are Hiring
              </h4>
              <ul className="space-y-3">
                <li className="text-studio-light border-b border-white/10 pb-2 text-sm">
                  Senior Gameplay Engineer
                </li>
                <li className="text-studio-light border-b border-white/10 pb-2 text-sm">
                  Lead Concept Artist
                </li>
                <li className="text-studio-light border-b border-white/10 pb-2 text-sm">
                  Narrative Designer
                </li>
                <li className="text-studio-light pb-2 text-sm">
                  UI/UX Designer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT PRE-FOOTER */}
      <section className="bg-studio-black border-t border-white/5 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Mail className="text-studio-accent mx-auto mb-6 h-12 w-12" />
          <h2 className="font-display mb-6 text-4xl font-bold text-white uppercase">
            Partner With Us
          </h2>
          <p className="text-studio-light mb-8 text-lg leading-relaxed">
            Looking for a publishing partner? Have a media inquiry? Or just want
            to say hello? We are always looking for the next great
            collaboration.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="font-display hover:text-studio-black rounded border border-white/20 px-10 py-4 text-lg font-bold tracking-wider text-white uppercase transition-all hover:bg-white"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};
