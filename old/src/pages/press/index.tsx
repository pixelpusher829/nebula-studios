import type React from "react";

import { assets } from "./press-data";

import { AssetCard } from "./AssetCard";



export const Press: React.FC = () => {

    const handleDownload = (assetTitle: string) => {

        const element = document.createElement("a");

        const file = new Blob(

            [

                `Placeholder content for ${assetTitle}. \n\nThis is a demo download file from Nebula Studios website.`,

            ],

            { type: "text/plain" },

        );

        element.href = URL.createObjectURL(file);

        element.download = `${assetTitle.replace(/\s+/g, "_")}_DEMO.txt`;

        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);

    };



    return (

        <section className="bg-studio-black relative min-h-screen pt-32 pb-24">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 flex flex-col items-end justify-between md:flex-row">

                    <div>

                        <h4 className="text-studio-accent font-display mb-2 font-bold tracking-widest uppercase">

                            Media Center

                        </h4>

                        <h2 className="font-display text-4xl font-bold text-white md:text-5xl">

                            PRESS & ASSETS

                        </h2>

                    </div>

                    <p className="text-studio-light mt-4 max-w-md text-sm md:mt-0 md:text-right">

                        Official brand assets and high-resolution media kits for content

                        creators and press. For specific inquiries, contact{" "}

                        <a

                            href="mailto:press@nebulastudios.fake"

                            className="border-studio-accent hover:text-studio-accent border-b text-white transition-colors"

                        >

                            press@nebulastudios.com

                        </a>

                    </p>

                </div>



                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

                    {assets.map((asset) => (

                        <AssetCard key={asset.id} asset={asset} onDownload={handleDownload} />

                    ))}

                </div>

            </div>

        </section>

    );

};


