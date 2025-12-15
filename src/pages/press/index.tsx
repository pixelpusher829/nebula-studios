import type React from "react";
import { Download, FileImage, FileText } from "lucide-react";
import type { PressAsset } from "@/shared/types/types";
import { Logo } from "@/shared/layout/Logo";

const assets: PressAsset[] = [
  {
    id: "1",
    title: "Logo Pack (Light/Dark)",
    type: "Logo",
    size: "5.2 MB",
    format: "ZIP",
    thumbnail: "bg-white",
  },
  {
    id: "2",
    title: "Nebula Brand Guide",
    type: "Guide",
    size: "12.4 MB",
    format: "PDF",
    thumbnail: "/images/press/brand-pack.webp",
  },
  {
    id: "3",
    title: "Echoes of Eternity Media Kit",
    type: "Kit",
    size: "1.2 GB",
    format: "ZIP",
    thumbnail: "/images/press/media-kit.webp",
  },
  {
    id: "4",
    title: "Cyber Strike 4K Screenshots",
    type: "Kit",
    size: "850 MB",
    format: "ZIP",
    thumbnail: "/images/press/screenshots.webp",
  },
];

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
            <div
              key={asset.id}
              className="group bg-studio-card hover:border-studio-accent/50 relative overflow-hidden rounded-xl border border-white/5 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div
                className={`relative flex h-40 w-full items-center justify-center overflow-hidden bg-cover bg-top ${
                  asset.type === "Logo" ? asset.thumbnail : ""
                }`}
                style={
                  asset.type === "Kit" || asset.type === "Guide"
                    ? { backgroundImage: `url(${asset.thumbnail})` }
                    : {}
                }
              >
                {/* Dark overlay that appears on hover to help contrast the button, MUST be below the button but above image */}
                <div className="absolute inset-0 z-10 bg-black/0 transition-colors duration-300 group-hover:bg-black/60" />

                {/* Icons and Text (Lower Z-index) */}
                {asset.type === "Logo" && (
                  <div className="flex items-center gap-3">
                    <Logo />
                    <div className="text-studio-black font-display z-0 text-3xl font-bold transition-opacity group-hover:opacity-20">
                      NEBULA
                    </div>
                  </div>
                )}

                {/* Button - Higher Z-index */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    onClick={() => handleDownload(asset.title)}
                    className="text-studio-black hover:bg-studio-accent scale-90 transform rounded-full bg-white p-3 shadow-lg transition-colors group-hover:scale-100 hover:text-white"
                    title="Download Asset"
                  >
                    <Download className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="bg-studio-card relative z-20 p-6">
                <div className="mb-3 flex items-center gap-2">
                  {asset.type === "Guide" && (
                    <FileText className="text-studio-light h-4 w-4" />
                  )}
                  {asset.type === "Logo" && (
                    <FileImage className="text-studio-light h-4 w-4" />
                  )}
                  {asset.type === "Kit" && (
                    <FileImage className="text-studio-light h-4 w-4" />
                  )}
                  <span className="text-studio-accent text-xs font-bold tracking-wider uppercase">
                    {asset.format} • {asset.size}
                  </span>
                </div>
                <h3 className="font-display group-hover:text-studio-accent text-lg font-bold text-white transition-colors">
                  {asset.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
