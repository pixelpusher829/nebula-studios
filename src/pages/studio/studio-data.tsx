
import sarah from "@/assets/images/studio/profiles/sarah.webp";
import david from "@/assets/images/studio/profiles/david.webp";
import elena from "@/assets/images/studio/profiles/elena.webp";
import marcus from "@/assets/images/studio/profiles/marcus.webp";
import emily from "@/assets/images/studio/profiles/emily.webp";
import james from "@/assets/images/studio/profiles/james.webp";
import aisha from "@/assets/images/studio/profiles/aisha.webp";
import tom from "@/assets/images/studio/profiles/tom.webp";
import { Zap, Heart, Target, Lightbulb } from "lucide-react";

export const teamMembers = [
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

export const values = [
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
