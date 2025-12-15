
import type React from "react";
import grid1 from "@/assets/images/studio/grid-1.webp";
import grid2 from "@/assets/images/studio/grid-2.webp";
import grid3 from "@/assets/images/studio/grid-3.webp";
import grid4 from "@/assets/images/studio/grid-4.webp";

export const StudioHero: React.FC = () => {
    return (
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
    );
};
