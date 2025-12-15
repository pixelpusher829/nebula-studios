
import type React from "react";
import { Hero } from "./Hero";
import { StatsBar } from "./StatsBar";
import { LatestGame } from "./LatestGame";
import { StudioTeaser } from "./StudioTeaser";
import { NewsTeaser } from "./NewsTeaser";
import { CareersCTA } from "./CareersCTA";
import { ContactCTA } from "./ContactCTA";

export const Home: React.FC = () => {
    return (
        <div className="bg-studio-black w-full text-white">
            <Hero />
            <StatsBar />
            <LatestGame />
            <StudioTeaser />
            <NewsTeaser />
            <CareersCTA />
            <ContactCTA />
        </div>
    );
};
