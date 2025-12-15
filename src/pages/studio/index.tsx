
import type React from "react";
import { StudioHero } from "./StudioHero";
import { CoreValues } from "./CoreValues";
import { Leadership } from "./Leadership";
import { Timeline } from "./Timeline";

export const StudioLife: React.FC = () => {
    return (
        <div className="bg-studio-black">
            <StudioHero />
            <CoreValues />
            <Leadership />
            <Timeline />
        </div>
    );
};
